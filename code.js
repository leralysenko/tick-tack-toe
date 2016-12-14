var id;

var mas = [0, 0, 0, 0, 0, 0, 0, 0, 0];

function check1 (mas) { // проверка для крестика
	if (mas[0] === 1 && mas[0]===mas[1] && mas[1]===mas[2]) {return true; break;}
	if (mas[2] === 1 && mas[2]===mas[5] && mas[5]===mas[8]) {return true; break;}
	if (mas[6] === 1 && mas[6]===mas[7] && mas[7]===mas[8]) {return true; break;}
	if (mas[0] === 1 && mas[0]===mas[3] && mas[3]===mas[6]) {return true; break;}
	if (mas[3] === 1 && mas[3]===mas[4] && mas[4]===mas[5]) {return true; break;}
	if (mas[0] === 1 && mas[0]===mas[4] && mas[4]===mas[8]) {return true; break;}
	if (mas[2] === 1 && mas[2]===mas[4] && mas[4]===mas[6]) {return true; break;}
	if (mas[2] === 1 && mas[1]===mas[4] && mas[4]===mas[7]) {return true; break;}
}

function check2 (mas) { // проверка для нолика
	if (mas[0] === 2 && mas[0]===mas[1] && mas[1]===mas[2]) {return true; break;}
	if (mas[2] === 2 && mas[2]===mas[5] && mas[5]===mas[8]) {return true; break;}
	if (mas[6] === 2 && mas[6]===mas[7] && mas[7]===mas[8]) {return true; break;}
	if (mas[0] === 2 && mas[0]===mas[3] && mas[3]===mas[6]) {return true; break;}
	if (mas[3] === 2 && mas[3]===mas[4] && mas[4]===mas[5]) {return true; break;}
	if (mas[0] === 2 && mas[0]===mas[4] && mas[4]===mas[8]) {return true; break;}
	if (mas[2] === 2 && mas[2]===mas[4] && mas[4]===mas[6]) {return true; break;}
	if (mas[2] === 2 && mas[1]===mas[4] && mas[4]===mas[7]) {return true; break;}
}

function fillNull (mas) { // подставляем нолик рандомно в пустые клеточки
	var k = 0;
	for (var i=0; i<9; i++) {
		if (mas[i]===0) {k = 1;}
	}
	if (k === 1) {
		var i = 0;
		while (mas[i] !== 0) {
			i = Math.random * 9; // не уверенна
		}
		mas[i] = 2; // 2 это значение O;
		// появляется изображение
		document.getElementById(i).className = 'computer';
	}
	else { alert ('Draw!')}
	
}

function myClick (id) { 
	if (mas[id] === 0) {
		mas[id] = 1; // это значение Х; 
		// появляется изображение
		document.getElementById(id).className = 'player';
		if (check1(mas)) { alert ('You won!');}
		fillNull (mas);
		if (check2(mas)) {alert ('You lost');} 
	}

}