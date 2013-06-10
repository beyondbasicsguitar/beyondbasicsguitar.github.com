var windowWidth = $(window).width(),
    windowHeight = $(window).height(),
    windowHeightFixed = windowHeight - 50,
    windowWidthFixed = windowWidth - 50;   

$(".picture-box a").lightBox({
	maxHeight: windowHeightFixed,
	maxWidth: windowWidthFixed
})