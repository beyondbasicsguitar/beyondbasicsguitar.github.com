(function ($) {
    "use strict";
    if (typeof String.prototype.endsWith !== 'function') {
        String.prototype.endsWith = function (suffix) {
            return this.indexOf(suffix, this.length - suffix.length) !== -1;
        };
    }

    /*jslint unparam: true*/
    $("a").each(function (index, item) {
        var $item = $(item),
            href = $item.attr("href");
        if (typeof href === 'string') {
            //console.log(href.endsWith("mp3"));
            if (href.endsWith("mp3")) {
                $item.after($("<audio/>", {
                    "controls": true
                }).append($("<source/>", {
                    "src": href,
                    "type": "audio/mp3"
                })));
            }
        }
    });
    /*jslint unparam: false*/
}(jQuery));