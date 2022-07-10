var module11 = require('./11'),
  module24 = require('./24'),
  module25 = require('./25'),
  module32 = require('./32'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var l = P(n);
    if (l && l.has(t)) return l.get(t);
    var u = {},
      o = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var s in t)
      if ('default' !== s && Object.prototype.hasOwnProperty.call(t, s)) {
        var f = o ? Object.getOwnPropertyDescriptor(t, s) : null;
        if (f && (f.get || f.set)) Object.defineProperty(u, s, f);
        else u[s] = t[s];
      }

    u.default = t;
    if (l) l.set(t, u);
    return u;
  })(require('react')),
  PropTypes = require('prop-types'),
  ReactNative = require('react-native'),
  module945 = require('./945'),
  module957 = require('./957'),
  module1015 = require('./1015');

function P(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    l = new WeakMap();
  return (P = function (t) {
    return t ? l : n;
  })(t);
}

function O() {
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
  module35.default(I, t);

  var module11 = I,
    PropTypes = O(),
    v = function () {
      var t,
        l = module34.default(module11);

      if (PropTypes) {
        var u = module34.default(this).constructor;
        t = Reflect.construct(l, arguments, u);
      } else t = l.apply(this, arguments);

      return module37.default(this, t);
    };

  function I() {
    module24.default(this, I);
    return v.apply(this, arguments);
  }

  module25.default(I, [
    {
      key: 'disappearCompleted',
      value: function () {
        module32.default(module34.default(I.prototype), 'disappearCompleted', this).call(this);
        if (this.pressItem && this.pressItem.onPress) this.pressItem.onPress();
      },
    },
    {
      key: 'onItemPress',
      value: function (t) {
        if (!(t && t.disabled)) {
          this.pressItem = t;
          this.close(false);
        }
      },
    },
    {
      key: 'onCancelItemPress',
      value: function () {
        var t = this.props.cancelItem;

        if (!(t && t.disabled)) {
          this.pressItem = t;
          this.close(true);
        }
      },
    },
    {
      key: 'renderContent',
      value: function () {
        for (
          var t = this,
            n = this.props,
            l = n.items,
            u = n.cancelItem,
            s = [],
            f = function (n) {
              var u = l[n];
              s.push(
                React.default.createElement(t.constructor.Item, {
                  key: 'item' + n,
                  title: u.title,
                  topSeparator: 0 === n ? 'none' : 'full',
                  disabled: u.disabled,
                  onPress: function () {
                    return t.onItemPress(u);
                  },
                })
              );
            },
            y = 0;
          l && y < l.length;
          ++y
        )
          f(y);

        if (u)
          s.push(
            React.default.createElement(this.constructor.Item, {
              key: 'cancelItem',
              type: 'cancel',
              title: u.title,
              topSeparator: 'full',
              disabled: u.disabled,
              onPress: function () {
                return t.onCancelItemPress();
              },
            })
          );
        s.push(
          React.default.createElement(ReactNative.View, {
            style: {
              backgroundColor: u ? module945.default.asCancelItemColor : module945.default.asItemColor,
              height: module945.default.screenInset.bottom,
            },
            key: 'bottomSpace',
          })
        );
        return module32.default(module34.default(I.prototype), 'renderContent', this).call(this, s);
      },
    },
  ]);
  return I;
})(module957.default.PullView);

exports.default = k;
k.propTypes = module11.default({}, module957.default.PullView.propTypes, {
  items: PropTypes.default.arrayOf(
    PropTypes.default.shape({
      title: PropTypes.default.oneOfType([PropTypes.default.element, PropTypes.default.string, PropTypes.default.number]).isRequired,
      onPress: PropTypes.default.func,
      disabled: PropTypes.default.bool,
    })
  ),
  cancelItem: PropTypes.default.shape({
    title: PropTypes.default.oneOfType([PropTypes.default.element, PropTypes.default.string, PropTypes.default.number]).isRequired,
    onPress: PropTypes.default.func,
    disabled: PropTypes.default.bool,
  }),
});
k.Item = module1015.default;
