'use strict';

function removeAttribute($, el, selector) {
    $(el).removeAttr(selector);
}

module.exports = function (el, $, whitelist) {
    var selectors = [ 'class', 'id' ];

    selectors.forEach(function (selector) {
        var attribute = $(el).attr(selector);

        if (typeof attribute !== 'undefined') {
            if (whitelist.length > 0) {
                if (selector == 'id') {
                    var selAttribute = '#' + attribute;
                    if (whitelist.indexOf(selAttribute) === -1) {
                        removeAttribute($, el, selector);
                    }
                } else {
                    var attributeClasses = attribute.split(' ').filter(function(a) {
                        var selAttribute = '.' + a;
                        return (whitelist.indexOf(selAttribute) > -1) ? true : false;
                    });

                    if (attributeClasses.length > 0) {
                        removeAttribute($, el, selector);
                        $(el).attr('class', attributeClasses.join(' '));
                    } else {
                        removeAttribute($, el, selector);
                    }
                }
            } else {
                removeAttribute($, el, selector);
            }
        }
    });
};
