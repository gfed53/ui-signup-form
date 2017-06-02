$(function(){
	console.log('yo');

	//Initial signup will have an opacity of 0 and down off-screen. It will slide up and fade in.

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