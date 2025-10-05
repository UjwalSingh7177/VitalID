import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { QRCodeComponent } from 'angularx-qrcode';
import * as htmlToImage from 'html-to-image';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-qrform',
  standalone: true,
  imports: [CommonModule, FormsModule, QRCodeComponent, TranslateModule],
  templateUrl: './qrform.html',
  styleUrls: ['./qrform.css']
})
export class QrformComponent {

  // Personal Info
  name = '';
  email = '';
  phone = '';
  bloodGroup = '';
  dob = '';

  // Emergency Contact
  emergencyContactName = '';
  emergencyContactPhone = '';

  // Medical Info
  medicalConditions = '';
  medications = '';

  // Vehicle Info
  vehicleNumber = '';
  vehicleType = '';
  homeAddress = '';

  // QR Design and Custom Text
  selectedDesign = 'design1';
  customText = '';

  // Selected Language (default English)
  selectedLanguage = 'en';

  // QR Data + Reference
  qrData = '';
  @ViewChild('stickerRef', { static: false }) stickerRef!: ElementRef;

  // Generate QR
  generateQr() {
    const baseUrl = 'https://vital-id-theta.vercel.app/profile';

    const params = new URLSearchParams({
      name: this.name,
      email: this.email,
      phone: this.phone,
      bloodGroup: this.bloodGroup,
      dob: this.dob,
      emergencyContactName: this.emergencyContactName,
      emergencyContactPhone: this.emergencyContactPhone,
      medicalConditions: this.medicalConditions,
      medications: this.medications,
      vehicleNumber: this.vehicleNumber,
      vehicleType: this.vehicleType,
      homeAddress: this.homeAddress,
      lang: this.selectedLanguage  // include language
    });

    this.qrData = `${baseUrl}?${params.toString()}`;
  }

  // Download full sticker
  downloadQr() {
    if (this.stickerRef) {
      htmlToImage.toPng(this.stickerRef.nativeElement, { cacheBust: true, pixelRatio: 6 })
        .then((dataUrl: string) => {
          const link = document.createElement('a');
          link.href = dataUrl;
          link.download = 'sticker-qr.png';
          link.click();
        })
        .catch(err => console.error('Error generating sticker:', err));
    }
  }

  // Download only QR
  downloadRawQr() {
    const qrCanvas = this.stickerRef.nativeElement.querySelector('canvas');
    if (qrCanvas) {
      const dataUrl = qrCanvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = dataUrl;
      link.download = 'qr-only.png';
      link.click();
    }
  }
}
