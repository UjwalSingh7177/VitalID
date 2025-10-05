// src/app/footer/footer.component.ts
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  standalone: true,
   imports: [CommonModule, TranslateModule],               // ✅ mark as standalone
  templateUrl: './footer.html',
  styleUrls: ['./footer.css']     // ✅ must be plural
})
export class FooterComponent {}
