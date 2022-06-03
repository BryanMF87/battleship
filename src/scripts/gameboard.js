
function BoardFactory() {
    const boardArray = [];
    for (let cell = 1; cell <= 100; cell++) {
        boardArray.push(0);
        const cell = document.createElement("div")
        cell.classList.add("cell")
    }

    function placeShip(cell) {
        let currentCell = cell;
        for(let i = 0; i < size; i++) {
            location.push(currentCell);
            boardArray[currentCell-1] = 1; // it was returning the cell to the right of target so I gave it -1 to get the target cell
            currentCell++
        }
    }

    function strike(num) {
        switch(boardArray[num]) {
            case num = 0 : // empty cell
                return "Miss", boardArray[num] = 4;
            case num = 1 : // occupied cell
                return "Hit!", boardArray[num] = 2, isSunk();
            case num = 2 : // hit ship
                return 'This location has already been attacked';
            case num = 3 : // sunk ship
                return 'This location has already been attacked';
            case num = 4 : // miss
                return 'This location has already been attacked';
        }
    }

    return{boardArray, placeShip, strike}
}

module.exports = BoardFactory;