import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { QRCodeComponent } from 'angularx-qrcode';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../service/language.service';

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

  /** 🌐 Update language */
  onLanguageChange() {
    this.languageService.setLanguage(this.selectedLanguage);
  }

  /** 🔹 Generate QR data */
   generateQr() {
    const baseUrl = 'https://vital-id-hjl3.vercel.app/profile'; // ✅ live deployed link
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
      lang: this.selectedLanguage
    });

    this.qrData = `${baseUrl}?${params.toString()}`;
  }

  /** 🧾 Download full sticker — SCANNABLE VERSION */
  async downloadQr() {
    const qrCanvas = document.querySelector('qrcode canvas') as HTMLCanvasElement;
    if (!qrCanvas) {
      console.error('QR canvas not found');
      return;
    }

    const width = 600;
    const height = 700;
    const finalCanvas = document.createElement('canvas');
    const ctx = finalCanvas.getContext('2d')!;
    finalCanvas.width = width;
    finalCanvas.height = height;

    // 🎨 Background and border
    ctx.fillStyle = '#fff5f5'; // light pink
    ctx.fillRect(0, 0, width, height);
    ctx.strokeStyle = '#c62828';
    ctx.lineWidth = 8;
    ctx.strokeRect(20, 20, width - 40, height - 40);

    // 🖼️ Draw the actual QR image
    const qrSize = 350;
    const qrX = (width - qrSize) / 2;
    const qrY = 120;
    ctx.drawImage(qrCanvas, qrX, qrY, qrSize, qrSize);

    // 📝 Add the bottom text
    ctx.fillStyle = '#b71c1c';
    ctx.font = 'bold 28px Poppins, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(
      this.customText || '⚠️ IN CASE OF EMERGENCY, SCAN ME',
      width / 2,
      qrY + qrSize + 80
    );

    // 💾 Download as image
    const link = document.createElement('a');
    link.download = 'QR_Sticker.png';
    link.href = finalCanvas.toDataURL('image/png');
    link.click();
  }

  /** 🔲 Download raw QR only */
  downloadRawQr() {
    const qrElement = document.querySelector('qrcode canvas') as HTMLCanvasElement;
    if (!qrElement) return;
    const link = document.createElement('a');
    link.download = 'QR_Code.png';
    link.href = qrElement.toDataURL('image/png');
    link.click();
  }
}
