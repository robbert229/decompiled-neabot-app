var module11 = require('./11'),
  module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module401 = require('./401'),
  module1099 = require('./1099'),
  React = require('react'),
  module408 = require('./408'),
  y = function (t, n) {
    var o = {};

    for (var l in t) Object.prototype.hasOwnProperty.call(t, l) && n.indexOf(l) < 0 && (o[l] = t[l]);

    if (null != t && 'function' == typeof Object.getOwnPropertySymbols) {
      var u = 0;

      for (l = Object.getOwnPropertySymbols(t); u < l.length; u++) n.indexOf(l[u]) < 0 && Object.prototype.propertyIsEnumerable.call(t, l[u]) && (o[l[u]] = t[l[u]]);
    }

    return o;
  },
  O = (function (t) {
    module35.default(v, t);
    var O = module401.default(v);

    function v() {
      module24.default(this, v);
      return O.apply(this, arguments);
    }

    module25.default(v, [
      {
        key: 'render',
        value: function () {
          var t = this.props,
            o = t.size,
            l = t.color,
            u = t.name,
            f = y(t, ['size', 'color', 'name']),
            O =
              'string' == typeof o
                ? {
                    xxs: 15,
                    xs: 18,
                    sm: 21,
                    md: 22,
                    lg: 36,
                  }[o]
                : o;
          return React.default.createElement(module408.WithTheme, null, function (t, o) {
            return React.default.createElement(
              module1099.IconOutline,
              module11.default(
                {
                  size: O,
                  color: l || o.color_icon_base,
                  name: u,
                },
                f
              )
            );
          });
        },
      },
    ]);
    return v;
  })(React.default.Component);

exports.default = O;
O.defaultProps = {
  size: 'md',
};
O.displayName = 'Icon';
