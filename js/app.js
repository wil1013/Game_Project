$(function() {
	console.log('Loaded');
$(this).click(gameChecker);
});

var winningCombo = ['RRRR','BBBB'];
var builtArrays =  [bottom1Col,
					bottom2Col,
					bottom3Col,
					bottom4Col,
					bottom5Col,
					bottom6Col,
					bottom7Col];
var horizontalArrays = [];


var rowMake

var totalMoves = function() {
	return nextOpen1+nextOpen2+nextOpen3+nextOpen4+nextOpen5+nextOpen6+nextOpen7;
}

var tied = function(){
	if(totalMoves()==42){
		alert('Tied');
	}
};

var horizontal =function(){
	for (var i = 0; i < builtArrays.length; i++){

		for (var j =0; j<6; j++){
		var newArray = builtArrays[j][i];
			console.log(newArray);	
			}
		
		}
		
	


	}
var checkForWin = function(columnNumber){
 	var jointString = columnNumber.join('');
 	if(jointString.includes(winningCombo[0]) || jointString.includes(winningCombo[1])){
 		alert('game over');
 		makeboard();
 	}
}


var gameChecker =function(){
	for (var i = 0; i <builtArrays.length; i++){
	checkForWin(builtArrays[i]);
}
}

/*
var bottom1Col =[];
var bottom2Col =[];
var bottom3Col =[];
var bottom4Col =[];
var bottom5Col =[];
var bottom6Col =[];
var bottom7Col =[];
*/


