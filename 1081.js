var module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  React = require('react'),
  ReactNative = require('react-native'),
  module1082 = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var o = I(n);
    if (o && o.has(t)) return o.get(t);
    var u = {},
      f = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var l in t)
      if ('default' !== l && Object.prototype.hasOwnProperty.call(t, l)) {
        var c = f ? Object.getOwnPropertyDescriptor(t, l) : null;
        if (c && (c.get || c.set)) Object.defineProperty(u, l, c);
        else u[l] = t[l];
      }

    u.default = t;
    if (o) o.set(t, u);
    return u;
  })(require('./1082')),
  module1094 = require('./1094'),
  module594 = require('./594'),
  module1095 = require('./1095'),
  module1113 = require('./1113');

require('./606');

function I(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (I = function (t) {
    return t ? o : n;
  })(t);
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

var O = (function (t) {
  module35.default(L, t);

  var I = L,
    O = C(),
    k = function () {
      var t,
        n = module34.default(I);

      if (O) {
        var o = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, o);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function L(t) {
    var o;
    module24.default(this, L);
    (o = k.call(this, t)).state = {
      isHead: false,
      deviceInformation: module594.default.t('deviceMessage'),
      shareInformation: module594.default.t('shareInformation'),
    };
    return o;
  }

  module25.default(L, [
    {
      key: 'componentDidMount',
      value: function () {
        var t = this;
        this.onChangeLanguageUI = ReactNative.DeviceEventEmitter.addListener('onChangeLanguageUI', function (n) {
          setTimeout(function () {
            t.storeChange();
          }, 10);
        });
      },
    },
    {
      key: 'componentWillUnmount',
      value: function () {
        if (this.onChangeLanguageUI) this.onChangeLanguageUI.emitter.removeAllListeners('onChangeLanguageUI');
      },
    },
    {
      key: 'storeChange',
      value: function () {
        this.setState({
          deviceInformation: module594.default.t('deviceMessage'),
          shareInformation: module594.default.t('shareInformation'),
        });
      },
    },
    {
      key: 'render',
      value: function () {
        return React.default.createElement(
          ReactNative.SafeAreaView,
          {
            style: {
              flex: 1,
              backgroundColor: '#F7F9FC',
              position: 'relative',
            },
          },
          React.default.createElement(
            module1082.default,
            {
              locked: true,
              initialPage: 0,
              renderTabBar: function () {
                return React.default.createElement(module1094.default, null);
              },
            },
            React.default.createElement(module1095.default, {
              tabLabel: this.state.deviceInformation,
            }),
            React.default.createElement(module1113.default, {
              tabLabel: this.state.shareInformation,
            })
          )
        );
      },
    },
  ]);
  return L;
})(React.default.Component);

exports.newData = O;
var k = O;
exports.default = k;
