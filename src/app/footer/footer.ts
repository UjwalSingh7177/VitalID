// src/app/footer/footer.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,               // ✅ mark as standalone
  templateUrl: './footer.html',
  styleUrls: ['./footer.css']     // ✅ must be plural
})
export class FooterComponent {}
