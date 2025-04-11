import { Component } from '@angular/core';
import {AppToolbarTitle} from '../../shared/components/layout/toolbar/base-toolbar.component';
import {ToolbarService} from '../../shared/components/layout/toolbar/services/toolbar.service';

@Component({
  selector: 'app-sudoku',
  imports: [],
  templateUrl: './sudoku.component.html',
  styleUrl: './sudoku.component.scss'
})
export class SudokuComponent extends AppToolbarTitle {
  toolbarTitle = "Apps / Sudoku";

  constructor(toolbarService: ToolbarService) {
    super(toolbarService);
  }
}
