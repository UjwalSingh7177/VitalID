import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule],
  templateUrl: './profilecomponent.html',
  styleUrls: ['./profilecomponent.css']
})
export class ProfileComponent implements OnInit {
  // 🌟 Personal Info
  name = '';
  email = '';
  phone = '';
  bloodGroup = '';
  dob = '';
  homeAddress = '';

  // 🚨 Emergency Contact
  emergencyContactName = '';
  emergencyContactPhone = '';

  // 🏥 Medical Info
  medicalConditions = '';
  medications = '';

  // 🚗 Vehicle Info
  vehicleNumber = '';
  vehicleType = '';

  constructor(private route: ActivatedRoute, private translate: TranslateService) {}

  ngOnInit() {
    // Get language from QR params (default to 'en')
    const lang = this.route.snapshot.queryParamMap.get('lang') || 'en';
    this.translate.use(lang);

    // 🌟 Personal Info
    this.name = this.route.snapshot.queryParamMap.get('name') || '';
    this.email = this.route.snapshot.queryParamMap.get('email') || '';
    this.phone = this.route.snapshot.queryParamMap.get('phone') || '';
    this.bloodGroup = this.route.snapshot.queryParamMap.get('bloodGroup') || '';
    this.dob = this.route.snapshot.queryParamMap.get('dob') || '';
    this.homeAddress = this.route.snapshot.queryParamMap.get('homeAddress') || '';

    // 🚨 Emergency Contact
    this.emergencyContactName = this.route.snapshot.queryParamMap.get('emergencyContactName') || '';
    this.emergencyContactPhone = this.route.snapshot.queryParamMap.get('emergencyContactPhone') || '';

    // 🏥 Medical Info
    this.medicalConditions = this.route.snapshot.queryParamMap.get('medicalConditions') || '';
    this.medications = this.route.snapshot.queryParamMap.get('medications') || '';

    // 🚗 Vehicle Info
    this.vehicleNumber = this.route.snapshot.queryParamMap.get('vehicleNumber') || '';
    this.vehicleType = this.route.snapshot.queryParamMap.get('vehicleType') || '';
  }

  callAmbulance() {
    const options = [
      { number: '108', label: 'Ambulance (108)' },
      { number: '112', label: 'Emergency (112)' },
      { number: '1800121911911', label: 'RED.Health (Toll-free)' }
    ];

    const selected = confirm(
      "Call emergency number?\n\n1️⃣ 108 - Ambulance\n2️⃣ 112 - General Emergency\n3️⃣ 1800 121 911 911 - RED.Health\n\nPress OK to call 108."
    );

    if (selected) window.location.href = 'tel:108';
  }
}
