var module52 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  React = require('react'),
  ReactNative = require('react-native'),
  p = ['maskElement', 'children'];

function h() {
  if ('undefined' == typeof Reflect || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if ('function' == typeof Proxy) return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (t) {
    return false;
  }
}

var y = ReactNative.requireNativeComponent('RNCMaskedView'),
  k = (function (t, ...args) {
    module35.default(w, t);

    var k = w,
      E = h(),
      R = function () {
        var t,
          n = module34.default(k);

        if (E) {
          var l = module34.default(this).constructor;
          t = Reflect.construct(n, arguments, l);
        } else t = n.apply(this, arguments);

        return module37.default(this, t);
      };

    function w() {
      var t;
      module24.default(this, w);
      (t = R.call(this, ...args))._hasWarnedInvalidRenderMask = false;
      return t;
    }

    module25.default(w, [
      {
        key: 'render',
        value: function () {
          var t = this.props,
            l = t.maskElement,
            u = t.children,
            o = module52.default(t, p);
          if (React.default.isValidElement(l))
            return React.default.createElement(
              y,
              o,
              React.default.createElement(
                ReactNative.View,
                {
                  pointerEvents: 'none',
                  style: ReactNative.StyleSheet.absoluteFill,
                },
                l
              ),
              u
            );
          else {
            if (!this._hasWarnedInvalidRenderMask) {
              console.warn('MaskedView: Invalid `maskElement` prop was passed to MaskedView. Expected a React Element. No mask will render.');
              this._hasWarnedInvalidRenderMask = true;
            }

            return React.default.createElement(ReactNative.View, o, u);
          }
        },
      },
    ]);
    return w;
  })(React.default.Component);

exports.default = k;
