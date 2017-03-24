



$(function() {
	$('#sliderVisual' ).slider({
		value: 0,
		min: 0,
		max: 10,
		step: 1,
		
			slide: function(event, ui) {
				$( "#orderQuantity" ).val( ui, value);
			}
				
		
		});
		

		
});