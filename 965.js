var module11 = require('./11'),
  module24 = require('./24'),
  module25 = require('./25'),
  module32 = require('./32'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  React = (function (t, l) {
    if (!l && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var u = C(l);
    if (u && u.has(t)) return u.get(t);
    var n = {},
      o = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var f in t)
      if ('default' !== f && Object.prototype.hasOwnProperty.call(t, f)) {
        var p = o ? Object.getOwnPropertyDescriptor(t, f) : null;
        if (p && (p.get || p.set)) Object.defineProperty(n, f, p);
        else n[f] = t[f];
      }

    n.default = t;
    if (u) u.set(t, n);
    return n;
  })(require('react')),
  PropTypes = require('prop-types'),
  ReactNative = require('react-native'),
  module945 = require('./945'),
  module957 = require('./957'),
  module949 = require('./949'),
  module966 = require('./966');

function C(t) {
  if ('function' != typeof WeakMap) return null;
  var l = new WeakMap(),
    u = new WeakMap();
  return (C = function (t) {
    return t ? u : l;
  })(t);
}

function H() {
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

var k = (function (t) {
  module35.default(w, t);

  var module11 = w,
    PropTypes = H(),
    b = function () {
      var t,
        u = module34.default(module11);

      if (PropTypes) {
        var n = module34.default(this).constructor;
        t = Reflect.construct(u, arguments, n);
      } else t = u.apply(this, arguments);

      return module37.default(this, t);
    };

  function w() {
    module24.default(this, w);
    return b.apply(this, arguments);
  }

  module25.default(w, [
    {
      key: 'onItemPress',
      value: function (t) {
        var l = this.props,
          u = l.items,
          n = l.onSelected;
        this.close(false);
        if (n) n(u[t], t);
      },
    },
    {
      key: 'renderContent',
      value: function () {
        var t = this,
          l = this.props,
          u = l.title,
          n = l.items,
          f = l.selectedIndex,
          p = l.getItemText,
          y = {
            backgroundColor: module945.default.pupHeaderColor,
            paddingLeft: module945.default.pupHeaderPaddingLeft,
            paddingRight: module945.default.pupHeaderPaddingRight,
            paddingTop: module945.default.pupHeaderPaddingTop,
            paddingBottom: module945.default.pupHeaderPaddingBottom,
          },
          b = {
            color: module945.default.pupHeaderTitleColor,
            fontSize: module945.default.pupHeaderFontSize,
            fontWeight: module945.default.pupHeaderFontWeight,
          },
          C = {
            backgroundColor: module945.default.pupHeaderSeparatorColor,
            height: module945.default.pupHeaderSeparatorHeight,
          },
          H = module945.default.screenInset,
          k = H.left,
          I = H.right;
        return module32.default(module34.default(w.prototype), 'renderContent', this).call(
          this,
          React.default.createElement(
            ReactNative.View,
            {
              style: {
                backgroundColor: module945.default.pupColor,
                maxHeight: module945.default.pupMaxHeight,
                paddingLeft: k,
                paddingRight: I,
              },
            },
            u
              ? React.default.createElement(
                  ReactNative.View,
                  {
                    style: y,
                  },
                  React.default.createElement(module949.default, {
                    style: b,
                    text: u,
                  })
                )
              : null,
            u
              ? React.default.createElement(ReactNative.View, {
                  style: C,
                })
              : null,
            React.default.createElement(
              ReactNative.ScrollView,
              {
                style: {
                  backgroundColor: module945.default.pupColor,
                  flexGrow: 1,
                },
              },
              n &&
                n.map(function (l, u) {
                  return React.default.createElement(t.constructor.Item, {
                    key: 'item' + u,
                    style: {
                      backgroundColor: module945.default.pupItemColor,
                    },
                    title: p ? p(l, u) : l,
                    selected: u === f,
                    bottomSeparator: React.default.createElement(ReactNative.View, {
                      style: {
                        backgroundColor: module945.default.pupSeparatorColor,
                        height: module945.default.rowSeparatorLineWidth,
                      },
                    }),
                    onPress: function () {
                      return t.onItemPress(u);
                    },
                  });
                }),
              React.default.createElement(ReactNative.View, {
                style: {
                  height: module945.default.screenInset.bottom,
                },
              })
            )
          )
        );
      },
    },
  ]);
  return w;
})(module957.default.PullView);

exports.default = k;
k.propTypes = module11.default({}, module957.default.PullView.propTypes, {
  title: PropTypes.default.string,
  items: PropTypes.default.array.isRequired,
  selectedIndex: PropTypes.default.number,
  getItemText: PropTypes.default.func,
  onSelected: PropTypes.default.func,
});
k.Item = module966.default;
