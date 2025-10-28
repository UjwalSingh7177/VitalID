import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../service/language.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule],
  templateUrl: './profilecomponent.html',
  styleUrls: ['./profilecomponent.css']
})
export class ProfileComponent implements OnInit {
  name = ''; email = ''; phone = ''; bloodGroup = ''; dob = ''; homeAddress = '';
  emergencyContactName = ''; emergencyContactPhone = '';
  medicalConditions = ''; medications = '';
  vehicleNumber = ''; vehicleType = '';
   isLoaded = false; 

  constructor(private route: ActivatedRoute,
              private translate: TranslateService,
              private langService: LanguageService) {}

   async ngOnInit() {
    const langParam = this.route.snapshot.queryParamMap.get('lang') || 'en';

    // 👇 Load the translation BEFORE showing data
    await this.langService.setLanguage(langParam);
    await this.translate.use(langParam).toPromise();

    // Now load profile data
    this.name = this.route.snapshot.queryParamMap.get('name') || '';
    this.email = this.route.snapshot.queryParamMap.get('email') || '';
    this.phone = this.route.snapshot.queryParamMap.get('phone') || '';
    this.bloodGroup = this.route.snapshot.queryParamMap.get('bloodGroup') || '';
    this.dob = this.route.snapshot.queryParamMap.get('dob') || '';
    this.homeAddress = this.route.snapshot.queryParamMap.get('homeAddress') || '';
    this.emergencyContactName = this.route.snapshot.queryParamMap.get('emergencyContactName') || '';
    this.emergencyContactPhone = this.route.snapshot.queryParamMap.get('emergencyContactPhone') || '';
    this.medicalConditions = this.route.snapshot.queryParamMap.get('medicalConditions') || '';
    this.medications = this.route.snapshot.queryParamMap.get('medications') || '';
    this.vehicleNumber = this.route.snapshot.queryParamMap.get('vehicleNumber') || '';
    this.vehicleType = this.route.snapshot.queryParamMap.get('vehicleType') || '';

    this.isLoaded = true; // ✅ Now show template
  }

  callAmbulance() {
    if (confirm("Call emergency number?\n1️⃣ 108\n2️⃣ 112\n3️⃣ 1800 121 911 911\nPress OK to call 108.")) {
      window.location.href = 'tel:108';
    }
  }
}
