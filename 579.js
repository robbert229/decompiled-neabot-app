var module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var o = s(n);
    if (o && o.has(t)) return o.get(t);
    var u = {},
      c = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var l in t)
      if ('default' !== l && Object.prototype.hasOwnProperty.call(t, l)) {
        var f = c ? Object.getOwnPropertyDescriptor(t, l) : null;
        if (f && (f.get || f.set)) Object.defineProperty(u, l, f);
        else u[l] = t[l];
      }

    u.default = t;
    if (o) o.set(t, u);
    return u;
  })(require('react')),
  ReactNative = require('react-native');

function s(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (s = function (t) {
    return t ? o : n;
  })(t);
}

function y() {
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

var v = (function (t, ...args) {
  module35.default(T, t);

  var React = T,
    s = y(),
    v = function () {
      var t,
        n = module34.default(React);

      if (s) {
        var o = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, o);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function T() {
    var t;
    module24.default(this, T);
    (t = v.call(this, ...args)).previouslyFocusedTextInput = undefined;
    t.startTimestamp = 0;

    t.clearKeyboardTimeout = function () {
      if (undefined !== t.keyboardTimeout) {
        clearTimeout(t.keyboardTimeout);
        t.keyboardTimeout = undefined;
      }
    };

    t.handlePageChangeStart = function () {
      if (t.props.enabled) {
        t.clearKeyboardTimeout();
        var n = ReactNative.TextInput.State.currentlyFocusedInput ? ReactNative.TextInput.State.currentlyFocusedInput() : ReactNative.TextInput.State.currentlyFocusedField();
        ReactNative.TextInput.State.blurTextInput(n);
        t.previouslyFocusedTextInput = n;
        t.startTimestamp = Date.now();
      }
    };

    t.handlePageChangeConfirm = function (n) {
      if (t.props.enabled) {
        if ((t.clearKeyboardTimeout(), n)) ReactNative.Keyboard.dismiss();
        else {
          var o = t.previouslyFocusedTextInput;
          if (o) ReactNative.TextInput.State.blurTextInput(o);
        }
        t.previouslyFocusedTextInput = undefined;
      }
    };

    t.handlePageChangeCancel = function () {
      if (t.props.enabled) {
        t.clearKeyboardTimeout();
        var n = t.previouslyFocusedTextInput;
        if (n)
          Date.now() - t.startTimestamp < 100
            ? (t.keyboardTimeout = setTimeout(function () {
                ReactNative.TextInput.State.focusTextInput(n);
                t.previouslyFocusedTextInput = undefined;
              }, 100))
            : (ReactNative.TextInput.State.focusTextInput(n), (t.previouslyFocusedTextInput = undefined));
      }
    };

    return t;
  }

  module25.default(T, [
    {
      key: 'componentWillUnmount',
      value: function () {
        this.clearKeyboardTimeout();
      },
    },
    {
      key: 'render',
      value: function () {
        return this.props.children({
          onPageChangeStart: this.handlePageChangeStart,
          onPageChangeConfirm: this.handlePageChangeConfirm,
          onPageChangeCancel: this.handlePageChangeCancel,
        });
      },
    },
  ]);
  return T;
})(React.Component);

exports.default = v;
