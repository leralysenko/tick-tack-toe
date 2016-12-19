var id;
var k;
var j;
var player = "player1";

var mas = [0, 0, 0, 0, 0, 0, 0, 0, 0];

function check1 (mas) { // проверка для крестика
	if ((mas[0] === 1 && mas[0]===mas[1] && mas[1]===mas[2]) 
	|| (mas[2] === 1 && mas[2]===mas[5] && mas[5]===mas[8]) 
	|| (mas[6] === 1 && mas[6]===mas[7] && mas[7]===mas[8]) 
	|| (mas[0] === 1 && mas[0]===mas[3] && mas[3]===mas[6]) 
	|| (mas[3] === 1 && mas[3]===mas[4] && mas[4]===mas[5]) 
	|| (mas[0] === 1 && mas[0]===mas[4] && mas[4]===mas[8]) 
	|| (mas[2] === 1 && mas[2]===mas[4] && mas[4]===mas[6]) 
	|| (mas[1] === 1 && mas[1]===mas[4] && mas[4]===mas[7])) { return true;}
	else {return false;}
}

function check2 (mas) { // проверка для нолика
	if ((mas[0] === 2 && mas[0]===mas[1] && mas[1]===mas[2]) 
	|| (mas[2] === 2 && mas[2]===mas[5] && mas[5]===mas[8]) 
	|| (mas[6] === 2 && mas[6]===mas[7] && mas[7]===mas[8]) 
	|| (mas[0] === 2 && mas[0]===mas[3] && mas[3]===mas[6]) 
	|| (mas[3] === 2 && mas[3]===mas[4] && mas[4]===mas[5]) 
	|| (mas[0] === 2 && mas[0]===mas[4] && mas[4]===mas[8])
	|| (mas[2] === 2 && mas[2]===mas[4] && mas[4]===mas[6])
	|| (mas[2] === 2 && mas[1]===mas[4] && mas[4]===mas[7])) {return true;}
	else {return false;}
}

function fillAll(mas) {
	k = 0;
	j=parseInt("0", 10);

	for (j=0; j<9; j++) {
		if (mas[j]===0) {k = 1; }
		
	}
	if (k === 0) {alert ('Draw!'); window.location.reload();}
}

function myClick (i, id) { 
	if (mas[i] === 0) {
		if (player === "player1") {
			mas[i] = 1;
			document.getElementById(id).className = 'player';
			if (check1(mas)===true) { alert('Player1 won!'); window.location.reload();}
			fillAll (mas);
			player = "player2";
		}
		else {
			mas[i] = 2;
			document.getElementById(id).className = 'computer';
			if (check2(mas)) {alert('Player2 won!'); window.location.reload();} 
			fillAll (mas);
			player = "player1";
		}
	}

}
