var numContainers = 0;

$(document).ready(function(){
	$("body").on('click','button', function(){
		numContainers++;
		$("#holder").append("<div><span>"+ numContainers +"</span></div>");
	})
});