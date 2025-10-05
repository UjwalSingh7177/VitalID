import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-profile',
  imports: [CommonModule, FormsModule, TranslateModule, TranslateModule],
  templateUrl: './profilecomponent.html',
  styleUrls: ['./profilecomponent.css']
})
export class ProfileComponent implements OnInit {
  name = '';
  email = '';
  phone = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.name = this.route.snapshot.queryParamMap.get('name') || '';
    this.email = this.route.snapshot.queryParamMap.get('email') || '';
    this.phone = this.route.snapshot.queryParamMap.get('phone') || '';
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
