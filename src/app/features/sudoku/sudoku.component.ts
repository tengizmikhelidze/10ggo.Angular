import {ChangeDetectionStrategy, Component} from '@angular/core';
import {AppToolbarTitle} from '../../shared/components/layout/toolbar/base-toolbar.component';
import {ToolbarService} from '../../shared/components/layout/toolbar/services/toolbar.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SudokuBoardComponent} from './sudoku-board/sudoku-board.component';

@Component({
  selector: 'app-sudoku',
  imports: [
    ReactiveFormsModule,
    FormsModule,
    SudokuBoardComponent
  ],
  templateUrl: './sudoku.component.html',
  styleUrl: './sudoku.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SudokuComponent extends AppToolbarTitle {
  toolbarTitle = "Apps / Sudoku";

  constructor(toolbarService: ToolbarService) {
    super(toolbarService);
  }
}
