var module11 = require('./11'),
  module52 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var l = h(n);
    if (l && l.has(t)) return l.get(t);
    var o = {},
      f = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var u in t)
      if ('default' !== u && Object.prototype.hasOwnProperty.call(t, u)) {
        var s = f ? Object.getOwnPropertyDescriptor(t, u) : null;
        if (s && (s.get || s.set)) Object.defineProperty(o, u, s);
        else o[u] = t[u];
      }

    o.default = t;
    if (l) l.set(t, o);
    return o;
  })(require('react')),
  ReactNative = require('react-native'),
  module1561 = require('./1561'),
  module1563 = require('./1563'),
  module1562 = require('./1562'),
  module1529 = require('./1529'),
  module1532 = require('./1532'),
  module1495 = require('./1495'),
  v = ['style', 'status', 'label', 'onPress', 'labelStyle', 'theme', 'testID', 'mode', 'position'];

function h(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    l = new WeakMap();
  return (h = function (t) {
    return t ? l : n;
  })(t);
}

var w = function (t) {
  var module1495,
    h = t.style,
    w = t.status,
    O = t.label,
    P = t.onPress,
    x = t.labelStyle,
    k = t.theme,
    E = t.testID,
    I = t.mode,
    D = t.position,
    S = undefined === D ? 'trailing' : D,
    _ = module52.default(t, v),
    M = module11.default({}, _, {
      status: w,
      theme: k,
    }),
    C = 'leading' === S;

  module1495 = 'android' === I ? <module1563.default /> : 'ios' === I ? <module1562.default /> : <module1561.default />;
  return (
    <module1532.default onPress={P} testID={E}>
      <ReactNative.View style={[j.container, h]} pointerEvents="none">
        {C && module1495}
        <module1529.default
          style={[
            j.label,
            {
              color: k.colors.text,
              textAlign: C ? 'right' : 'left',
            },
            x,
          ]}
        >
          {O}
        </module1529.default>
        {!C && module1495}
      </ReactNative.View>
    </module1532.default>
  );
};

w.displayName = 'Checkbox.Item';
var O = module1495.withTheme(w);
exports.default = O;
var P = module1495.withTheme(w);
exports.CheckboxItem = P;
var j = ReactNative.StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  label: {
    fontSize: 16,
    flexShrink: 1,
    flexGrow: 1,
  },
});
