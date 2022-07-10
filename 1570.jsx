var module11 = require('./11'),
  module52 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  module12 = require('./12'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var l = L(n);
    if (l && l.has(t)) return l.get(t);
    var o = {},
      s = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var c in t)
      if ('default' !== c && Object.prototype.hasOwnProperty.call(t, c)) {
        var u = s ? Object.getOwnPropertyDescriptor(t, c) : null;
        if (u && (u.get || u.set)) Object.defineProperty(o, c, u);
        else o[c] = t[c];
      }

    o.default = t;
    if (l) l.set(t, o);
    return o;
  })(require('react')),
  ReactNative = require('react-native'),
  module564 = require('./564'),
  module1571 = require('./1571'),
  module1529 = require('./1529'),
  module1495 = require('./1495'),
  module1505 = require('./1505'),
  module1573 = require('./1573'),
  module1546 = require('./1546'),
  v = [
    'label',
    'accessibilityLabel',
    'page',
    'numberOfPages',
    'onPageChange',
    'style',
    'theme',
    'showFastPaginationControls',
    'numberOfItemsPerPageList',
    'numberOfItemsPerPage',
    'onItemsPerPageChange',
    'selectPageDropdownLabel',
    'selectPageDropdownAccessibilityLabel',
  ];

function L(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    l = new WeakMap();
  return (L = function (t) {
    return t ? l : n;
  })(t);
}

var w = function (t) {
    var n = t.page,
      l = t.numberOfPages,
      o = t.onPageChange,
      u = t.showFastPaginationControls,
      b = module1495.useTheme().colors;
    return (
      <React.Fragment>
        {u ? (
          <module1571.default
            icon={function (t) {
              var n = t.size,
                l = t.color;
              return <module1505.default name="page-first" color={l} size={n} direction={ReactNative.I18nManager.isRTL ? 'rtl' : 'ltr'} />;
            }}
            color={b.text}
            disabled={0 === n}
            onPress={function () {
              return o(0);
            }}
            accessibilityLabel="page-first"
          />
        ) : null}
        <module1571.default
          icon={function (t) {
            var n = t.size,
              l = t.color;
            return <module1505.default name="chevron-left" color={l} size={n} direction={ReactNative.I18nManager.isRTL ? 'rtl' : 'ltr'} />;
          }}
          color={b.text}
          disabled={0 === n}
          onPress={function () {
            return o(n - 1);
          }}
          accessibilityLabel="chevron-left"
        />
        <module1571.default
          icon={function (t) {
            var n = t.size,
              l = t.color;
            return <module1505.default name="chevron-right" color={l} size={n} direction={ReactNative.I18nManager.isRTL ? 'rtl' : 'ltr'} />;
          }}
          color={b.text}
          disabled={0 === l || n === l - 1}
          onPress={function () {
            return o(n + 1);
          }}
          accessibilityLabel="chevron-right"
        />
        {u ? (
          <module1571.default
            icon={function (t) {
              var n = t.size,
                l = t.color;
              return <module1505.default name="page-last" color={l} size={n} direction={ReactNative.I18nManager.isRTL ? 'rtl' : 'ltr'} />;
            }}
            color={b.text}
            disabled={0 === l || n === l - 1}
            onPress={function () {
              return o(l - 1);
            }}
            accessibilityLabel="page-last"
          />
        ) : null}
      </React.Fragment>
    );
  },
  O = function (t) {
    var n = t.numberOfItemsPerPageList,
      l = t.numberOfItemsPerPage,
      c = t.onItemsPerPageChange,
      u = module1495.useTheme().colors,
      f = React.useState(false),
      b = module12.default(f, 2),
      p = b[0],
      v = b[1];
    return (
      <module1573.default
        visible={p}
        onDismiss={function () {
          return v(!p);
        }}
        anchor={
          <module1546.default
            mode="outlined"
            onPress={function () {
              return v(true);
            }}
            style={I.button}
            icon="menu-down"
            contentStyle={I.contentStyle}
          >
            {'' + l}
          </module1546.default>
        }
      >
        {null == n
          ? undefined
          : n.map(function (t) {
              return React.createElement(module1573.default.Item, {
                key: t,
                titleStyle: t === l && {
                  color: u.primary,
                },
                onPress: function () {
                  if (!(null == c)) c(t);
                  v(false);
                },
                title: t,
              });
            })}
      </module1573.default>
    );
  },
  E = function (t) {
    var o = t.label,
      f = t.accessibilityLabel,
      P = t.page,
      p = t.numberOfPages,
      y = t.onPageChange,
      h = t.style,
      L = t.theme,
      E = t.showFastPaginationControls,
      C = undefined !== E && E,
      D = t.numberOfItemsPerPageList,
      x = t.numberOfItemsPerPage,
      T = t.onItemsPerPageChange,
      z = t.selectPageDropdownLabel,
      M = t.selectPageDropdownAccessibilityLabel,
      S = module52.default(t, v),
      j = module564.default(L.colors.text).alpha(0.6).rgb().string();
    return React.createElement(
      ReactNative.View,
      module11.default({}, S, {
        style: [I.container, h],
        accessibilityLabel: 'pagination-container',
      }),
      D &&
        x &&
        T &&
        React.createElement(
          ReactNative.View,
          {
            accessibilityLabel: 'Options Select',
            style: I.optionsContainer,
          },
          React.createElement(
            module1529.default,
            {
              style: [
                I.label,
                {
                  color: j,
                },
              ],
              numberOfLines: 3,
              accessibilityLabel: M || 'selectPageDropdownLabel',
            },
            z
          ),
          React.createElement(O, {
            numberOfItemsPerPageList: D,
            numberOfItemsPerPage: x,
            onItemsPerPageChange: T,
          })
        ),
      React.createElement(
        module1529.default,
        {
          style: [
            I.label,
            {
              color: j,
            },
          ],
          numberOfLines: 3,
          accessibilityLabel: f || 'label',
        },
        o
      ),
      React.createElement(
        ReactNative.View,
        {
          style: I.iconsContainer,
        },
        React.createElement(w, {
          showFastPaginationControls: C,
          onPageChange: y,
          page: P,
          numberOfPages: p,
        })
      )
    );
  };

exports.DataTablePagination = E;
E.displayName = 'DataTable.Pagination';
var I = ReactNative.StyleSheet.create({
    container: {
      justifyContent: 'flex-end',
      flexDirection: 'row',
      alignItems: 'center',
      paddingLeft: 16,
      flexWrap: 'wrap',
    },
    optionsContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 6,
    },
    label: {
      fontSize: 12,
      marginRight: 16,
    },
    button: {
      textAlign: 'center',
      marginRight: 16,
    },
    iconsContainer: {
      flexDirection: 'row',
    },
    contentStyle: {
      flexDirection: 'row-reverse',
    },
  }),
  C = module1495.withTheme(E);
exports.default = C;
