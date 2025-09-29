import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QrformComponent } from '../qrform/qrform';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, QrformComponent],   // ✅ import Qrform here
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  showQrForm = false;

  toggleQrForm() {
    this.showQrForm = !this.showQrForm;
  }
  toggleMenu() {
    const navLinks = document.getElementById('navbar-links');
    navLinks?.classList.toggle('show');
  }
  closeMenu() {
  const navLinks = document.getElementById('navbar-links');
  navLinks?.classList.remove('show');
}

}
