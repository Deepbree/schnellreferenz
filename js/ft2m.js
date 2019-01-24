function ft2m() {
    var params = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
	if(params[0]=='m') {
		$('.item-title, .item-desc, .text, p').each(function() {
			var text = $(this).html();
			text = text.replace(/10\s*(ft\.?|Fuß)/g, '3m'); 
			text = text.replace(/\b5\s*(ft\.?|Fuß)/g, '1.5m'); 
			text = text.replace(/\b0\s*(ft\.?|Fuß)/g, '0m'); 
			text = text.replace(/<\/b>\s*in Fuß/g, ' * 0,30</b> in Meter'); 
			text = text.replace(/STR\) ft/g, 'STR) * 0,30 m'); 
			text = text.replace(/Stärke ft/g, 'Stärke * 0,30 m'); 
			
			$(this).html(text);
		});
	}
}