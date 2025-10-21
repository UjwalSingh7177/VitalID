import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { QRCodeComponent } from 'angularx-qrcode';
import * as htmlToImage from 'html-to-image';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../service/language.service';

@Component({
  selector: 'app-qrform',
  standalone: true,
  imports: [CommonModule, FormsModule, QRCodeComponent, TranslateModule],
  templateUrl: './qrform.html',
  styleUrls: ['./qrform.css']
})
export class QrformComponent implements OnInit {
  name = ''; email = ''; phone = ''; bloodGroup = ''; dob = '';
  emergencyContactName = ''; emergencyContactPhone = '';
  medicalConditions = ''; medications = '';
  vehicleNumber = ''; vehicleType = ''; homeAddress = '';

  selectedDesign = 'design1';
  customText = '';
  selectedLanguage = 'en';
  qrData = '';
  @ViewChild('stickerRef', { static: false }) stickerRef!: ElementRef;

  constructor(private langService: LanguageService) {}

  ngOnInit() {
    // Subscribe to language changes
    this.langService.language$.subscribe(lang => {
      this.selectedLanguage = lang;
    });
  }

  onLanguageChange(event: any) {
    const lang = event.target.value;
    this.langService.setLanguage(lang);
  }

  generateQr() {
    const baseUrl = 'https://vital-id-theta.vercel.app/profile';
    const params = new URLSearchParams({
      name: this.name, email: this.email, phone: this.phone, bloodGroup: this.bloodGroup,
      dob: this.dob, emergencyContactName: this.emergencyContactName, emergencyContactPhone: this.emergencyContactPhone,
      medicalConditions: this.medicalConditions, medications: this.medications,
      vehicleNumber: this.vehicleNumber, vehicleType: this.vehicleType, homeAddress: this.homeAddress,
      lang: this.selectedLanguage
    });
    this.qrData = `${baseUrl}?${params.toString()}`;
  }

  downloadQr() { /* same as before */ }
  downloadRawQr() { /* same as before */ }
}
