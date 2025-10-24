import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { QRCodeComponent } from 'angularx-qrcode';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../service/language.service';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-qrform',
  standalone: true,
  imports: [CommonModule, FormsModule, QRCodeComponent, TranslateModule],
  templateUrl: './qrform.html',
  styleUrls: ['./qrform.css']
})
export class QrformComponent {
  qrData: string | null = null;
  selectedDesign = 'design5';
  customText = '';

  // ✅ add this missing property
  selectedLanguage = 'en';

  name = '';
  email = '';
  phone = '';
  bloodGroup = '';
  dob = '';
  emergencyContactName = '';
  emergencyContactPhone = '';
  medicalConditions = '';
  medications = '';
  vehicleNumber = '';
  vehicleType = '';
  homeAddress = '';

  @ViewChild('stickerRef') stickerRef!: ElementRef;

  constructor(private languageService: LanguageService) {}

  /**
   * 🌐 Change language when selection updates
   */
  onLanguageChange() {
    this.languageService.setLanguage(this.selectedLanguage);
  }

  /**
   * 🔹 Generate QR data
   */
  generateQr() {
    const data = {
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
      homeAddress: this.homeAddress
    };
    this.qrData = JSON.stringify(data);
  }

  /**
   * 🧾 Download full sticker (QR + text + design)
   */
  downloadQr() {
    if (!this.stickerRef) return;

    const element = this.stickerRef.nativeElement;
    const originalBg = element.style.backgroundColor;
    element.style.backgroundColor = '#ffffff';

    html2canvas(element, {
      scale: 3,
      useCORS: true,
      backgroundColor: '#ffffff'
    }).then((canvas) => {
      const link = document.createElement('a');
      link.download = 'QR_Sticker.png';
      link.href = canvas.toDataURL('image/png');
      link.click();
      element.style.backgroundColor = originalBg;
    });
  }

  /**
   * 🔲 Download only raw QR code (no design/text)
   */
  downloadRawQr() {
    const qrElement = document.querySelector('qrcode canvas') as HTMLCanvasElement;
    if (!qrElement) return;

    const link = document.createElement('a');
    link.download = 'QR_Code.png';
    link.href = qrElement.toDataURL('image/png');
    link.click();
  }
}
