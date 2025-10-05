import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, TranslateModule], // ✅ add TranslateModule here
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }

  toggleMenu() {
    const navLinks = document.getElementById('navbar-links');
    navLinks?.classList.toggle('show');
  }

  closeMenu() {
    const navLinks = document.getElementById('navbar-links');
    navLinks?.classList.remove('show');
  }

  switchLanguage(event: any) {
    const lang = event.target.value;
    this.translate.use(lang);
  }
}
