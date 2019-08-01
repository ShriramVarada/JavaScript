function Gameboard(rows, columns){
    var gameBoard = {

        rows : rows,
        columns: columns,
        missedAttacks: [],
        allShipsSunk: false,

        createBoard : ()=>{
            var gameboardsection = document.createElement('div');
            var board = document.createElement('table');
            var tr,td;
            for (var i = 0; i<this.rows;i++){
                tr = document.createElement('tr');
                for (var j = 0; j<this.columns; j++){
                    td = document.createElement('td');
                    td.setAttribute('class', `row${i} column${j}`);
                    tr.appendChild(td);
                }
                board.appendChild(tr);
            }
            gameboardsection.appendChild(board);
            return gameboardsection;
        }
    }
    return gameBoard;
}

module.exports = Gameboard;