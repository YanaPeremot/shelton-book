$(document).ready(function() {
						   
	$('#main').on( 'click', '#choice li a', clickHandler );
		
});

function clickHandler(e) {
		e.preventDefault();	

		var toLoad = $(this).attr('href');
		console.log('toLoad: '+	toLoad);
		
		$('#bookpart').hide('fast',loadContent);
		
			
		function loadContent() {
			$('#bookpart').load(toLoad,'',showNewContent())
		}

		function showNewContent() {
			$('#bookpart').show('normal'); 
		}
		
	}

