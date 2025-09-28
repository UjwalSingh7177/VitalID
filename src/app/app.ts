import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar-component/navbar.component';
import { FooterComponent } from './footer/footer';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NavbarComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('stickyQr');
}
