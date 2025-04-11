import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: 'apps',
    children: [
      {
        path: 'bracket',
        loadChildren: () =>
          import('./features/tournament-bracket-generator/routes').then(
            (m) => m.routes
          )
      } ,
      {
        path: 'sudoku',
        loadChildren: () =>
          import('./features/sudoku/routes').then(
            (m) => m.routes
          )
      } ,
      {
        path: 'secret-santa',
        loadChildren: () =>
          import('./features/secret-santa/routes').then(
            (m) => m.routes
          )
      } ,
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'bracket'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'apps',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'apps'
  },
];
