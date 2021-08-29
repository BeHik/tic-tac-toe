class TicTacToe {
  constructor() {
    this.gameField = new Array(new Array(null, null, null), new Array(null, null, null), new Array(null, null, null));
    this.CurrentPlayer = 'x';
  }

  getCurrentPlayerSymbol() {
    return this.CurrentPlayer;
  }

  nextTurn(rowIndex, columnIndex) {
    if (this.gameField[rowIndex][columnIndex] !== null) return;

    this.gameField[rowIndex][columnIndex] = this.CurrentPlayer;
    this.CurrentPlayer = this.CurrentPlayer === 'x' ? 'o' : 'x';
  }

  isFinished() {
    return !!this.getWinner() || this.isDraw();
  }

    getWinner() {

      const winnerByRow = this.gameField.map(row => row.every(p => p === 'x')||row.every(p => p === 'o')).findIndex(p => p);
      if (winnerByRow >= 0) return this.gameField[winnerByRow][0];
      
      const winnerByColumn = this.gameField.map((_, index) => this.gameField.map(column => column[index])).map(column => column.every(p => p === 'x') || column.every(p => p === 'o')).findIndex(p => p);
      if (winnerByColumn >= 0) return this.gameField[0][winnerByColumn];
      
      let currentDiagonal = this.gameField.map((row, index) => row[index]);
      const winnerByGeneralDiagonal = currentDiagonal.every(p => p === 'x') || currentDiagonal.every(p => p === 'o');
      if (winnerByGeneralDiagonal) return this.gameField[0][0];

      currentDiagonal = this.gameField.map((row, index) => row[2 - index]);
      const winnerBySeveralDiagonal = currentDiagonal.every(p => p === 'x') || currentDiagonal.every(p => p === 'o');
      if (winnerBySeveralDiagonal) return this.gameField[0][2];
      
      return null;

    }

    noMoreTurns() {
      return this.gameField.every(row => row.every(column => column));
    }

    isDraw() {
      return this.noMoreTurns() && !this.getWinner();
    }

    getFieldValue(rowIndex, colIndex) {
      return this.gameField[rowIndex][colIndex] ? this.gameField[rowIndex][colIndex] : null;
    }
}

module.exports = TicTacToe;
