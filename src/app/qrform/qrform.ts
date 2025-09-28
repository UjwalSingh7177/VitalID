import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { QRCodeComponent } from 'angularx-qrcode';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-qrform',
  standalone: true,
  imports: [CommonModule, FormsModule, QRCodeComponent],
  templateUrl: './qrform.html',
  styleUrls: ['./qrform.css']
})
export class QrformComponent {
  name = '';
  email = '';
  phone = '';
  qrData = '';

  @ViewChild('stickerRef', { static: false }) stickerRef!: ElementRef;

generateQr() {
  const baseUrl = 'https://vital-id-theta.vercel.app/profile';
  this.qrData = `${baseUrl}?name=${encodeURIComponent(this.name)}&email=${encodeURIComponent(this.email)}&phone=${encodeURIComponent(this.phone)}`;
}


  async downloadQr() {
    if (this.stickerRef) {
      const canvas = await html2canvas(this.stickerRef.nativeElement);
      const dataUrl = canvas.toDataURL('image/png');

      const link = document.createElement('a');
      link.href = dataUrl;
      link.download = 'sticker-qr.png';
      link.click();
    }
  }
}
