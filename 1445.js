var module1135 = require('./1135'),
  module1096 = require('./1096'),
  module1117 = require('./1117'),
  module403 = require('./403'),
  module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  React = require('react'),
  ReactNative = require('react-native'),
  module588 = require('./588'),
  module1145 = require('./1145'),
  module594 = require('./594');

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

var w = '',
  module1256 = (function (t) {
    module35.default(R, t);

    var module588 = R,
      module1256 = C(),
      L = function () {
        var t,
          l = module34.default(module588);

        if (module1256) {
          var s = module34.default(this).constructor;
          t = Reflect.construct(l, arguments, s);
        } else t = l.apply(this, arguments);

        return module37.default(this, t);
      };

    function R(t) {
      var l;
      module24.default(this, R);
      l = L.call(this, t);
      var s = JSON.parse(JSON.stringify(l.props.route.params));
      l.state = {
        iotId: s.iotId,
        type: s.type,
        suppTitle: null,
        suppDetails: null,
        suppImg: null,
        Val: s.Val,
        Ratio: s.Ratio,
        title: s.title,
      };
      return l;
    }

    module25.default(R, [
      {
        key: 'componentDidMount',
        value: function () {
          this.suppData();
        },
      },
      {
        key: 'componentWillUnmount',
        value: function () {
          module403.default.remove(w);

          this.setState = function (t, l) {};
        },
      },
      {
        key: 'suppData',
        value: function () {
          var t = '',
            l = '',
            s = '';

          switch (Number(this.state.type)) {
            case 0:
              t = module594.default.t('filter');
              s = require('./1446');
              l = module594.default.t('filterDetails');
              break;

            case 2:
              t = module594.default.t('sideBrush');
              s = require('./1447');
              l = module594.default.t('sideBrushDetails');
              break;

            case 1:
              t = module594.default.t('mainBrush');
              s = require('./1448');
              l = module594.default.t('mainBrushDetails');
          }

          this.setState({
            suppTitle: t,
            suppDetails: l,
            suppImg: s,
          });
        },
      },
      {
        key: 'isReplace',
        value: function () {
          var t = this;
          module1117.default.alert(module594.default.t('whetherToReset'), module594.default.t('whetherToUpdateAccessories'), [
            {
              text: module594.default.t('cancel'),
              style: 'cancel',
            },
            {
              text: module594.default.t('btnConfirm'),
              onPress: function () {
                w = module1096.default.loading();
                module1145.default.resetLoss(t.state.iotId, t.state.type).then(function (l) {
                  module403.default.remove(w);

                  if (200 == l.data.code) {
                    module1096.default.info(t.state.suppTitle + module594.default.t('resetSuccessfully'), 1, undefined, false);
                    t.setState({
                      Val: 200,
                      Ratio: 100,
                    });
                    setTimeout(function () {
                      ReactNative.DeviceEventEmitter.emit('getProper');
                    }, 1500);
                  } else module1096.default.info(t.state.suppTitle + module594.default.t('resetFailed'), 1, undefined, false);
                });
              },
            },
          ]);
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
                  style: E.webTitle,
                },
                React.default.createElement(
                  ReactNative.Text,
                  {
                    style: E.webTitleTxt,
                  },
                  this.state.title
                ),
                React.default.createElement(
                  ReactNative.TouchableOpacity,
                  {
                    style: E.webTitleImg,
                    onPress: function () {
                      t.props.navigation.goBack();
                    },
                  },
                  React.default.createElement(ReactNative.Image, {
                    source: require('./1256'),
                    resizeMode: 'contain',
                    style: E.webTitleImgUrl,
                  })
                )
              ),
              React.default.createElement(
                ReactNative.View,
                {
                  style: E.suppTopImg,
                },
                React.default.createElement(ReactNative.Image, {
                  source: this.state.suppImg,
                  resizeMode: 'contain',
                  style: E.suppTopImgUrl,
                })
              ),
              React.default.createElement(
                ReactNative.View,
                {
                  style: E.suppLiContent,
                },
                React.default.createElement(
                  ReactNative.View,
                  {
                    style: E.suppLiContentTop,
                  },
                  React.default.createElement(
                    ReactNative.View,
                    {
                      style: E.suppLiContentTopL,
                    },
                    React.default.createElement(
                      ReactNative.Text,
                      {
                        style: E.suppLiContentTopTitle,
                      },
                      ' ',
                      this.state.suppTitle,
                      ' '
                    ),
                    React.default.createElement(
                      ReactNative.Text,
                      {
                        style: E.suppLiContentTopDetail,
                      },
                      module594.default.t('expectedRemaining').replace(/\%/g, this.state.Val)
                    )
                  ),
                  React.default.createElement(
                    ReactNative.View,
                    {
                      style: E.suppLiContentTopR,
                    },
                    React.default.createElement(
                      ReactNative.Text,
                      {
                        style: [E.suppLiContentTopRNum, this.state.Ratio <= 10 ? E.suppliesSLiRigheActive : ''],
                      },
                      ' ',
                      this.state.Ratio,
                      ' '
                    )
                  ),
                  React.default.createElement(
                    ReactNative.View,
                    {
                      style: E.suppLiContentTopR,
                    },
                    React.default.createElement(
                      ReactNative.Text,
                      {
                        style: [E.suppLiContentTopRNum],
                      },
                      '% '
                    )
                  )
                ),
                React.default.createElement(
                  ReactNative.View,
                  {
                    style: E.suppLiDetails,
                  },
                  React.default.createElement(
                    ReactNative.Text,
                    {
                      style: E.suppLiDetailsContent,
                    },
                    this.state.suppDetails
                  )
                ),
                React.default.createElement(
                  ReactNative.View,
                  {
                    style: E.suppliesBtnBox,
                  },
                  React.default.createElement(
                    module1135.default,
                    {
                      type: 'ghost',
                      size: 'small',
                      style: [E.suppliesBtn, E.suppliesBtnBottm],
                      onPress: function () {
                        t.isReplace();
                      },
                    },
                    module594.default.t('haveReplaced')
                  )
                )
              )
            )
          );
        },
      },
    ]);
    return R;
  })(React.default.Component);

exports.webView = module1256;
var E = ReactNative.StyleSheet.create({
    suppliesSLiRigheActive: {
      color: '#E95B55',
    },
    suppliesBtnBox: {
      marginTop: module588.default.setSpText(28),
    },
    suppliesBtnTop: {
      borderWidth: 0,
    },
    suppliesBtnBottm: {
      borderWidth: module588.default.setSpText(2),
    },
    suppliesBtn: {
      height: module588.default.setSpText(40),
      marginTop: module588.default.setSpText(20),
      backgroundColor: 'rgba(10, 114, 250, 0.08)',
      color: '#0A72FA',
      borderRadius: module588.default.setSpText(16),
      fontSize: module588.default.setSpText(16),
    },
    suppLiDetails: {
      paddingTop: module588.default.setSpText(10),
    },
    suppLiDetailsContent: {
      color: '#213B5C',
      fontSize: module588.default.setSpText(14),
      justifyContent: 'flex-end',
    },
    suppLiContentTopL: {
      flex: 2,
    },
    suppLiContentTopTitle: {
      color: '#213B5C',
      fontSize: module588.default.setSpText(14),
    },
    suppLiContentTopDetail: {
      color: '#658DC2',
      fontSize: module588.default.setSpText(14),
      paddingTop: module588.default.setSpText(8),
    },
    suppLiContentTopR: {
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
    },
    suppLiContentTopRNum: {
      color: '#0A72FA',
      fontSize: module588.default.setSpText(28),
    },
    suppLiContentTop: {
      flexDirection: 'row',
      paddingVertical: module588.default.setSpText(10),
      borderBottomColor: '#E1E7F5',
      borderBottomWidth: module588.default.setSpText(1),
    },
    suppLiContent: {
      paddingHorizontal: module588.default.setSpText(24),
    },
    suppTopImg: {
      paddingTop: module588.default.setSpText(20),
    },
    suppTopImgUrl: {
      width: '100%',
      height: module588.default.setSpText(241),
    },
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
  L = module1256;
exports.default = L;
