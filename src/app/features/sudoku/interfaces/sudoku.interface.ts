import {SudokuDifficultyEnum} from '../enums/difficulty.enum';

export interface SudokuBoard {
  correctNumber: number,
  notes: (1|2|3|4|5|6|7|8|9)[],
  value: number | null
}

export interface SudokuBoardOptions {
  difficulty: SudokuDifficultyEnum,
  maxMistakes: number
}
