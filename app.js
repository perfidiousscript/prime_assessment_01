var numContainers = 0;

$(document).ready(function(){
	$("body").on('click','#generate', function(){
		numContainers++;
		$("#holder").append("<div class='container'><span>"+ numContainers +"</span><button class='delete'>Delete</button><button class='change'>Change</button></div>");
	})
	$('#holder').on('click','.delete',function(){
		$(this).parent('.container').remove();
		console.log("Delete click");
	})
	$('#holder').on('click','.change',function(){
		$(this).parent('.container').toggleClass('selected');
	})

});