$(function(){

	function init(){
		var signupContainer = $('#signup-container');

		signupContainer.velocity(
		{
			translateY: '-40em'
		},
		{
			duration: 250
		});
	}

	init();

	
});