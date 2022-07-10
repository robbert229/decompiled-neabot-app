exports.createFA5iconSet = function (t) {
  var o = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {},
    f = arguments.length > 2 && undefined !== arguments[2] && arguments[2],
    u = Object.keys(o),
    s = 'FontAwesome5' + (f ? 'Pro' : 'Free');

  function v(l, o) {
    var u = arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : s,
      v = l,
      c = 'FontAwesome5_' + (f ? 'Pro_' + v : v) + '.ttf';

    if ('Brands' === v) {
      v = 'Regular';
      c = 'FontAwesome5_Brands.ttf';
    }

    return {
      fontFamily: u + '-' + v,
      fontFile: c,
      fontStyle: module1508.Platform.select({
        ios: {
          fontWeight: o,
        },
        default: {},
      }),
      glyphMap: t,
    };
  }

  var c = v('Brands', '400', 'FontAwesome5Brands'),
    h = v('Light', '300'),
    F = v('Regular', '400'),
    b = v('Solid', '900');
  return module1646.default(
    {
      brand: c,
      light: h,
      regular: F,
      solid: b,
    },
    {
      defaultStyle: 'regular',
      fallbackFamily: function (t) {
        for (var n = 0; n < u.length; n += 1) {
          var l = u[n];
          if (-1 !== o[l].indexOf(t)) return 'brands' === l ? 'brand' : l;
        }

        return 'regular';
      },
      glyphValidator: function (t, n) {
        var l = 'brand' === n ? 'brands' : n;
        return -1 !== u.indexOf(l) && -1 !== o[l].indexOf(t);
      },
    }
  );
};

var module1508 = require('./1508'),
  module1646 = require('./1646');

exports.FA5Style = {
  regular: 'regular',
  light: 'light',
  solid: 'solid',
  brand: 'brand',
};
