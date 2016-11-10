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

/*

$(document).ready(function() {
	
    // Check for hash value in URL
    var hash = window.location.hash.substr(1);
    var href = $('#nav li a').each(function(){
        var href = $(this).attr('href');
        if(hash==href.substr(0,href.length-5)){
            var toLoad = hash+'.html #content';
            $('#content').load(toLoad)
        } 
    });
    
    $('#nav li a').click(function(){
    
    var toLoad = $(this).attr('href')+' #content';
    $('#content').hide('fast',loadContent);
    $('#load').remove();
    $('#wrapper').append('<span id="load">LOADING...</span>');
    $('#load').fadeIn('normal');
    window.location.hash = $(this).attr('href').substr(0,$(this).attr('href').length-5);
    function loadContent() {
    	$('#content').load(toLoad,'',showNewContent())
    }
    function showNewContent() {
    	$('#content').show('normal',hideLoader());
    }
    function hideLoader() {
    	$('#load').fadeOut('normal');
    }
    return false;
    
    });
});

*/