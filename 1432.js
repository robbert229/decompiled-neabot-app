var module1096 = require('./1096'),
  module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  React = require('react'),
  ReactNative = require('react-native'),
  module1111 = require('./1111'),
  module588 = require('./588'),
  module594 = require('./594');

function y() {
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

var module1434 = (function (t) {
  module35.default(I, t);

  var module1434 = I,
    C = y(),
    q = function () {
      var t,
        o = module34.default(module1434);

      if (C) {
        var n = module34.default(this).constructor;
        t = Reflect.construct(o, arguments, n);
      } else t = o.apply(this, arguments);

      return module37.default(this, t);
    };

  function I(t) {
    var o;
    module24.default(this, I);
    o = q.call(this, t);
    var l = JSON.stringify(o.props.route.params);
    o.state = {
      iotId: JSON.parse(l).iotId,
      deviceName: JSON.parse(l).deviceName,
      codeImg: null,
    };
    o.generateShareQrCode();
    return o;
  }

  module25.default(I, [
    {
      key: 'componentWillUnmount',
      value: function () {
        ReactNative.DeviceEventEmitter.emit('isShareIt');

        this.setState = function (t, o) {};
      },
    },
    {
      key: 'generateShareQrCode',
      value: function () {
        var t = this;
        module1111.default.generateShareQrCode(this.state.iotId).then(function (n) {
          if (200 == n.code) {
            var l = n.data;
            t.createBitmapStrCode(l.qrKey);
          } else module1096.default.info(n.localMsg ? n.localMsg : n.message, 1, undefined, false);
        });
      },
    },
    {
      key: 'createBitmapStrCode',
      value: function (t) {
        var o = this;
        module1111.default.createBitmapStr(t).then(function (t) {
          o.setState({
            codeImg: 'data:image/png;base64,' + t.data.bitmapStr,
          });
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
            ReactNative.View,
            {
              style: v.qrTop,
            },
            React.default.createElement(
              ReactNative.View,
              {
                style: v.qrTopTitle,
              },
              React.default.createElement(
                ReactNative.Text,
                {
                  style: v.qrTopTxt,
                },
                React.default.createElement(ReactNative.Image, {
                  source: require('./1296'),
                  resizeMode: 'contain',
                  style: v.qrTopImg,
                }),
                module594.default.t('welcomeLDproduct')
              )
            ),
            React.default.createElement(
              ReactNative.View,
              {
                style: v.qrCodeBox,
              },
              React.default.createElement(
                ReactNative.View,
                {
                  style: v.qrCodeMs,
                },
                React.default.createElement(ReactNative.Image, {
                  source: {
                    uri: this.state.codeImg,
                  },
                  style: {
                    width: module588.default.setSpText(243),
                    height: module588.default.setSpText(243),
                  },
                })
              ),
              React.default.createElement(
                ReactNative.ImageBackground,
                {
                  source: require('./1433'),
                  resizeMode: 'contain',
                  style: v.qrCodeNameBox,
                },
                React.default.createElement(
                  ReactNative.Text,
                  {
                    style: v.qrCodeName,
                  },
                  module594.default.t('ldTitle'),
                  this.state.deviceName,
                  module594.default.t('QRCode')
                )
              )
            )
          ),
          React.default.createElement(ReactNative.Image, {
            source: require('./1434'),
            resizeMode: 'contain',
            style: v.qrBottomBack,
          })
        );
      },
    },
  ]);
  return I;
})(React.default.Component);

exports.qrCode = module1434;
var v = ReactNative.StyleSheet.create({
    qrCodeName: {
      color: '#fff',
      paddingHorizontal: module588.default.setSpText(15),
      fontSize: module588.default.setSpText(16),
    },
    qrCodeNameBox: {
      width: module588.default.setSpText(264.5),
      height: module588.default.setSpText(69.45),
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
    },
    qrCodeMs: {
      paddingHorizontal: module588.default.setSpText(10),
      paddingTop: module588.default.setSpText(10),
      backgroundColor: '#0A72FA',
    },
    qrCodeBox: {
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: module588.default.setSpText(30),
    },
    qrTop: {
      marginTop: module588.default.setSpText(53),
    },
    qrTopTitle: {
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
    },
    qrTopTxt: {
      color: '#BCCCE0',
      fontSize: module588.default.setSpText(20),
    },
    qrTopImg: {
      width: module588.default.setSpText(26),
      height: module588.default.setSpText(26),
    },
    qrBottomBack: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%',
      height: module588.default.setSpText(241),
    },
  }),
  C = module1434;
exports.default = C;
