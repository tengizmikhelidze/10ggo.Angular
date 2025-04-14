/**
 * Generates a valid Sudoku grid
 * @returns A 9x9 grid as a nested array [ [], [], [], [], [], [], [], [], [] ]
 */
export function generateSudokuGrid(): number[][] {
  // Initialize empty 9x9 grid
  const grid: number[][] = Array(9).fill(null).map(() => Array(9).fill(0));

  // Fill the grid
  fillGrid(grid);

  return grid;
}

/**
 * Helper function to fill the grid using backtracking algorithm
 * @param grid The grid to fill
 * @returns true if the grid was successfully filled, false otherwise
 */
function fillGrid(grid: number[][]): boolean {
  // Find an empty cell
  let row = -1;
  let col = -1;
  let isEmpty = true;

  // Find first empty cell
  for (let i = 0; i < 9 && isEmpty; i++) {
    for (let j = 0; j < 9 && isEmpty; j++) {
      if (grid[i][j] === 0) {
        row = i;
        col = j;
        isEmpty = false;
      }
    }
  }

  // If no empty cell is found, grid is filled
  if (isEmpty) {
    return true;
  }

  // Get a random order of numbers to try
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  shuffleArray(numbers);

  // Try each number
  for (const num of numbers) {
    // Check if number can be placed
    if (isSafe(grid, row, col, num)) {
      // Place the number
      grid[row][col] = num;

      // Recursively try to fill rest of grid
      if (fillGrid(grid)) {
        return true;
      }

      // If placing number doesn't lead to solution, reset and try next number
      grid[row][col] = 0;
    }
  }

  // No solution found with current configuration
  return false;
}

/**
 * Check if it's safe to place a number at a specific position
 * @param grid The Sudoku grid
 * @param row Row index
 * @param col Column index
 * @param num Number to check
 * @returns true if safe, false otherwise
 */
function isSafe(grid: number[][], row: number, col: number, num: number): boolean {
  // Check if number exists in the row
  for (let x = 0; x < 9; x++) {
    if (grid[row][x] === num) {
      return false;
    }
  }

  // Check if number exists in the column
  for (let x = 0; x < 9; x++) {
    if (grid[x][col] === num) {
      return false;
    }
  }

  // Check if number exists in the 3x3 box
  const startRow = Math.floor(row / 3) * 3;
  const startCol = Math.floor(col / 3) * 3;

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (grid[i + startRow][j + startCol] === num) {
        return false;
      }
    }
  }

  return true;
}

/**
 * Shuffle array in-place using Fisher-Yates algorithm
 * @param array Array to shuffle
 */
function shuffleArray(array: number[]): void {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
