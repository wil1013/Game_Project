$(function() {
	console.log('Loaded');
$('#1').click(gameChecker);
});
var winningCombo = ['RRRR','BBBB'];


var totalMoves = function() {
	return nextOpen1+nextOpen2+nextOpen3+nextOpen4+nextOpen5+nextOpen6+nextOpen7;
}

var tied = function(){
	if(totalMoves()==42){
		alert('Tied');
	}
};
var checkForWin = function(columnNumber){
 	var jointString = columnNumber.join('');
 	if(jointString.includes(winningCombo[0]) || jointString.includes(winningCombo[1])){
 		alert('game over');
 	}
}


var gameChecker =function(){
	checkForWin(bottom1Col);
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


