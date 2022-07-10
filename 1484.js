var module403 = require('./403'),
  module24 = require('./24'),
  module25 = require('./25'),
  module39 = require('./39'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  React = require('react'),
  ReactNative = require('react-native'),
  module588 = require('./588'),
  module1305 = require('./1305');

function w() {
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

var module1256 = (function (t) {
  module35.default(C, t);

  var module588 = C,
    module1256 = w(),
    E = function () {
      var t,
        n = module34.default(module588);

      if (module1256) {
        var o = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, o);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function C(t) {
    var n;
    module24.default(this, C);

    (n = E.call(this, t))._Loading = function () {
      return n.state.loaded
        ? null
        : React.default.createElement(
            ReactNative.View,
            {
              style: b.WebViewloading,
            },
            React.default.createElement(ReactNative.ActivityIndicator, {
              size: 'large',
              color: '#4CAF50',
            })
          );
    };

    var l = JSON.parse(JSON.stringify(n.props.route.params));
    console.log(l);
    n.state = {
      title: l ? l.title : null,
      url: l ? l.url : null,
      pdf: null,
      progress: 0,
      loaded: false,
    };
    n.clickMe = n.clickMe.bind(module39.default(n));
    return n;
  }

  module25.default(C, [
    {
      key: 'clickMe',
      value: function () {
        this.setState({
          pdf: false,
        });
      },
    },
    {
      key: 'componentWillUnmount',
      value: function () {
        module403.default.remove('');

        this.setState = function (t, n) {};
      },
    },
    {
      key: 'render',
      value: function () {
        var t = this,
          n = this.state.pdf,
          o =
            "(function () {\n  var height = null;\n  function changeHeight() {\n    if (document.body.scrollHeight != height) {\n      height = document.body.scrollHeight;\n      if (window.postMessage) {\n        window.postMessage(JSON.stringify({\n          type: 'setHeight',\n          data: height,\n        }))\n      }\n    }\n  }\n  setInterval(changeHeight, 100);\n}());";
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
            React.default.createElement(ReactNative.StatusBar, {
              translucent: false,
              hidden: this.state.isNoticeShow,
              backgroundColor: '#fff',
              barStyle: 'dark-content',
            }),
            React.default.createElement(
              ReactNative.View,
              {
                style: b.webTitle,
              },
              React.default.createElement(
                ReactNative.Text,
                {
                  style: b.webTitleTxt,
                },
                this.state.title
              ),
              React.default.createElement(
                ReactNative.TouchableOpacity,
                {
                  style: b.webTitleImg,
                  onPress: function () {
                    t.props.navigation.goBack();
                  },
                },
                React.default.createElement(ReactNative.Image, {
                  source: require('./1256'),
                  resizeMode: 'contain',
                  style: b.webTitleImgUrl,
                })
              )
            ),
            React.default.createElement(
              ReactNative.View,
              {
                style: {
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  overflow: 'hidden',
                },
              },
              n
                ? React.default.createElement(module1305.WebView, {
                    source: {
                      uri: this.state.url,
                      method: 'GET',
                      headers: {
                        'Cache-Control': 'no-cache',
                        'Accept-Language': 'zh-CN',
                        'Content-Location': 'CN',
                        'User-Agent': 'Mozilla/5.0 (Linux; Android 4.1.1; Nexus 7 Build/JRO03D) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.166 Safari/535.19',
                      },
                    },
                    injectedJavaScript: o,
                    onMessage: function (n) {
                      try {
                        var o = JSON.parse(n.nativeEvent.data),
                          l = o.type,
                          s = o.data;
                        if (t.onMessageActions.hasOwnProperty(l)) t.onMessageActions[l](s);
                      } catch (t) {
                        console.log(t);
                      }
                    },
                    allowFileAccess: true,
                    originWhitelist: ['*'],
                    startInLoadingState: true,
                    renderLoading: function () {
                      return t._Loading();
                    },
                    onLoadProgress: function (n) {
                      t.setState({
                        progress: n.nativeEvent.progress,
                      });
                      if (t.state.progress > 0.85)
                        t.setState({
                          loaded: true,
                        });
                    },
                    style: {
                      flex: 1,
                    },
                    onLoad: function (n) {
                      var o = n.nativeEvent;
                      t.url = o.url;
                    },
                    onError: function (t) {
                      var n = t.nativeEvent;
                      console.warn('WebView error: ', n);
                    },
                    onHttpError: function (t) {
                      var n = t.nativeEvent;
                      console.warn('WebView received error status code: ', n.statusCode);
                    },
                  })
                : React.default.createElement(module1305.WebView, {
                    source: {
                      uri: this.state.url,
                      method: 'GET',
                      headers: {
                        'Cache-Control': 'no-cache',
                        'Accept-Language': 'zh-CN',
                        'Content-Location': 'CN',
                        'User-Agent': 'Mozilla/5.0 (Linux; Android 4.1.1; Nexus 7 Build/JRO03D) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.166 Safari/535.19',
                      },
                    },
                    userAgent: 'Mozilla/5.0 (Linux; Android 4.1.1; Nexus 7 Build/JRO03D) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.166 Safari/535.19',
                    injectedJavaScript: o,
                    onMessage: function (n) {
                      try {
                        var o = JSON.parse(n.nativeEvent.data),
                          l = o.type,
                          s = o.data;
                        if (t.onMessageActions.hasOwnProperty(l)) t.onMessageActions[l](s);
                      } catch (t) {
                        console.log(t);
                      }
                    },
                    style: {
                      flex: 1,
                    },
                    startInLoadingState: true,
                    domStorageEnabled: true,
                    javaScriptEnabled: true,
                    renderLoading: function () {
                      return t._Loading();
                    },
                    onLoadProgress: function (n) {
                      t.setState({
                        progress: n.nativeEvent.progress,
                      });
                      if (t.state.progress > 0.85)
                        t.setState({
                          loaded: true,
                        });
                    },
                  })
            )
          )
        );
      },
    },
  ]);
  return C;
})(React.default.Component);

exports.webView = module1256;
var b = ReactNative.StyleSheet.create({
    webTitle: {
      position: 'relative',
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#11243D',
      paddingVertical: module588.default.setSpText(15),
      backgroundColor: '#fff',
    },
    webTitleTxt: {
      fontSize: module588.default.setSpText(16),
    },
    webTitleImg: {
      position: 'absolute',
      left: module588.default.setSpText(10),
      width: module588.default.setSpText(22),
      height: module588.default.setSpText(22),
    },
    webTitleImgUrl: {
      width: '100%',
      height: '100%',
    },
  }),
  E = module1256;
exports.default = E;
