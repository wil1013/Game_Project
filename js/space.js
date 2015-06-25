$(function() {
	console.log('Loaded');
$('#1').click(makeColorCol1);
$('#2').click(makeColor2);

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


var makeColorCol1 = function(){
var bottomACol =[];

var colOrder = ['f','e','d','c','b','a'];	
	if(bottomACol.length>=colHeight){	
	}
	else if(turn == 0){
	//var nextFill= $('#col1 div')[colHeight-bottomACol.length];
	//var newClass='<div id="rowa" class="red"></div>';
	//nextFill=newClass;
	$(this).children('#'+colOrder[parseInt(nextOpen1)]).attr('class','red');
	
	var child = $(this).children()[1];//want to change class of specific child within index of array, but doesn't work on child??
	turn=1;
	bottomACol.push('R');
	nextOpen1++;	
	}

	else if(turn == 1){
	$(this).children('#'+colOrder[parseInt(nextOpen1)]).attr('class','black');
	//$(this).attr('class','black');
	turn=0;
	bottomACol.push('B');
	nextOpen1++;
	}

};
