import {ChangeDetectionStrategy, Component} from '@angular/core';
import {AppToolbarTitle} from '../../shared/components/layout/toolbar/base-toolbar.component';
import {ToolbarService} from '../../shared/components/layout/toolbar/services/toolbar.service';
import {generateSudokuGrid} from './generate-sudoku';
import {SudokuBoardComponent} from './sudoku-board/sudoku-board.component';
import {SudokuBoard} from './interfaces/sudoku.interface';

@Component({
  selector: 'app-sudoku',
  imports: [
    SudokuBoardComponent
  ],
  templateUrl: './sudoku.component.html',
  styleUrl: './sudoku.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SudokuComponent extends AppToolbarTitle {
  toolbarTitle = "Apps / Sudoku";

  solution!: number[][];
  board!: SudokuBoard[][];

  selectedRow: number | null = null;
  selectedCol: number | null = null;

  constructor(toolbarService: ToolbarService) {
    super(toolbarService);
    this.generatePuzzle();
  }

  generatePuzzle(): void {
    this.solution = generateSudokuGrid();

    this.selectedRow = null;
    this.selectedCol = null;

    this.board = this.mapSolutionToBoard(this.solution)

    this.removeFixedNumberOfCells();

  }

  mapSolutionToBoard(solution: number[][]): SudokuBoard[][] {
    return solution.map(row => [...row.map((r)=> ({correctNumber: r, notes: [], value: r}))]);
  }

  removeFixedNumberOfCells(cellsToRemove: number = 40) {
    while (cellsToRemove > 0) {
      const r = Math.floor(Math.random() * 9);
      const c = Math.floor(Math.random() * 9);
      if (this.board[r][c] !== null) {
        this.board[r][c].value = null;
        cellsToRemove--;
      }
    }
  }
}
