$(function() {
	console.log('Loaded');
$('#1').click(makeColorCol1);
$('#2').click(makeColorCol2);
$('#3').click(makeColorCol3);
$('#4').click(makeColorCol4);
$('#5').click(makeColorCol5);
$('#6').click(makeColorCol6);
$('#7').click(makeColorCol7);

});

	//if a column button is clicked then push a color to the bottom of a column/end of array
	//create a function for each column. every time 

var turn = 0;
var colHeight = 6;


var nextOpen1 = 0;
var nextOpen2 = 0;
var nextOpen3 = 0;
var nextOpen4 = 0;
var nextOpen5 = 0;
var nextOpen6 = 0;
var nextOpen7 = 0;

var colOrder = ['f','e','d','c','b','a'];



/*var rowArrayA = function(){
	 var pizza= [bottom1Col[0],bottom1Col[0],bottom1Col[0],bottom1Col[0],bottom1Col[0],bottom1Col[0],bottom1Col[0]];
	 testArray.push(pizza);}

var rowArrayB =	[bottom1Col[1],bottom1Col[1],bottom1Col[1],bottom1Col[1],bottom1Col[1],bottom1Col[1],bottom1Col[1]];
var rowArrayC =0;
var rowArrayD =0;
var rowArrayE =0;
var rowArrayF =0;
*/
//$('<div id="'[i]'')

var makeColorCol1 = function(){
	if(bottom1Col.length>=colHeight){	
	}
	else if(turn == 0){
	$(this).children('#'+colOrder[parseInt(nextOpen1)]).attr('class','red');
	
	//-works- var child = $(this).children().eq(1);//want to change class of specific child within index of array, but doesn't work on child??
	turn=1;
	bottom1Col.push('R');
	nextOpen1++;	
	}

	else if(turn == 1){
	$(this).children('#'+colOrder[parseInt(nextOpen1)]).attr('class','black');
	turn=0;
	bottom1Col.push('B');
	nextOpen1++;
	}

};
var makeColorCol2 = function(){
	if(bottom2Col.length>=colHeight){	
	}
	else if(turn == 0){
	$(this).children('#'+colOrder[parseInt(nextOpen2)]).attr('class','red');
	turn=1;
	bottom2Col.push('R');
	nextOpen2++;	
	}
	else if(turn == 1){
	$(this).children('#'+colOrder[parseInt(nextOpen2)]).attr('class','black');
	turn=0;
	bottom2Col.push('B');
	nextOpen2++;
	}

};

var makeColorCol3 = function(){
	if(bottom3Col.length>=colHeight){	
	}
	else if(turn == 0){
	$(this).children('#'+colOrder[parseInt(nextOpen3)]).attr('class','red');
	turn=1;
	bottom3Col.push('R');
	nextOpen3++;	
	}
	else if(turn == 1){
	$(this).children('#'+colOrder[parseInt(nextOpen3)]).attr('class','black');
	turn=0;
	bottom3Col.push('B');
	nextOpen3++;
	}

};
var makeColorCol4 = function(){
	if(bottom4Col.length>=colHeight){	
	}
	else if(turn == 0){
	$(this).children('#'+colOrder[parseInt(nextOpen4)]).attr('class','red');
	turn=1;
	bottom4Col.push('R');
	nextOpen4++;	
	}
	else if(turn == 1){
	$(this).children('#'+colOrder[parseInt(nextOpen4)]).attr('class','black');
	turn=0;
	bottom4Col.push('B');
	nextOpen4++;
	}

};
var makeColorCol5 = function(){
	if(bottom5Col.length>=colHeight){	
	}
	else if(turn == 0){
	$(this).children('#'+colOrder[parseInt(nextOpen5)]).attr('class','red');
	turn=1;
	bottom5Col.push('R');
	nextOpen5++;	
	}
	else if(turn == 1){
	$(this).children('#'+colOrder[parseInt(nextOpen5)]).attr('class','black');
	turn=0;
	bottom5Col.push('B');
	nextOpen5++;
	}

};
var makeColorCol6 = function(){
	if(bottom6Col.length>=colHeight){	
	}
	else if(turn == 0){
	$(this).children('#'+colOrder[parseInt(nextOpen6)]).attr('class','red');
	turn=1;
	bottom6Col.push('R');
	nextOpen6++;	
	}
	else if(turn == 1){
	$(this).children('#'+colOrder[parseInt(nextOpen6)]).attr('class','black');
	turn=0;
	bottom6Col.push('B');
	nextOpen6++;
	}

};
var makeColorCol7 = function(){
	if(bottom7Col.length>=colHeight){	
	}
	else if(turn == 0){
	$(this).children('#'+colOrder[parseInt(nextOpen7)]).attr('class','red');
	turn=1;
	bottom7Col.push('R');
	nextOpen7++;	
	}
	else if(turn == 1){
	$(this).children('#'+colOrder[parseInt(nextOpen7)]).attr('class','black');
	turn=0;
	bottom7Col.push('B');
	nextOpen7++;
	}

};
