import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {SudokuBoard} from '../interfaces/sudoku.interface';
import {InputNumber} from 'primeng/inputnumber';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-sudoku-board',
  imports: [
    InputNumber,
    FormsModule
  ],
  templateUrl: './sudoku-board.component.html',
  styleUrl: './sudoku-board.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SudokuBoardComponent {
  board = input.required<(SudokuBoard)[][]>();
}
