import {Routes} from '@angular/router';
import {SudokuComponent} from './sudoku.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: SudokuComponent
  }
];
