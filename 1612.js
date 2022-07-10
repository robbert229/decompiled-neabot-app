var module11 = require('./11'),
  module52 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  module260 = require('./260'),
  React = require('react'),
  ReactNative = require('react-native'),
  module1571 = require('./1571'),
  f = ['name', 'onPress', 'forceTextInputFocus', 'color'];

exports.ICON_SIZE = 24;
var I = React.default.createContext({
  style: {},
  isTextInputFocused: false,
  forceFocus: function () {},
});

exports.IconAdornment = function (t) {
  var o = t.icon,
    n = t.topPosition,
    s = t.side,
    l = t.isTextInputFocused,
    f = t.forceFocus,
    p = {
      style: module260.default(
        {
          top: n,
        },
        s,
        12
      ),
      isTextInputFocused: l,
      forceFocus: f,
    };
  return React.default.createElement(
    I.Provider,
    {
      value: p,
    },
    o
  );
};

var p = function (t) {
  var u = t.name,
    p = t.onPress,
    F = t.forceTextInputFocus,
    x = t.color,
    y = module52.default(t, f),
    T = React.default.useContext(I),
    P = T.style,
    C = T.isTextInputFocused,
    _ = T.forceFocus,
    E = React.default.useCallback(
      function () {
        if (F && !C) _();
        if (!(null == p)) p();
      },
      [F, _, C, p]
    );
  return React.default.createElement(
    ReactNative.View,
    {
      style: [v.container, P],
    },
    React.default.createElement(
      module1571.default,
      module11.default(
        {
          icon: u,
          style: v.iconButton,
          size: 24,
          onPress: E,
          color: 'function' == typeof x ? x(C) : x,
        },
        y
      )
    )
  );
};

p.displayName = 'TextInput.Icon';
p.defaultProps = {
  forceTextInputFocus: true,
};
var v = ReactNative.StyleSheet.create({
    container: {
      position: 'absolute',
      width: 24,
      height: 24,
      justifyContent: 'center',
      alignItems: 'center',
    },
    iconButton: {
      margin: 0,
    },
  }),
  F = p;
exports.default = F;
