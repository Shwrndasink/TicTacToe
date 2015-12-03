var boardArray = ['', '', '', '', '', '', '', '', ''];
var turn = 0;
//Which square was clicked
var c = document.getElementsByTagName('td');

    for(var i = 0; i < c.length; i++){
        console.log(c[i]);
        c[i].onclick = squareClicked;
    }

    function squareClicked(){
        var _this = this;
        var id = _this.getAttribute('id');
        var j = id -1;
        boardArray[j] = j;
        console.log(boardArray);
        if(_this.innerHTML != ''){
            alert('This square has already been selected');
        }
        else {
            if(turn === 0){
                turn = 1;
                _this.innerHTML = 'X';
                _this.style.background = 'red';
                checkForWin('X');

            } else {
                turn = 0;
                _this.innerHTML = 'O';
                _this.style.background = 'blue';
                checkForWin('O');
            }
        }
    };

    function clearBoard(){
        console.log('Lets Play Again!!!');
        for(var i = 0; i < c.length; i++){
            c[i].innerHTML = '';
            c[i].style.background = '#fff';
        }
    }
    function checkForWin(l){
        //Check Horizontal Wins
        if (c[0].innerHTML == l && c[1].innerHTML ==l && c[2].innerHTML == l){
            alert(l + ' wins');
            clearBoard();
        } else if (c[3].innerHTML == l && c[4].innerHTML == l && c[5].innerHTML == l) {
            alert(l + ' wins');
            clearBoard();
        } else if (c[6].innerHTML == l && c[7].innerHTML == l && c[8].innerHTML == l) {
            alert(l + ' wins');
            clearBoard();
        }
        //Check Vertical Wins
        else if (c[0].innerHTML == l && c[3].innerHTML == l && c[6].innerHTML == l) {
            alert(l + ' wins');
            clearBoard();
        } else if (c[1].innerHTML == l && c[4].innerHTML == l && c[7].innerHTML == l) {
            alert(l + ' wins');
            clearBoard();
        } else if (c[2].innerHTML == l && c[5].innerHTML == l && c[8].innerHTML == l) {
            alert(l + ' wins');
            clearBoard();
        }
        //Check Diagonal Wins
        else if (c[0].innerHTML == l && c[4].innerHTML == l && c[8].innerHTML == l) {
            alert(l + ' wins');
            clearBoard();
        }
        else if (c[2].innerHTML == l && c[4].innerHTML == l && c[6].innerHTML == l) {
            alert(l + ' wins');
            clearBoard();
        }
    };
