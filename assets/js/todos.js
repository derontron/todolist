// check off specific todos by clicking

$('li').click(function(){
	// if li is gray
	if($(this).css("color") === "rgb(128, 128, 128)") {
		// turn it black;
		$(this).css({
			color: "black",
			textDecoration: "none"
	});
	
	} else {
		//turn it gray;
		$(this).css({
			color: "grey",
			textDecoration: "line-through"
		});
	}

	
});