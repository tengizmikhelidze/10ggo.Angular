import {Routes} from '@angular/router';

const featureRoutes: Routes = [
  {
    path: 'bracket',
    loadChildren: () =>
      import('./features/tournament-bracket-generator/routes').then(
        (m) => m.routes
      )
  },
  {
    path: '',
    redirectTo: 'bracket',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'bracket'
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
