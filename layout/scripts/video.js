$( function() {
	$( '.carousel-text' ).html( $( '#slide-content-0' ).html() );
	//Handles the carousel thumbnails
	// $( '[id^=carousel-selector-]' ).click( function() {
	// 	var id_selector = $( this ).attr( "id" );
	// 	var id = id_selector.substr( id_selector.length - 1 );
	// 	var id = parseInt( id );
	// 	$( '#cdc-custom-carousel' ).carousel( id );
	// } );
	// When the carousel slides, auto update the text
	$( '#cdc-custom-carousel' ).on( 'slid.bs.carousel', function() {
		var id = $( '.item.active' ).data( 'slide-number' );
		console.log( 'slide-number:', id );
		$( '.carousel-text' ).html( $( '#slide-content-' + id ).html() );
	} );
	// var content_height = $( '#cdc-custom-carousel2' ).height();

	// $( '.carousel-indicatorz.flex-column' ).parent().height( content_height );
} );


// $( window ).resize( function() {
// 	var content_height = $( '#cdc-custom-carousel2' ).height();
// 	console.log( content_height )
// 	$( '.carousel-indicatorz.flex-column' ).parent().height( content_height );
// } );

// sync carousel with thumbnails
$('#cdc-custom-carousel').on('slide.bs.carousel', function ( t ) {
	$( '.indicators a' ).removeClass( 'active' );
	var activeindicator = $( '.indicators' ).find("[data-slide-to='" + t.to + "']"),
		indicatorisvisible = activeindicator.is(':visible');
	
	if( t.direction == "left" ) {
		if ( !indicatorisvisible ) {
			$( '#c2' ).carousel( 'next' );
		}
	}
	if( t.direction == "right" ) {
		if ( !indicatorisvisible ) {
			$( '#c2' ).carousel( 'prev' );
		}
	}	
	activeindicator.addClass( 'active' );
	
	// if( $('#collapseonslide' ).is( ':checked' ) ) {
	// 	$( '.carousel-sub-caption .collapse' ).collapse('hide')	
	// }
});


// youtubes
var tag = document.createElement( 'script' );
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName( 'script' )[ 0 ];
firstScriptTag.parentNode.insertBefore( tag, firstScriptTag );
var player1, player2, player3, player4, player5, player6, player7, player8;

function onYouTubeIframeAPIReady() {
	player1 = new YT.Player( 'player1', {
		videoId: 'YCoQwZ9BQ9Q',
		events: {
			'onStateChange': onPlayerStateChange
		}
	} );
	player2 = new YT.Player( 'player2', {
		videoId: 'uxDAzVEgDdU',
		events: {
			'onStateChange': onPlayerStateChange
		}
	} );
	player3 = new YT.Player( 'player3', {
		videoId: 'EExwffrNBMg',
		events: {
			'onStateChange': onPlayerStateChange
		}
	} );
	player4 = new YT.Player( 'player4', {
		videoId: 'OWWUdxYFu2E',
		events: {
			'onStateChange': onPlayerStateChange
		}
	} );
	player5 = new YT.Player( 'player5', {
		videoId: 'XkuYRHK1WDU',
		events: {
			'onStateChange': onPlayerStateChange
		}
	} );
	player6 = new YT.Player( 'player6', {
		videoId: 'HoXDsTIu_10',
		events: {
			'onStateChange': onPlayerStateChange
		}
	} );
	player7 = new YT.Player( 'player7', {
		videoId: 'dZOaI_Fn5o4',
		events: {
			'onStateChange': onPlayerStateChange
		}
	} );
	player8 = new YT.Player( 'player8', {
		videoId: 'Pq02p3z3X2k',
		events: {
			'onStateChange': onPlayerStateChange
		}
	} );	
	
}

function onPlayerReady( event ) {
	// console.log('onPlayerReady:', event);
	event.target.playVideo();
}

function onPlayerStateChange( event ) {
	// console.log('onPlayerStateChange:', event);
	if ( event.data == YT.PlayerState.PLAYING ) {
		$( '.carousel-caption' ).hide();
	}
	if ( event.data == YT.PlayerState.PAUSED || event.data == YT.PlayerState.ENDED ) {
		$( '.carousel-caption' ).show();
	}
}
// carousel
var carousel = $( '#cdc-custom-carousel' ),
	current = 0;
carousel.on( 'slide.bs.carousel', function( event ) {
	current = event.to;
	player1.stopVideo();
	player2.stopVideo();
	player3.stopVideo();
	player4.stopVideo();
	player5.stopVideo();
	player6.stopVideo();
	player7.stopVideo();
	player8.stopVideo();
	// console.log('current: ', current)
	toggleActive();
} );

function toggleActive() {
	$('.list-inline-item').removeClass("active");
	$("a[data-slide-to='" + current +"']").parent().addClass('active');
}

var idx = 0;
$( function() {
	var items = $( '.carousel-indicatorz li' ),
		arr = new Array( items.length ),
		item_width = items.outerWidth(),
		left_value = item_width * (-1);	

	$( '#next' ).on( 'click', function() {
		carousel.carousel('next');
		$('.carousel-indicatorz li:last').after($('.carousel-indicatorz li:first'));  
		
		// var left_indent = parseInt($('.carousel-indicatorz').css('left')) - item_width;
		
// 		$('.carousel-indicatorz').animate({'left' : left_indent}, 200, function () {
            
//             //move the first item and put it as last item
// 			$('.carousel-indicatorz li:last').after($('.carousel-indicatorz li:first'));                 	
			
// 			//set the default item to correct position
// 			$('.carousel-indicatorz').css({'left' : left_value});
		
// 		});		
		// $('.carousel-indicatorz').animate({'left': '-=' + 200 } , 1000);
		
		// console.log( 'toto: ', carousel.carousel('to') )
		
		// $("a[data-slide-to='" + current + 1 +"']").css('outline', '5px solid orange')

		// idx++;
		// if ( document.getElementsByClassName( 'list-inline-item' )[ idx ] ) {
		// 	removeclass();
		// 	document.getElementsByClassName( 'list-inline-item' )[ idx ].scrollIntoView();
		// 	document.getElementsByClassName( 'list-inline-item' )[ idx ].classList.add( 'active' );
		// } else {
		// 	idx--;
		// }
	} );
	$( '#prev' ).on( 'click', function() {
		carousel.carousel('prev');
		$('.carousel-indicatorz li:first').before($('.carousel-indicatorz li:last'));  
		
		// var left_indent = parseInt($('.carousel-indicatorz').css('left')) + item_width;
		
// 		$('.carousel-indicatorz').animate({'left' : left_indent}, 200,function(){    

//             //move the last item and put it as first item            	
// 			$('.carousel-indicatorz li:first').before($('.carousel-indicatorz li:last'));           

// 			//set the default item to correct position
// 			$('.carousel-indicatorz').css({'left' : left_value});
		
// 		});		
		
		// $('.carousel-indicatorz').animate({'left': '+=' + 200 } , 1000);
		// idx--;
		// if ( document.getElementsByClassName( 'list-inline-item' )[ idx ] ) {
		// 	removeclass();
		// 	document.getElementsByClassName( 'list-inline-item' )[ idx ].scrollIntoView();
		// 	document.getElementsByClassName( 'list-inline-item' )[ idx ].classList.add( 'active' );
		// } else {
		// 	idx++;
		// }
	} );

	function removeclass() {
		var cards = document.getElementsByClassName( 'list-inline-item' );
		for ( var i = 0; i < cards.length; i++ ) {
			cards.item( i ).classList.remove( 'active' );
		}
	}
} );