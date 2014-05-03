/**
 * Created by azder on 2014-05-03.
 */

/*global define:false, module:false */

(function (G) {

    return function (name, factory) {

        // ALWAYS
        'use strict';

        if (module && module.exports) {
            module.exports = factory();
            return;
        }

        if ('function' === typeof define && define.amd) {
            define(factory);
            return;
        }

        G[name] = factory(G);

    };

}(this))

('container', function () {

    // ALWAYS
    'use strict';

    return function () {

        var items = Object.create(null);

        return function (name, value) {

            if (null === name) {
                return Object.keys(items).length;
            }

            if (void 0 === name) {
                return items;
            }

            if (void 0 === value) {
                return items[name];
            }

            if (null === value) {
                return delete items[name];
            }

            return (items[name] = value);

        };

    };

});
