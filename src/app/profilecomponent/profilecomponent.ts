// profile.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  template: `
    <div class="profile">
      <h2>User Info</h2>
      <p><strong>Name:</strong> {{ name }}</p>
      <p><strong>Email:</strong> {{ email }}</p>
      <p><strong>Phone:</strong> {{ phone }}</p>
    </div>
  `,
  styles: [`
    .profile { max-width: 400px; margin: 2rem auto; padding: 1rem; border: 1px solid #ddd; border-radius: 8px; }
  `]
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
}
