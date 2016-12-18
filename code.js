var id;
var k;
var j;
var z;

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
	else { alert ('Draw!'); window.location.reload();}
	
}

function fillNull2 (mas, id){
	k = 0;
	j=parseInt("0", 10);

	for (j=0; j<9; j++) {
		if (mas[j]===0) {k = 1; z=j;}
		
	}
	
	if (k === 1) { 
		if (((mas[0] === mas[4] && (mas[4] === 1 || mas[4] === 2) ) || (mas[2] === mas[5] && (mas[5] === 1 || mas[5] === 2)) ||(mas[6] === mas[7] && (mas[7] === 1 || mas[7] === 2))) && mas[8] === 0) { 
			mas[8] = 2; 
			document.getElementById("d8").className = 'computer';
		}
		else {
			if (((mas[0] === mas[1] && (mas[1] === 1 || mas[1] === 2)) || (mas[5] === mas[8] && (mas[5] === 1 || mas[5] === 2)) || (mas[4] === mas[6] && (mas[6] === 1 || mas[6] === 2))) && mas[2] === 0) { 
				mas[2] = 2; 
				document.getElementById("d2").className = 'computer';
			}
			else {
				if (((mas[1] === mas[2] && (mas[2] === 1 || mas[2] === 2)) || (mas[4] === mas[8] && (mas[8] === 1 || mas[8] === 2)) || (mas[3] === mas[6] && (mas[6] === 1 || mas[6] === 2))) && mas[0] === 0) { 
					mas[0] = 2; 
					document.getElementById("d0").className = 'computer';
				}
				else {
					if (((mas[1] === mas[4] && (mas[4] === 1 || mas[4] === 2)) || (mas[6] === mas[8] && (mas[8] === 1 || mas[8] === 2))) && mas[7] === 0) { 
						mas[7] = 2; 
						document.getElementById("d7").className = 'computer';
					}
					else {
						if (((mas[2] === mas[4] && (mas[4] === 1 || mas[4] === 2)) || (mas[7] === mas[8] && (mas[8] === 1 || mas[8] === 2)) || (mas[0] === mas[3] && (mas[3] === 1 || mas[3] === 2))) && mas[6] === 0) { 
							mas[6] = 2; 
							document.getElementById("d6").className = 'computer';
						}
						else {
							if (((mas[4] === mas[5] && (mas[5] === 1 || mas[5] === 2)) || (mas[0] === mas[6] && (mas[6] === 1 || mas[6] === 2))) && mas[3] === 0) { 
								mas[3] = 2; 
								document.getElementById("d3").className = 'computer';
							}
							else {
								if (((mas[4] === mas[7] && (mas[7] === 1 || mas[7] === 2)) || (mas[0] === mas[2] && (mas[2] === 1 || mas[2] === 2))) && mas[1] === 0) { 
									mas[1] = 2; 
									document.getElementById("d1").className = 'computer';
								}
								else { 
									if (((mas[3] === mas[4] && (mas[4] === 1 || mas[4] === 2)) || (mas[2] === mas[8] && (mas[8] === 1 || mas[8] === 2))) && mas[5] === 0) {
										mas[5] = 2; 
										document.getElementById("d5").className = 'computer';
									}
									else { 
										if (((mas[2] === mas[6] && (mas[6] === 1 || mas[6] === 2)) || (mas[0] === mas[8] && (mas[8] === 1 || mas[8] === 2))) && mas[4] === 0) {
											mas[4] = 2; 
											document.getElementById("d4").className = 'computer';
										}
										else { 
											if (mas[4] === 0) {
												mas[4] = 2;
												document.getElementById("d4").className = 'computer';
											}
											else {
												if (mas[4] === 2) {
													if (mas[1] === 0) {
														mas[1] = 2;
														document.getElementById("d1").className = 'computer';
													}
													else {
														if (mas[5] === 0) {
															mas[5] = 2;
															document.getElementById("d5").className = 'computer';
														}
														else {
															if (mas[7] === 0) {
																mas[7] = 2;
																document.getElementById("d7").className = 'computer';
															}
															else {
																if (mas[3] === 0) {
																	mas[3] = 2;
																	document.getElementById("d3").className = 'computer';
																}
															}
														}
													}
												}
												else {mas[z] = 2; id = "d" + z.toString(); document.getElementById(id).className = 'computer';}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
	else { alert ('Draw!'); window.location.reload();}
}

function myClick (i, id) { 
	if (mas[i] === 0) {
		mas[i] = 1; // это значение Х; 
		// появляется изображение
		document.getElementById(id).className = 'player';
		if (check1(mas)===true) { alert('You won!'); window.location.reload();}
		fillNull2 (mas, id);
		if (check2(mas)) {alert('You lost!'); window.location.reload();} 
	}

}