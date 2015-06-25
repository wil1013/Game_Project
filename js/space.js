$(function() {
	console.log('Loaded');
$('.columns').click(makeColor);
});

	//if a column button is clicked then push a color to the bottom of a column/end of array
	//create a function for each column. every time 

var turn = 0;
var colHeight = 6;
var bottomACol =[];
var nextOpen = 0;
var makeColor = function(){
var colOrder = ['f','e','d','c','b','a'];
	
	if(bottomACol.length>=colHeight){	
	}
	else if(turn == 0){
	//var nextFill= $('#col1 div')[colHeight-bottomACol.length];
	//var newClass='<div id="rowa" class="red"></div>';
	//nextFill=newClass;
	$(this).children('#'+colOrder[nextOpen]).attr('class','red');
	
	var child = $(this).children()[1];//want to change class of specific child within index of array, but doesn't work on child??
	turn=1;
	bottomACol.push('R');
	nextOpen=+1;	
	}

	else if(turn == 1){
	$(this).children('#'+colOrder[nextOpen]).attr('class','black');
	//$(this).attr('class','black');
	turn=0;
	bottomACol.push('B');
	nextOpen=+1;
	}

};
