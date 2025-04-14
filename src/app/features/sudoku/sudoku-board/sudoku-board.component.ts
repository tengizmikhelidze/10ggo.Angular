import {Component} from '@angular/core';
import {SudokuBoard} from '../interfaces/sudoku.interface';
import {generateSudokuGrid} from '../generate-sudoku';
import {InputNumber} from 'primeng/inputnumber';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-sudoku-board',
  imports: [
    InputNumber,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './sudoku-board.component.html',
  styleUrl: './sudoku-board.component.scss'
})
export class SudokuBoardComponent  {

  solution!: number[][];
  board!: SudokuBoard[][];

  selectedRow: number | null = null;
  selectedCol: number | null = null;

  constructor() {
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

