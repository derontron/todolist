// check off specific todos by clicking

// $('li').click(function(){
// 	// if li is gray
// 	if($(this).css("color") === "rgb(128, 128, 128)") {
// 		// turn it black;
// 		$(this).css({
// 			color: "black",
// 			textDecoration: "none"
// 	});
	
// 	} else {
// 		//turn it gray;
// 		$(this).css({
// 			color: "grey",
// 			textDecoration: "line-through"
// 		});
// 	}

// });

$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input").keypress(function(event){
	// grab text from input once enter is pressed
	if (event.which === 13) {
		var todoText = $(this).val();
		// create a new li and add to ul
		$('ul').append('<li><span>X </span>' + todoText + '</li>');
	}
});