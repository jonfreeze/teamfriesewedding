$(document).ready(function(){

	// Scroll To
	$('.navbar-default .navbar-nav>li>a').click(function(){
		event.preventDefault();

		var destination = $(this).attr('href');

		$.scrollTo(destination, 500)
	});

	// Back to Top
	$('a.backtoTop').scrollTop(300);

	// Expanding Images For Mobile
	var photoExpand = $('#photos .imageWrapper');

	$(photoExpand).click(function(){
		$(this).toggleClass('full-img');
	});

	$('#intro img').fadeIn();


	// Maps
	new Maplace({
	    show_markers: true,
	    // Brooklyn
	    locations: [{
	    	title: 'Venue',
	    	lat: 40.7036197, 
	        lon: -73.9916468,
	        zoom: 13
	    },{
	    	title: 'Rachel',
	    	lat: -33.4794295, 
	        lon: -70.6681567,
	        zoom: 13
	    },{
	    	title: 'John',
	    	lat: 15.7600088, 
	        lon: -86.808365,
	        zoom: 13
	    }]
	}).Load();

});

