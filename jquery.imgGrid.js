(function( $ ) {
	var selector;
	$.fn.imgGrid = function(){
		selector = $(this);
		selector.find('img').each(function( index, element ){
	        var clone = element.clone();
	        element.parent().addClass('clearfix');
	        element.replaceWith($('<span class="img-grid">').append(clone));
	        $('.img-grid:nth-child(2n + 1):last-child').addClass('full');

	        if( $('.img-grid').hasClass('full') === false ){
	            $('.img-grid:even').addClass('even');
	        }
	    });
	}
})( jQuery );