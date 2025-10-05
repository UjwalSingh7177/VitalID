import { Routes } from '@angular/router';
import { ProfileComponent } from './profilecomponent/profilecomponent';
import { QrformComponent } from './qrform/qrform';
import { Home } from './home/home';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'profile', component: ProfileComponent },
  { path: 'qrform', component: QrformComponent }
];
