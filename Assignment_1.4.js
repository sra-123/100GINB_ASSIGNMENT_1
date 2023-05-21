function printPyramidPattern(rows) {
    for (let i = 1; i <= rows; i++) {
      let pattern = ' '.repeat(rows - i);
      pattern += '*'.repeat(2 * i - 1);
      console.log(pattern);
    }
  }
  

  const numRows = 5;
  printPyramidPattern(numRows);
  