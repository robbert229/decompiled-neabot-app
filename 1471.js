var module1117 = require('./1117'),
  React = (function (t, l) {
    if (!l && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var n = s(l);
    if (n && n.has(t)) return n.get(t);
    var o = {},
      u = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var f in t)
      if ('default' !== f && Object.prototype.hasOwnProperty.call(t, f)) {
        var c = u ? Object.getOwnPropertyDescriptor(t, f) : null;
        if (c && (c.get || c.set)) Object.defineProperty(o, f, c);
        else o[f] = t[f];
      }

    o.default = t;
    if (n) n.set(t, o);
    return o;
  })(require('react')),
  ReactNative = require('react-native'),
  module588 = require('./588'),
  module594 = require('./594'),
  module810 = require('./810');

function s(t) {
  if ('function' != typeof WeakMap) return null;
  var l = new WeakMap(),
    n = new WeakMap();
  return (s = function (t) {
    return t ? n : l;
  })(t);
}

exports.default = function () {
  var t = module594.useTranslation(),
    u = t.t,
    s = t.localeProvider,
    y = t.changeLocale,
    b = [module810.LOCALES.ENGLISH, module810.LOCALES.CHINESE, module810.LOCALES.SYSTEM];
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
        style: {
          flex: 1,
        },
      },
      b.map(function (t, f) {
        switch (t.id) {
          case 1:
            t.label = u('English');
            break;

          case 2:
            t.label = u('simplifiedChinese');
            break;

          default:
            t.label = u('followSystem');
        }

        return React.default.createElement(
          ReactNative.TouchableOpacity,
          {
            style: p.languageLi,
            key: f,
            onPress: function () {
              React = t;
              return void module1117.default.alert(u('Tips'), u('restartAppLanguage'), [
                {
                  text: u('cancel'),
                  style: 'cancel',
                },
                {
                  text: u('btnConfirm'),
                  onPress: function () {
                    y(React);
                  },
                },
              ]);
              var React;
            },
          },
          React.default.createElement(
            ReactNative.Text,
            {
              style: p.languageLiTxt,
            },
            t.label
          ),
          s.id == t.id
            ? React.default.createElement(ReactNative.Image, {
                source: require('./1428'),
                style: p.languageLiIcon,
              })
            : null
        );
      })
    )
  );
};

var p = ReactNative.StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F8',
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
});
