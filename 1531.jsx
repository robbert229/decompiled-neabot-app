var module12 = require('./12'),
  module564 = require('./564'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var o = b(n);
    if (o && o.has(t)) return o.get(t);
    var l = {},
      c = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var s in t)
      if ('default' !== s && Object.prototype.hasOwnProperty.call(t, s)) {
        var u = c ? Object.getOwnPropertyDescriptor(t, s) : null;
        if (u && (u.get || u.set)) Object.defineProperty(l, s, u);
        else l[s] = t[s];
      }

    l.default = t;
    if (o) o.set(t, l);
    return l;
  })(require('react')),
  ReactNative = require('react-native'),
  module1532 = require('./1532'),
  module1505 = require('./1505'),
  module1529 = require('./1529'),
  module1495 = require('./1495'),
  module1533 = require('./1533');

function b(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (b = function (t) {
    return t ? o : n;
  })(t);
}

var v = function (t) {
  var p = t.left,
    b = t.right,
    v = t.title,
    w = t.description,
    E = t.children,
    O = t.theme,
    L = t.titleStyle,
    P = t.descriptionStyle,
    j = t.titleNumberOfLines,
    x = undefined === j ? 1 : j,
    C = t.descriptionNumberOfLines,
    I = undefined === C ? 2 : C,
    S = t.style,
    M = t.id,
    V = t.testID,
    _ = t.onPress,
    k = t.onLongPress,
    A = t.expanded,
    D = React.useState(A || false),
    T = module12.default(D, 2),
    z = T[0],
    N = T[1],
    W = module564.default(O.colors.text).alpha(0.87).rgb().string(),
    G = module564.default(O.colors.text).alpha(0.54).rgb().string(),
    R = undefined !== A ? A : z,
    q = React.useContext(module1533.ListAccordionGroupContext);
  if (null !== q && !M) throw new Error('List.Accordion is used inside a List.AccordionGroup without specifying an id prop.');
  var B = q ? q.expandedId === M : R,
    F =
      q && undefined !== M
        ? function () {
            return q.onAccordionPress(M);
          }
        : function () {
            if (!(null == _)) _();
            if (undefined === A)
              N(function (t) {
                return !t;
              });
          };
  return (
    <ReactNative.View>
      <ReactNative.View
        style={{
          backgroundColor: O.colors.background,
        }}
      >
        <module1532.default
          style={[h.container, S]}
          onPress={F}
          onLongPress={k}
          accessibilityTraits="button"
          accessibilityComponentType="button"
          accessibilityRole="button"
          testID={V}
          delayPressIn={0}
          borderless
        >
          <ReactNative.View style={h.row} pointerEvents="none">
            {p
              ? p({
                  color: B ? O.colors.primary : G,
                })
              : null}
            <ReactNative.View style={[h.item, h.content]}>
              <module1529.default
                selectable={false}
                numberOfLines={x}
                style={[
                  h.title,
                  {
                    color: B ? O.colors.primary : W,
                  },
                  L,
                ]}
              >
                {v}
              </module1529.default>
              {w && (
                <module1529.default
                  selectable={false}
                  numberOfLines={I}
                  style={[
                    h.description,
                    {
                      color: G,
                    },
                    P,
                  ]}
                >
                  {w}
                </module1529.default>
              )}
            </ReactNative.View>
            <ReactNative.View style={[h.item, w ? h.multiline : undefined]}>
              {b ? (
                b({
                  isExpanded: B,
                })
              ) : (
                <module1505.default name={B ? 'chevron-up' : 'chevron-down'} color={W} size={24} direction={ReactNative.I18nManager.isRTL ? 'rtl' : 'ltr'} />
              )}
            </ReactNative.View>
          </ReactNative.View>
        </module1532.default>
      </ReactNative.View>
      {B
        ? React.Children.map(E, function (t) {
            return p && React.isValidElement(t) && !t.props.left && !t.props.right
              ? React.cloneElement(t, {
                  style: [h.child, t.props.style],
                })
              : t;
          })
        : null}
    </ReactNative.View>
  );
};

v.displayName = 'List.Accordion';
var h = ReactNative.StyleSheet.create({
    container: {
      padding: 8,
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    multiline: {
      height: 40,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 16,
    },
    description: {
      fontSize: 14,
    },
    item: {
      margin: 8,
    },
    child: {
      paddingLeft: 64,
    },
    content: {
      flex: 1,
      justifyContent: 'center',
    },
  }),
  w = module1495.withTheme(v);
exports.default = w;
