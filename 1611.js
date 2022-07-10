exports.getAdornmentConfig = function (t) {
  var n = t.left,
    o = t.right,
    p = [];
  if (n || o)
    [
      {
        side: module1614.AdornmentSide.Left,
        adornment: n,
      },
      {
        side: module1614.AdornmentSide.Right,
        adornment: o,
      },
    ].forEach(function (t) {
      var n,
        o = t.side,
        s = t.adornment;

      if (s && React.default.isValidElement(s)) {
        if (s.type === module1613.default) n = module1614.AdornmentType.Affix;
        else if (s.type === module1612.default) n = module1614.AdornmentType.Icon;
        p.push({
          side: o,
          type: n,
        });
      }
    });
  return p;
};

exports.getAdornmentStyleAdjustmentForNativeInput = function (t) {
  var f = t.adornmentConfig,
    u = t.leftAffixWidth,
    l = t.rightAffixWidth,
    s = t.paddingHorizontal,
    y = t.inputOffset,
    v = undefined === y ? 0 : y,
    O = t.mode;

  if (f.length) {
    var T = f.map(function (t) {
        var module11,
          f = t.type,
          y = t.side,
          T = y === module1614.AdornmentSide.Left,
          h = O === module1614.InputMode.Outlined ? module1615.ADORNMENT_OFFSET + module1615.OUTLINED_INPUT_OFFSET : module1615.ADORNMENT_OFFSET,
          x = 'padding' + A(y),
          F = T ? u : l,
          E = 'number' == typeof s ? s : h,
          I = F + E,
          S = f === module1614.AdornmentType.Affix,
          b = 'margin' + A(y);
        module11 = {};
        module260.default(module11, b, S ? 0 : I);
        module260.default(module11, x, S ? I : v);
        return module11;
      }),
      h = T.reduce(function (t, o) {
        return module11.default({}, t, o);
      }, {});
    return h;
  }

  return [{}];
};

var module11 = require('./11'),
  module260 = require('./260'),
  React = require('react'),
  module1612 = y(require('./1612')),
  module1613 = y(require('./1613')),
  module1615 = require('./1615'),
  module1614 = require('./1614');

function s(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (s = function (t) {
    return t ? o : n;
  })(t);
}

function y(t, n) {
  if (!n && t && t.__esModule) return t;
  if (null === t || ('object' != typeof t && 'function' != typeof t))
    return {
      default: t,
    };
  var o = s(n);
  if (o && o.has(t)) return o.get(t);
  var f = {},
    u = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var l in t)
    if ('default' !== l && Object.prototype.hasOwnProperty.call(t, l)) {
      var p = u ? Object.getOwnPropertyDescriptor(t, l) : null;
      if (p && (p.get || p.set)) Object.defineProperty(f, l, p);
      else f[l] = t[l];
    }

  f.default = t;
  if (o) o.set(t, f);
  return f;
}

var A = function (t) {
    return t.charAt(0).toUpperCase() + t.slice(1);
  },
  v = function (t) {
    var o = t.adornmentConfig,
      p = t.left,
      s = t.right,
      y = t.onAffixChange,
      A = t.textStyle,
      v = t.visible,
      O = t.topPosition,
      T = t.isTextInputFocused,
      h = t.forceFocus,
      x = t.paddingHorizontal;
    return o.length
      ? React.default.createElement(
          React.default.Fragment,
          null,
          o.map(function (t) {
            var o,
              F = t.type,
              E = t.side;
            if (E === module1614.AdornmentSide.Left) o = p;
            else if (E === module1614.AdornmentSide.Right) o = s;
            var I = {
              key: E,
              side: E,
              testID: E + '-' + F + '-adornment',
              isTextInputFocused: T,
              paddingHorizontal: x,
            };
            return F === module1614.AdornmentType.Icon
              ? React.default.createElement(
                  module1612.IconAdornment,
                  module11.default({}, I, {
                    icon: o,
                    topPosition: O[module1614.AdornmentType.Icon],
                    forceFocus: h,
                  })
                )
              : F === module1614.AdornmentType.Affix
              ? React.default.createElement(
                  module1613.AffixAdornment,
                  module11.default({}, I, {
                    topPosition: O[module1614.AdornmentType.Affix][E],
                    affix: o,
                    textStyle: A,
                    onLayout: y[E],
                    visible: v,
                  })
                )
              : null;
          })
        )
      : null;
  };

exports.default = v;
