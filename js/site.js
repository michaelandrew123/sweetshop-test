
	jQuery(document).ready(function($) {

		$( "iframe" ).wrap( "<div class='videoWrapper'></div>" );

		$('.tip').hover(function(){
                // Hover over code
                var title = $(this).attr('title');
                $(this).data('tipText', title).removeAttr('title');
                $('<div class="atooltip"></div>')
                .html('<div class="atooltipcontent">' + title + '</div>')
                .appendTo('body')
                .fadeIn('fast');
        }, function() {
                // Hover out code
                $(this).attr('title', $(this).data('tipText'));
                $('.atooltip').remove();
        }).mousemove(function(e) {

        		if($(window).width() > 750) {
	                var mousex = e.pageX - 100; //Get X coordinates
	                var mousey = e.pageY + 10; //Get Y coordinates
	            } else {
	            	var mousex = e.pageX - 200; //Get X coordinates
	                var mousey = e.pageY + 10; //Get Y coordinates
	            }
	            $('.atooltip').css({ top: mousey, left: mousex })
        });

	});

