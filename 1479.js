var module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  React = require('react'),
  ReactNative = require('react-native'),
  module588 = require('./588'),
  module594 = x(require('./594')),
  module596 = x(require('./596'));

function h(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    u = new WeakMap();
  return (h = function (t) {
    return t ? u : n;
  })(t);
}

function x(t, n) {
  if (!n && t && t.__esModule) return t;
  if (null === t || ('object' != typeof t && 'function' != typeof t))
    return {
      default: t,
    };
  var u = h(n);
  if (u && u.has(t)) return u.get(t);
  var l = {},
    o = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var f in t)
    if ('default' !== f && Object.prototype.hasOwnProperty.call(t, f)) {
      var c = o ? Object.getOwnPropertyDescriptor(t, f) : null;
      if (c && (c.get || c.set)) Object.defineProperty(l, f, c);
      else l[f] = t[f];
    }

  l.default = t;
  if (u) u.set(t, l);
  return l;
}

function b() {
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

var module1230 = (function (t) {
  module35.default(module1296, t);

  var module588 = module1296,
    h = b(),
    x = function () {
      var t,
        n = module34.default(module588);

      if (h) {
        var u = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, u);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function module1296(t) {
    var u;
    module24.default(this, module1296);
    u = x.call(this, t);
    module596.getCountry();
    if ('CN' == module594.systemLanguage.countryCode)
      u.state = {
        languageLi: [
          {
            name: module594.default.t('userAgreement'),
            id: 0,
          },
        ],
      };
    else
      u.state = {
        languageLi: [
          {
            name: module594.default.t('userAgreement'),
            id: 0,
          },
          {
            name: module594.default.t('accessLd'),
            id: 1,
          },
        ],
      };
    return u;
  }

  module25.default(module1296, [
    {
      key: 'languageLiData',
      value: function (t) {
        switch (t) {
          case 0:
            this.props.navigation.navigate('userAgreement', {
              title: '',
              index: 1,
              url: '',
            });
            break;

          case 1:
            this.props.navigation.navigate('webView', {
              title: module594.default.t('ldTitle'),
              url: module594.default.t('neabotCom'),
            });
        }
      },
    },
    {
      key: 'render',
      value: function () {
        var t = this;
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
            ReactNative.View,
            {
              style: T.aboutLogo,
            },
            React.default.createElement(ReactNative.Image, {
              source: require('./1296'),
              style: T.aboutLogoImg,
            })
          ),
          React.default.createElement(
            ReactNative.View,
            {
              style: {
                flex: 1,
              },
            },
            this.state.languageLi.map(function (n, u) {
              return React.default.createElement(
                ReactNative.TouchableOpacity,
                {
                  style: T.languageLi,
                  key: u,
                  onPress: function () {
                    t.languageLiData(u);
                  },
                },
                React.default.createElement(
                  ReactNative.Text,
                  {
                    style: T.languageLiTxt,
                  },
                  n.name
                ),
                React.default.createElement(ReactNative.Image, {
                  source: require('./1230'),
                  style: T.languageLiIcon,
                })
              );
            })
          )
        );
      },
    },
  ]);
  return module1296;
})(React.default.Component);

exports.language = module1230;
var T = ReactNative.StyleSheet.create({
    aboutLogo: {
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: module588.default.setSpText(20),
    },
    aboutLogoImg: {
      width: module588.default.setSpText(96),
      height: module588.default.setSpText(96),
    },
    languageLi: {
      backgroundColor: '#FFF',
      paddingHorizontal: module588.default.setSpText(20),
      flexDirection: 'row',
      marginTop: module588.default.setSpText(10),
      paddingVertical: module588.default.setSpText(15),
    },
    languageLiIcon: {
      width: module588.default.setSpText(22),
      height: module588.default.setSpText(22),
    },
    languageLiTxt: {
      flex: 1,
      fontSize: module588.default.setSpText(14),
      color: '#213B5C',
    },
  }),
  w = module1230;
exports.default = w;
