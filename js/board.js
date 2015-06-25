$(function() {
	console.log('Loaded');
});

var board =  	[[null,null,null,null,null,null,null],
				[null,null,null,null,null,null,null],
				[null,null,null,null,null,null,null],
				[null,null,null,null,null,null,null],
				[null,null,null,null,null,null,null],
				[null,null,null,null,null,null,null]];
				
//an array per column - push R or B when column is clicked
var  makeBoard= function(){
	var container = $('#board');
	var columns = [1,2,3,4,5,6,7];
	var rows = ['a','b','c','d','e','f'];
	for (var w = 0; w<columns.length; w++){
		var divName =columns[w];
		var divCreate = $('<button>').attr('id',divName).attr('class','columns');
		divCreate.appendTo(container);
		for (var j = 0; j<rows.length; j++){
			var rowId = rows[j];
			var spaceId = $('<div>');
			var divSet =spaceId.attr('id',rowId).attr('class','blank'); 
			divSet.appendTo(divCreate);
		}
	}
}


makeBoard();



//var spot


//var move