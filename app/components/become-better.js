export default function() {
  'use strict'
  /*
  *   Become Better from here
  */

  // var puzzleaa = [
  //           [5,3,-,-,7,-,-,-,-],
  //           [6,-,-,1,9,5,-,-,-],
  //           [-,9,8,-,-,-,-,6,-],
  //           [8,-,-,-,6,-,-,-,3],
  //           [4,-,-,8,-,3,-,-,1],
  //           [7,-,-,-,2,-,-,-,6],
  //           [-,6,-,-,-,-,2,8,-],
  //           [-,-,-,4,1,9,-,-,5],
  //           [-,-,-,-,8,-,-,7,9]];

  var puzzle = window.p = [
            [5,3,0,0,7,0,0,0,0],
            [6,0,0,1,9,5,0,0,0],
            [0,9,8,0,0,0,0,6,0],
            [8,0,0,0,6,0,0,0,3],
            [4,0,0,8,0,3,0,0,1],
            [7,0,0,0,2,0,0,0,6],
            [0,6,0,0,0,0,2,8,0],
            [0,0,0,4,1,9,0,0,5],
            [0,0,0,0,8,0,0,7,9]];

  function sudoku(puzzle) {
    var possibleArr,
        state = window.state = [],
        completeList = [1, 2, 3, 4, 5, 6, 7, 8, 9],
        mappingPosArr = mappingPositionGenerator();

    state.push([ ...JSON.parse(JSON.stringify(puzzle))])

    function mappingPositionGenerator() {
      var arr = [],
          position = [];

      for ( let i = 0; i < 9; i++ ) arr.push([]);

      puzzle.forEach((value, row) => {
        value.forEach((target, col) => {
          position = []
          position.push(row, col)
          if ( row <= 2 ) {
            if ( col <= 2 ) {
              arr[0].push(position)
            } else if ( col > 2 && col <= 5 ) {
              arr[1].push(position)
            } else {
              arr[2].push(position)
            }
          }

          if ( row > 2 && row <= 5 ) {
            if ( col <= 2 ) {
              arr[3].push(position)
            } else if ( col > 2 && col <= 5 ) {
              arr[4].push(position)
            } else {
              arr[5].push(position)
            }
          }

          if ( row > 5 ) {
            if ( col <= 2 ) {
              arr[6].push(position)
            } else if ( col > 2 && col <= 5 ) {
              arr[7].push(position)
            } else {
              arr[8].push(position)
            }
          }
        })
      })
      console.log('Mapping Arr', arr);
      return arr
    }

    /**
     * FindPossible - Find possible value gathering to an array on specific position
     *
     * @param  {Integer} row
     * @param  {Integer} col
     * @return {Array} possibleArr
     */
    function findPossible(row, col) {
      var rowOccurence = [],
          colOccurence = [],
          squareOccurence = [],
          occurence = [], targetAreaArr = [];
      // Row occurence
      rowOccurence = puzzle[row].filter(item => item !== 0 && !Array.isArray(item))

      // Column occurence
      puzzle.forEach(function(arr){
        if (arr[col] !== 0 && !Array.isArray(arr[col])) {
          colOccurence.push(arr[col])
        }
      })

      // Square occurence
      mappingPosArr.every((rowArr, rowIndex) => {
        return rowArr.every((target, colIndex) => {
          if (target[0] === row && target[1] === col) {
            targetAreaArr = mappingPosArr[rowIndex]
            // console.log('targetAreaArr', targetAreaArr);
            return false
          } else {
            return true
          }
        })
      })

      squareOccurence = targetAreaArr
                          .filter(pos => puzzle[pos[0]][pos[1]] !== 0 && !Array.isArray(puzzle[pos[0]][pos[1]]))
                          .map(pos => puzzle[pos[0]][pos[1]])

      occurence = rowOccurence.concat(colOccurence, squareOccurence)

      return completeList.filter(num => occurence.indexOf(num) === -1);
    }



    function scanning (verticalSolver) {
      var isUpdate = false;

      puzzle.every((row, rowIndex) => {
        return row.every((target, columIndex) => {

          // Initialize Transform
          if (target === 0) {
            possibleArr = findPossible(rowIndex, columIndex)
            if (possibleArr.length === 1) {
              console.log('**************');
              console.log('rowIndex, columIndex', rowIndex, columIndex, 'Updating possibleArr from:', target,'to',possibleArr);
              console.log('**************');
              state.push([ JSON.parse(JSON.stringify(puzzle)), [rowIndex, columIndex, target, ...possibleArr]])
              puzzle[rowIndex][columIndex] = possibleArr[0]

              isUpdate = true
              return;
            } else {
              puzzle[rowIndex][columIndex] = possibleArr
              return true
            }
          }

          // Already have answer
          if (Number.isInteger(target)) return true;

          // Several possible numbers
          if (Array.isArray(target)) {
            possibleArr = findPossible(rowIndex, columIndex)

            if (possibleArr.toString() !== target.toString()) {
              if (possibleArr.length === 1) {
                console.log('**************');
                console.log('rowIndex, columIndex', rowIndex, columIndex, 'Updating possibleArr from:', target,'to',possibleArr);
                console.log('**************');
                state.push([ JSON.parse(JSON.stringify(puzzle)), [rowIndex, columIndex, target, ...possibleArr]])
                puzzle[rowIndex][columIndex] = possibleArr[0]

              } else {
                console.log('**************');
                console.log('rowIndex, columIndex', rowIndex, columIndex, 'Updating possibleArr from:', target,'to',possibleArr);
                console.log('**************');
                state.push([ JSON.parse(JSON.stringify(puzzle)), [rowIndex, columIndex, target, ...possibleArr]])
                puzzle[rowIndex][columIndex] = possibleArr
              }

              isUpdate = true;
              return;
            }

            // Todo: Advance Strategy

            // Vertical strategy - (will come from parameters)
            // if (verticalSolver(puzzle, [rowIndex, columIndex])) return;

            // Horizontal strategy - (will come from parameters)
          }

          return true;

        })
      })
      return isUpdate;
    }



    while (scanning(verticalSolver)) {
      console.log('isChange');
      console.log('puzzle', puzzle);
    }

    return puzzle // PROGRAM TERMINATE HERE ---------------------------------------------------

    /** BELOW IS TO SOLVE MORE COMPLICATE CASE **/
    /**
     * FindArrayLength - High order function
     *
     * @param  {Array} puzzle
     * @return {Array} arr [row, col, [possibleArr]]
     */
    function findArrayLength(puzzle, length) {
      var arr = []
      puzzle.forEach((row, rowIndex) => {
        row.forEach((target, columIndex) => {
          if (Array.isArray(target) && target.length === length) {
            arr.push([rowIndex, columIndex, puzzle[rowIndex][columIndex]])
          }
        })
      })
      return arr
    }

    /**
     * findArrayLength2 - Find and solve length 2 array
     *
     * @return {Array} arr [row, col, [possibleArr]]
     */
    var findArrayLength2 = () => findArrayLength(puzzle, 2)

    /**
     * findArrayLength3 - Find and solve length 3 array
     *
     * @return {Array} arr [row, col, [possibleArr]]
     */
    var findArrayLength3 = () => findArrayLength(puzzle, 3)

    /**
     * verticalSolver - if same column can't find the same possible answer
     *
     * @param  {Array} puzzle
     * @param  {Array} targetPosition
     * @param  {Array} targetPossibleArr
     * @return {Boolean} noSamePossibleValue
     */

    function verticalSolver(puzzle, targetPosition) {
      var col = targetPosition[1], row = targetPosition[0], noSamePossibleValue, setValue;
      if ( !Array.isArray(puzzle[row][col]) ) return false;
      puzzle[row][col].forEach(function(value, possibleIndex){
        noSamePossibleValue = true
        noSamePossibleValue = puzzle.every(function(rowArr, index){
          // target is Integer
          var target = rowArr[col]
          if (Number.isInteger(rowArr[col])) return true;

          // pass target itself
          var test = rowArr[col] === puzzle[row][col] ? true : false
          if (test) {
            return true;
          }
          // target is Array and found same possible value
          if (rowArr[col].includes(value)) {
            return false;
          } else {
            return true;
          }
        })
        setValue = value
      })

      if (noSamePossibleValue) {
        console.log('updating position[row ,col]:',row ,col, 'Updating possibleArr from:', puzzle[row][col],'to', setValue);
        puzzle[row][col] = setValue
      }

      return noSamePossibleValue;
    }

  }

  sudoku(puzzle)

// Use the code below in chrome dev tool able to see the change between states
// state.map((target) => { console.log('Going to change: rowIndex, columIndex', target[1][0], target[1][1], 'Updating possibleArr from:', target[1][2],'to',target[1][3]); console.table(target[0]); console.log('-------------------------------') })












}
