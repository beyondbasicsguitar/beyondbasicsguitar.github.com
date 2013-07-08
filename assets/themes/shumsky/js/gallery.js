// var windowWidth = $(window).width(),
//     windowHeight = $(window).height(),
//     windowHeightFixed = windowHeight - 50,
//     windowWidthFixed = windowWidth - 50;   

// $(".picture-box a").lightBox({
// 	maxHeight: windowHeightFixed,
// 	maxWidth: windowWidthFixed
// })

$(document).ready(function() {
	$(".picture-box a").fancybox({
		prevEffect	: 'none',
		nextEffect	: 'none',
		helpers	: {
			title	: {
				type: 'outside'
			},
			thumbs	: {
				width	: 50,
				height	: 50
			},
			buttons : {}
		}
	});
});