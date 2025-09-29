import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
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
}
