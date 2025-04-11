import {Routes} from '@angular/router';

const featureRoutes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./features/tournament-bracket-generator/routes').then(
        (m) => m.routes
      )
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'home'
  }
]

export const routes: Routes = [
  {
    path: ':lang',
    children: featureRoutes
  },
  {
    path: '',
    redirectTo: 'ka',
    pathMatch: 'full'
  },
  {path: '**', redirectTo: 'ka'}

];
