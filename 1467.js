require('./596');

var module1096 = require('./1096'),
  module403 = require('./403'),
  module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  React = require('react'),
  ReactNative = require('react-native'),
  module588 = require('./588'),
  module1146 = require('./1146'),
  module593 = require('./593'),
  module594 = require('./594'),
  module920 = require('./920');

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

var B = '',
  module1434 = (function (t) {
    module35.default(w, t);

    var module588 = w,
      module1434 = C(),
      k = function () {
        var t,
          n = module34.default(module588);

        if (module1434) {
          var o = module34.default(this).constructor;
          t = Reflect.construct(n, arguments, o);
        } else t = n.apply(this, arguments);

        return module37.default(this, t);
      };

    function w(t) {
      var n;
      module24.default(this, w);
      var o = (n = k.call(this, t)).props.route.params;
      n.state = {
        guideLi: [],
        nickname: o.nickname,
        productKey: o.productId,
      };

      if (0 == o.guideType) {
        console.log('================ \u4ece\u66f4\u591a\u8fdb\u5165 = ' + JSON.stringify(o.newGuideData));
        setTimeout(function () {
          n.getCommentGuideVersion();
        }, 100);
      } else {
        console.log('================ \u4ece\u6211\u7684\u8fdb\u5165 = ' + JSON.stringify(o.newGuideData));
        setTimeout(function () {
          n.countryType(o.newGuideData);
        }, 100);
      }

      return n;
    }

    module25.default(w, [
      {
        key: 'componentWillUnmount',
        value: function () {
          module403.default.remove(B);

          this.setState = function (t, n) {};
        },
      },
      {
        key: 'getCommentGuideVersion',
        value: function () {
          var t = this;
          B = module1096.default.loading('', 0);
          var u = false;
          setTimeout(function () {
            if (!u) module403.default.remove(B);
          }, 1e4);
          var l = this;
          module1146.default.getCommentGuideVersion().then(function (n) {
            console.log('getCommentGuideVersion==' + JSON.stringify(n));
            u = true;
            module403.default.remove(B);
            module593.default.get('maxVersion').then(function (o) {
              console.log('tags:' + JSON.stringify(o));
              if (o && o > n.maxVersion)
                module593.default.get('getGuideData').then(function (n) {
                  t.getGuide(n);
                });
              else {
                l.getProductGuideDetail();
                module593.default.save('maxVersion', n.maxVersion);
              }
            });
          });
        },
      },
      {
        key: 'getProductGuideDetail',
        value: function () {
          var t = [
            {
              productId: 'a1bp8GkMOe2',
              data: [
                {
                  country: 'cn',
                  content: [
                    {
                      title: '\u4ea7\u54c1\u8bf4\u660e',
                      url: 'https://api.genhigh.com/s5c/manual',
                    },
                  ],
                },
                {
                  country: 'en',
                  content: [
                    {
                      title: module594.default.t('P1628584426'),
                      url: 'https://api.genhigh.com/s5c/manual',
                    },
                  ],
                },
              ],
            },
            {
              productId: 'a1iQ12ffASR',
              data: [
                {
                  country: 'cn',
                  content: [
                    {
                      title: '\u4ea7\u54c1\u8bf4\u660e',
                      url: 'https://api.genhigh.com/Q11/manual',
                    },
                  ],
                },
                {
                  country: 'en',
                  content: [
                    {
                      title: module594.default.t('P1628584426'),
                      url: 'https://api.genhigh.com/Q11/manual',
                    },
                  ],
                },
              ],
            },
            {
              productId: 'a1Wi9Hfe7VT',
              data: [
                {
                  country: 'cn',
                  content: [
                    {
                      title: '\u4ea7\u54c1\u8bf4\u660e',
                      url: 'https://api.genhigh.com/N2/manual',
                    },
                  ],
                },
                {
                  country: 'en',
                  content: [
                    {
                      title: module594.default.t('P1628584426'),
                      url: 'https://api.genhigh.com/N2/manual',
                    },
                  ],
                },
              ],
            },
            {
              productId: 'a1XKU4BoqtH',
              data: [
                {
                  country: 'cn',
                  content: [
                    {
                      title: '\u4ea7\u54c1\u8bf4\u660e',
                      url: 'https://api.genhigh.com/N2-lite/manual',
                    },
                  ],
                },
                {
                  country: 'en',
                  content: [
                    {
                      title: module594.default.t('P1628584426'),
                      url: 'https://api.genhigh.com/N2-lite/manual',
                    },
                  ],
                },
              ],
            },
          ];
          this.getGuide(t);
          module593.default.save('getGuideData', t);
        },
      },
      {
        key: 'getGuide',
        value: function (t) {
          var n = this;
          console.log('msgData:' + JSON.stringify(t));
          if (t)
            t.map(function (t, o) {
              if (t.productId == n.state.productKey) n.countryType(t.data);
            });
        },
      },
      {
        key: 'countryType',
        value: function (t) {
          var n = '';

          switch (module594.default.locale) {
            case 'zh':
            case 'Hans':
            case 'Hant':
              n = 'cn';
              break;

            case 'en':
            default:
              n = 'en';
          }

          for (var o = 0; o < t.length; o++)
            if (t[o].country == n) {
              var u = module920.default.cloneDeep(t[o].content);
              u[0].title = module594.default.t('P1628584426');
              this.setState({
                guideLi: u,
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
                style: {
                  flex: 1,
                  backgroundColor: '#F7F9FC',
                  position: 'relative',
                },
              },
              React.default.createElement(
                ReactNative.View,
                {
                  style: V.guideBox,
                },
                React.default.createElement(
                  ReactNative.View,
                  {
                    style: V.guideBoxTop,
                  },
                  React.default.createElement(
                    ReactNative.Text,
                    {
                      style: V.topName,
                    },
                    ' ',
                    this.state.nickname,
                    ' '
                  ),
                  React.default.createElement(ReactNative.Image, {
                    source: require('./1468'),
                    resizeMode: 'contain',
                    style: V.guideBoxTopImg,
                  })
                ),
                React.default.createElement(
                  ReactNative.View,
                  {
                    style: V.guideBoxContent,
                  },
                  this.state.guideLi.map(function (n, o) {
                    console.log('\u5c55\u793a\u6570\u636e:' + JSON.stringify(n));
                    return React.default.createElement(
                      ReactNative.TouchableOpacity,
                      {
                        style: V.guideBoxContentLi,
                        key: o,
                        onPress: function () {
                          t.props.navigation.navigate('webView', {
                            title: n.title,
                            url: n.url,
                          });
                        },
                      },
                      React.default.createElement(
                        ReactNative.Text,
                        {
                          style: V.guideBoxContentLiTitle,
                        },
                        n.title
                      ),
                      React.default.createElement(ReactNative.Image, {
                        source: require('./1230'),
                        resizeMode: 'contain',
                        style: V.guideBoxContentLiImg,
                      })
                    );
                  })
                )
              ),
              React.default.createElement(ReactNative.Image, {
                source: require('./1434'),
                resizeMode: 'contain',
                style: V.guideBottom,
              })
            )
          );
        },
      },
    ]);
    return w;
  })(React.default.Component);

exports.operationGuide = module1434;
var V = ReactNative.StyleSheet.create({
    guideBoxContentLiTitle: {
      fontSize: module588.default.setSpText(14),
      color: '#213B5C',
      flex: 1,
    },
    guideBoxContentLiImg: {
      width: module588.default.setSpText(22),
      height: module588.default.setSpText(22),
    },
    guideBoxContentLi: {
      backgroundColor: '#Fff',
      paddingHorizontal: module588.default.setSpText(20),
      flexDirection: 'row',
      paddingVertical: module588.default.setSpText(20),
      marginTop: module588.default.setSpText(20),
    },
    guideBoxContent: {
      zIndex: 11,
    },
    guideBoxTop: {
      width: module588.default.setSpText(155),
      height: module588.default.setSpText(155),
    },
    guideBoxTop: {
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: module588.default.setSpText(20),
      position: 'relative',
    },
    topName: {
      paddingHorizontal: module588.default.setSpText(10),
      paddingVertical: module588.default.setSpText(5),
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      position: 'absolute',
      zIndex: 1,
      borderRadius: module588.default.setSpText(16),
    },
    guideBottom: {
      position: 'absolute',
      width: '100%',
      height: module588.default.setSpText(243),
      bottom: 0,
      left: 0,
    },
  }),
  k = module1434;
exports.default = k;
