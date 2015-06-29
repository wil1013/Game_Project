$(function() {
	console.log('Loaded');
$(this).click(horizontalPush);
$(this).click(diagSWtoNEPush);
$(this).click(diagNWtoSEPush);
$(this).click(gameCheckerVertical);
$(this).click(gameCheckerHorizontal);
$(this).click(gameCheckerDiagSWtoNE);
$(this).click(gameCheckerDiagNWtoSE);
});
$('#resetButton').click(restart);
var bottom1Col =[];
var bottom2Col =[];
var bottom3Col =[];
var bottom4Col =[];
var bottom5Col =[];
var bottom6Col =[];
var bottom7Col =[];

var winningCombo = ['RRRR','BBBB'];
var builtArrays =  [bottom1Col,
					bottom2Col,
					bottom3Col,
					bottom4Col,
					bottom5Col,
					bottom6Col,
					bottom7Col];

var horizontalArrays = [];
var diagSWtoNEArrays = [];
var diagNWtoSEArrays = [];



var restart = function(){
	$('div .red').attr('class','blank');
	$('div .black').attr('class','blank');
nextOpen1 = 0;
nextOpen2 = 0;
nextOpen3 = 0;
nextOpen4 = 0;
nextOpen5 = 0;
nextOpen6 = 0;
nextOpen7 = 0;
bottom1Col =[];
bottom2Col =[];
bottom3Col =[];
bottom4Col =[];
bottom5Col =[];
bottom6Col =[];
bottom7Col =[];
horizontalArrays = [];
diagSWtoNEArrays = [];
diagNWtoSEArrays = [];
builtArrays =  [bottom1Col,
				bottom2Col,
				bottom3Col,
				bottom4Col,
				bottom5Col,
				bottom6Col,
				bottom7Col];
};


var totalMoves = function() {
	return nextOpen1+nextOpen2+nextOpen3+nextOpen4+nextOpen5+nextOpen6+nextOpen7;
}

var tied = function(){
	if(totalMoves()==42){
		alert('Tied');
	}
};



var horizontalPush = function(){
	horizontalArrays= [];
	for (var i =0 ; i < colHeight ; i++){
	var arryPush = [bottom1Col[i]||0,
					bottom2Col[i]||0,	
					bottom3Col[i]||0,
					bottom4Col[i]||0,
					bottom5Col[i]||0,
					bottom6Col[i]||0,
					bottom7Col[i]||0];
		//var joinString = arryPush.join('');
		horizontalArrays.push(arryPush);
	}
		return;
	
}



var diagNWtoSEPush = function(){
	diagNWtoSEArrays =[];
	//for (var i = colOrder.length ; i >=0; i--){
	var arrayPush = [builtArrays[0][3]||0,builtArrays[1][2]||0,builtArrays[2][1]||0,builtArrays[3][0]||0];
		diagNWtoSEArrays.push(arrayPush);
	var arrayPush2 =[builtArrays[0][4]||0,builtArrays[1][3]||0,builtArrays[2][2]||0,builtArrays[3][1]||0,builtArrays[4][0]||0];
		diagNWtoSEArrays.push(arrayPush2);
	var arrayPush3 =[builtArrays[0][5]||0,builtArrays[1][4]||0,builtArrays[2][3]||0,builtArrays[3][2]||0,builtArrays[4][1]||0,builtArrays[5][0]||0];
		diagNWtoSEArrays.push(arrayPush3);
	var arrayPush4 =[builtArrays[1][5]||0,builtArrays[2][4]||0,builtArrays[3][3]||0,builtArrays[4][2]||0,builtArrays[5][1]||0,builtArrays[6][0]||0];
		diagNWtoSEArrays.push(arrayPush4);	
	var arrayPush5 =[builtArrays[2][5]||0,builtArrays[3][4]||0,builtArrays[4][3]||0,builtArrays[5][2]||0,builtArrays[6][1]||0];
		diagSWtoNEArrays.push(arrayPush5);
	var arrayPush6 =[builtArrays[3][5]||0,builtArrays[4][4]||0,builtArrays[5][3]||0,builtArrays[6][2]||0];
		diagSWtoNEArrays.push(arrayPush5);

	};


var diagSWtoNEPush = function(){
	diagSWtoNEArrays =[];


	var arrayPush = [builtArrays[0][2]||0,builtArrays[1][3]||0,builtArrays[2][4||0],builtArrays[3][5]||0,0];
		diagSWtoNEArrays.push(arrayPush);
	var arrayPush2 = [builtArrays[0][1]||0,builtArrays[1][2]||0,builtArrays[2][3]||0,builtArrays[3][4]||0,builtArrays[4][5]||0];
		diagSWtoNEArrays.push(arrayPush2);
	var arrayPush3 = [builtArrays[0][0]||0,builtArrays[1][1]||0,builtArrays[2][2]||0,builtArrays[3][3]||0,builtArrays[4][4]||0,builtArrays[5][5]||0];
		diagSWtoNEArrays.push(arrayPush3);
	var arrayPush4 = [builtArrays[1][0]||0,builtArrays[2][1]||0,builtArrays[3][2]||0,builtArrays[4][3]||0,builtArrays[5][4]||0,builtArrays[6][5]||0];
		diagSWtoNEArrays.push(arrayPush4);
	var arrayPush5 = [builtArrays[2][0]||0,builtArrays[3][1]||0,builtArrays[4][2]||0,builtArrays[5][3]||0,builtArrays[6][4]||0];
		diagSWtoNEArrays.push(arrayPush5);
	var arrayPush6 = [builtArrays[2][0]||0,builtArrays[3][1]||0,builtArrays[4][2]||0,builtArrays[5][3]||0,builtArrays[6][4]||0];
		diagSWtoNEArrays.push(arrayPush6);
	var arrayPush7 = [builtArrays[3][0]||0,builtArrays[4][1]||0,builtArrays[5][2]||0,builtArrays[6][3]||0];
		diagSWtoNEArrays.push(arrayPush7);
		};	


var checkForWin = function(columnNumber){
 	var jointString = columnNumber.join('');
 	console.log(jointString);
 	if(jointString.includes(winningCombo[0]) || jointString.includes(winningCombo[1])){
 		alert('game over');
 		restart();
 	
 	}
}


var gameCheckerVertical =function(){
	for (var i = 0; i <builtArrays.length; i++){
	checkForWin(builtArrays[i]);
}
};

var gameCheckerHorizontal = function(){
	for (var i = 0; i < horizontalArrays.length; i++){
		checkForWin(horizontalArrays[i]);
	}
};

var gameCheckerDiagSWtoNE = function(){
	for (var i = 0; i < diagSWtoNEArrays.length; i++){
		checkForWin(diagSWtoNEArrays[i]);
	}
};

var gameCheckerDiagNWtoSE = function(){
	for (var i = 0; i < diagNWtoSEArrays.length; i++){
		checkForWin(diagNWtoSEArrays[i]);
	}
};





