import { Routes } from '@angular/router';
import { ProfileComponent } from './profilecomponent/profilecomponent';
import { QrformComponent } from './qrform/qrform';

export const routes: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: 'qrform', component: QrformComponent }
];
