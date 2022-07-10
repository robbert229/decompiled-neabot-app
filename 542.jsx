var module11 = require('./11'),
  module52 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  React = O(require('react')),
  module539 = O(require('./539')),
  ReactNative = require('react-native'),
  v = ['style'];

function S(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    l = new WeakMap();
  return (S = function (t) {
    return t ? l : n;
  })(t);
}

function O(t, n) {
  if (!n && t && t.__esModule) return t;
  if (null === t || ('object' != typeof t && 'function' != typeof t))
    return {
      default: t,
    };
  var l = S(n);
  if (l && l.has(t)) return l.get(t);
  var o = {},
    u = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var s in t)
    if ('default' !== s && Object.prototype.hasOwnProperty.call(t, s)) {
      var f = u ? Object.getOwnPropertyDescriptor(t, s) : null;
      if (f && (f.get || f.set)) Object.defineProperty(o, s, f);
      else o[s] = t[s];
    }

  o.default = t;
  if (l) l.set(t, o);
  return o;
}

function C() {
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

var U = (function (t) {
  module35.default(P, t);

  var S = P,
    O = C(),
    U = function () {
      var t,
        n = module34.default(S);

      if (O) {
        var l = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, l);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function P(t) {
    var n;
    module24.default(this, P);

    (n = U.call(this, t)).showUnderlay = function () {
      if (n.hasPressHandler()) {
        n.setState({
          extraChildStyle: {
            opacity: n.props.activeOpacity,
          },
          extraUnderlayStyle: {
            backgroundColor: n.props.underlayColor,
          },
        });
        if (!(null == n.props.onShowUnderlay)) n.props.onShowUnderlay();
      }
    };

    n.hasPressHandler = function () {
      return n.props.onPress || n.props.onPressIn || n.props.onPressOut || n.props.onLongPress;
    };

    n.hideUnderlay = function () {
      n.setState({
        extraChildStyle: null,
        extraUnderlayStyle: null,
      });
      if (!(null == n.props.onHideUnderlay)) n.props.onHideUnderlay();
    };

    n.onStateChange = function (t, l) {
      if (l === module539.TOUCHABLE_STATE.BEGAN) n.showUnderlay();
      else if (!(l !== module539.TOUCHABLE_STATE.UNDETERMINED && l !== module539.TOUCHABLE_STATE.MOVED_OUTSIDE)) n.hideUnderlay();
    };

    n.state = {
      extraChildStyle: null,
      extraUnderlayStyle: null,
    };
    return n;
  }

  module25.default(P, [
    {
      key: 'renderChildren',
      value: function () {
        if (!this.props.children) return <ReactNative.View />;
        var t = React.Children.only(this.props.children);
        return React.cloneElement(t, {
          style: ReactNative.StyleSheet.compose(t.props.style, this.state.extraChildStyle),
        });
      },
    },
    {
      key: 'render',
      value: function () {
        var t = this.props,
          o = t.style,
          u = undefined === o ? {} : o,
          s = module52.default(t, v),
          f = this.state.extraUnderlayStyle;
        return React.createElement(
          module539.default,
          module11.default({}, s, {
            style: [u, f],
            onStateChange: this.onStateChange,
          }),
          this.renderChildren()
        );
      },
    },
  ]);
  return P;
})(React.Component);

exports.default = U;
U.defaultProps = module11.default({}, module539.default.defaultProps, {
  activeOpacity: 0.85,
  delayPressOut: 100,
  underlayColor: 'black',
});
