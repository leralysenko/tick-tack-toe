var id;
var k;
var j;

var mas = [0, 0, 0, 0, 0, 0, 0, 0, 0];

function check1 (mas) { // проверка для крестика
	if ((mas[0] === 1 && mas[0]===mas[1] && mas[1]===mas[2]) 
	|| (mas[2] === 1 && mas[2]===mas[5] && mas[5]===mas[8]) 
	|| (mas[6] === 1 && mas[6]===mas[7] && mas[7]===mas[8]) 
	|| (mas[0] === 1 && mas[0]===mas[3] && mas[3]===mas[6]) 
	|| (mas[3] === 1 && mas[3]===mas[4] && mas[4]===mas[5]) 
	|| (mas[0] === 1 && mas[0]===mas[4] && mas[4]===mas[8]) 
	|| (mas[2] === 1 && mas[2]===mas[4] && mas[4]===mas[6]) 
	|| (mas[2] === 1 && mas[1]===mas[4] && mas[4]===mas[7])) {return true;}
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

function fillNull (mas, id) { // подставляем нолик рандомно в пустые клеточки
	k = 0;
	j=parseInt("0", 10);
	for (j=0; j<9; j++) {
		if (mas[j]===0) {k = 1;}
	}

	if (k === 1) {
		j = 0;
		while (mas[j] != 0) {
			j = Math.floor(Math.random() * 9); 
		}
		mas[j] = 2; // 2 это значение O;
		// появляется изображение
		id = "d"+j.toString();
		document.getElementById(id).className = 'computer';
	}
	else { alert ('Draw!')}
	
}

function myClick (i, id) { 
	if (mas[i] === 0) {
		mas[i] = 1; // это значение Х; 
		// появляется изображение
		document.getElementById(id).className = 'player';
		if (check1(mas)===true) { alert('You won!')}
		fillNull (mas, id);
		//if (check2(mas)) {alert('You lost!')} 
	}

}