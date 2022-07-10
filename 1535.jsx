var module11 = require('./11'),
  module52 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  module564 = require('./564'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var l = b(n);
    if (l && l.has(t)) return l.get(t);
    var o = {},
      c = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var s in t)
      if ('default' !== s && Object.prototype.hasOwnProperty.call(t, s)) {
        var f = c ? Object.getOwnPropertyDescriptor(t, s) : null;
        if (f && (f.get || f.set)) Object.defineProperty(o, s, f);
        else o[s] = t[s];
      }

    o.default = t;
    if (l) l.set(t, o);
    return o;
  })(require('react')),
  ReactNative = require('react-native'),
  module1532 = require('./1532'),
  module1529 = require('./1529'),
  module1495 = require('./1495'),
  y = [
    'left',
    'right',
    'title',
    'description',
    'onPress',
    'theme',
    'style',
    'titleStyle',
    'titleNumberOfLines',
    'descriptionNumberOfLines',
    'titleEllipsizeMode',
    'descriptionEllipsizeMode',
    'descriptionStyle',
  ];

function b(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    l = new WeakMap();
  return (b = function (t) {
    return t ? l : n;
  })(t);
}

var M = function (t) {
  var p = t.left,
    b = t.right,
    M = t.title,
    O = t.description,
    v = t.onPress,
    L = t.theme,
    w = t.style,
    z = t.titleStyle,
    S = t.titleNumberOfLines,
    E = undefined === S ? 1 : S,
    P = t.descriptionNumberOfLines,
    j = undefined === P ? 2 : P,
    N = t.titleEllipsizeMode,
    V = t.descriptionEllipsizeMode,
    _ = t.descriptionStyle,
    R = module52.default(t, y),
    x = module564.default(L.colors.text).alpha(0.87).rgb().string(),
    k = module564.default(L.colors.text).alpha(0.54).rgb().string();
  return (
    <module1532.default>
      <ReactNative.View style={h.row}>
        {p
          ? p({
              color: k,
              style: O ? h.iconMarginLeft : module11.default({}, h.iconMarginLeft, h.marginVerticalNone),
            })
          : null}
        <ReactNative.View style={[h.item, h.content]}>
          <module1529.default
            selectable={false}
            ellipsizeMode={N}
            numberOfLines={E}
            style={[
              h.title,
              {
                color: x,
              },
              z,
            ]}
          >
            {M}
          </module1529.default>
          {O
            ? (function (t, n) {
                return 'function' == typeof n ? (
                  n({
                    selectable: false,
                    ellipsizeMode: V,
                    color: t,
                    fontSize: h.description.fontSize,
                  })
                ) : (
                  <module1529.default
                    selectable={false}
                    numberOfLines={j}
                    ellipsizeMode={V}
                    style={[
                      h.description,
                      {
                        color: t,
                      },
                      _,
                    ]}
                  >
                    {n}
                  </module1529.default>
                );
              })(k, O)
            : null}
        </ReactNative.View>
        {b
          ? b({
              color: k,
              style: O ? h.iconMarginRight : module11.default({}, h.iconMarginRight, h.marginVerticalNone),
            })
          : null}
      </ReactNative.View>
    </module1532.default>
  );
};

M.displayName = 'List.Item';
var h = ReactNative.StyleSheet.create({
    container: {
      padding: 8,
    },
    row: {
      flexDirection: 'row',
    },
    title: {
      fontSize: 16,
    },
    description: {
      fontSize: 14,
    },
    marginVerticalNone: {
      marginVertical: 0,
    },
    iconMarginLeft: {
      marginLeft: 0,
      marginRight: 16,
    },
    iconMarginRight: {
      marginRight: 0,
    },
    item: {
      marginVertical: 6,
      paddingLeft: 8,
    },
    content: {
      flex: 1,
      justifyContent: 'center',
    },
  }),
  O = module1495.withTheme(M);
exports.default = O;
