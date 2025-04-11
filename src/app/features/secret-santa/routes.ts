import {Routes} from '@angular/router';
import {SecretSantaComponent} from './secret-santa.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: SecretSantaComponent
  }
];
