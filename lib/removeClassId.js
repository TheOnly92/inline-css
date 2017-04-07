'use strict';

module.exports = function (el, $, whitelist) {
    var selectors = [ 'class', 'id' ];

    selectors.forEach(function (selector) {
        var attribute = $(el).attr(selector);

        if (typeof attribute !== 'undefined') {
            var selAttribute = (selector == 'class' ? '.' : '#') + attribute;
            if (whitelist.indexOf(selAttribute) === -1) {
                $(el).removeAttr(selector);
            }
        }
    });
};
