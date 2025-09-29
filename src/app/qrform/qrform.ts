import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { QRCodeComponent } from 'angularx-qrcode';
import * as htmlToImage from 'html-to-image';

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
  selectedDesign = 'design1';  // default design
  customText = '';             // user custom sticker message

  @ViewChild('stickerRef', { static: false }) stickerRef!: ElementRef;

  generateQr() {
    const baseUrl = 'https://vital-id-theta.vercel.app/profile';
    this.qrData = `${baseUrl}?name=${encodeURIComponent(this.name)}&email=${encodeURIComponent(this.email)}&phone=${encodeURIComponent(this.phone)}`;
  }

  downloadQr() {
    if (this.stickerRef) {
      htmlToImage.toPng(this.stickerRef.nativeElement, {
        cacheBust: true,
        pixelRatio: 6
      })
      .then((dataUrl: string) => {
        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = 'sticker-qr.png';
        link.click();
      })
      .catch(err => console.error('Error generating sticker:', err));
    }
  }

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
