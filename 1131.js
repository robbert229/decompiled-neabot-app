var module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module401 = require('./401'),
  React = require('react'),
  ReactNative = require('react-native'),
  module408 = require('./408'),
  v = (function (t) {
    module35.default(h, t);
    var v = module401.default(h);

    function h() {
      module24.default(this, h);
      return v.apply(this, arguments);
    }

    module25.default(h, [
      {
        key: 'render',
        value: function () {
          var t = this.props,
            n = t.size,
            u = t.style,
            l = t.children;
          return React.default.createElement(module408.WithTheme, null, function (t, f) {
            var s = f['h_spacing_'.concat(n)];
            return React.default.createElement(
              ReactNative.View,
              {
                style: [
                  {
                    marginLeft: s,
                    marginRight: s,
                  },
                  u,
                ],
              },
              l
            );
          });
        },
      },
    ]);
    return h;
  })(React.default.Component);

v.defaultProps = {
  size: 'lg',
};
var h = v;
exports.default = h;
