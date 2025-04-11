import {Routes} from '@angular/router';
import {TournamentBracketGeneratorComponent} from './tournament-bracket-generator.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: TournamentBracketGeneratorComponent
  }
];
