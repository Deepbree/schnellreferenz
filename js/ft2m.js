function ft2m() {
    var params = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
	console.log(params);
	if(params[0]=='m') {
		$('.item-title, .item-desc, .text, p').each(function() {
			var text = $(this).html();
			text = text.replace(/10\s*(ft\.?|Fuß)/g, '3m'); 
			text = text.replace(/\b5\s*(ft\.?|Fuß)/g, '1.5m'); 
			text = text.replace(/\b0\s*(ft\.?|Fuß)/g, '0m'); 
			text = text.replace(/<\/b>\s*in Fuß/g, ' * 0,30</b> in Meter'); 
			$(this).html(text);
		});
	}
}