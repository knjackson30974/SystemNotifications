$(document).ready(function () {
	$('.xnot-alert').each(function () {
		var strong = $(this).find('strong');
		var xnot_body = $(this).find('span.xnot-body');
		if (strong[0].scrollWidth > strong.innerWidth()) {
			$(this).addClass('xnot-content-hidden');
		}
		if (xnot_body[0].scrollWidth > xnot_body.innerWidth()) {
			$(this).addClass('xnot-content-hidden');
		}
	});
	$(document).on('click', '.xnot-content-hidden', function () {
		$(this).removeClass('xnot-content-hidden');
		$(this).addClass('xnot-content-shown');
	});
	$(document).on('click', '.xnot-content-shown', function () {
		$(this).removeClass('xnot-content-shown');
		$(this).addClass('xnot-content-hidden');
	});
});
