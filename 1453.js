var module1135 = require('./1135'),
  module1096 = require('./1096'),
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

function x() {
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

var C = '',
  module1165 = (function (t) {
    module35.default(L, t);

    var module588 = L,
      module1165 = x(),
      w = function () {
        var t,
          o = module34.default(module588);

        if (module1165) {
          var l = module34.default(this).constructor;
          t = Reflect.construct(o, arguments, l);
        } else t = o.apply(this, arguments);

        return module37.default(this, t);
      };

    function L(t) {
      var o;
      module24.default(this, L);
      o = w.call(this, t);
      var l = JSON.parse(JSON.stringify(o.props.route.params));
      o.state = {
        dustCollectionLi: [
          {
            name: module594.default.t('smallApartment'),
            nameTxt: module594.default.t('cleanThreeSet'),
            nameTxtOld: module594.default.t('cleanThreeSetOld'),
            isimg: false,
            typeId: 3,
          },
          {
            name: module594.default.t('mediumApartment'),
            nameTxt: module594.default.t('cleanTwoSet'),
            nameTxtOld: module594.default.t('cleanTwoSetOld'),
            isimg: false,
            typeId: 2,
          },
          {
            name: module594.default.t('bigHouse'),
            nameTxt: module594.default.t('cleanOneSet'),
            nameTxtOld: module594.default.t('cleanOneSetOld'),
            isimg: false,
            typeId: 1,
          },
          {
            name: '',
            nameTxt: module594.default.t('neverCollectDust'),
            nameTxtOld: module594.default.t('neverCollectDust'),
            isimg: false,
            typeId: 0,
          },
        ],
        iotId: l.iotId,
        productId: l.productId,
        dustCollectionLiIndex: l.dustFreq ? l.dustFreq : null,
        dustCollectionLiNo: require('./1325'),
        dustCollectionLiActive: require('./1165'),
        dusMode: '',
        workStationType: '',
      };
      o.getProperties();
      return o;
    }

    module25.default(L, [
      {
        key: 'componentDidMount',
        value: function () {
          var t = this;
          this.dustFreq = ReactNative.DeviceEventEmitter.addListener('dustFreq', function (o) {
            t.setState({
              dustCollectionLiIndex: o,
            });
            module403.default.remove(C);
          });
          this.dusMode = ReactNative.DeviceEventEmitter.addListener('dusMode', function (o) {
            t.setState({
              dusMode: o,
            });
          });
          this.workStationType = ReactNative.DeviceEventEmitter.addListener('workStationType ', function (o) {
            t.setState({
              workStationType: o,
            });
          });
        },
      },
      {
        key: 'componentWillUnmount',
        value: function () {
          if (this.dustFreq) this.dustFreq.emitter.removeAllListeners('dustFreq');
          if (this.dusMode) this.dusMode.emitter.removeAllListeners('dusMode');
          if (this.workStationType) this.workStationType.emitter.removeAllListeners('workStationType');
          module403.default.remove(C);

          this.setState = function (t, o) {};
        },
      },
      {
        key: 'getProperties',
        value: function () {
          var t = this;
          module1145.default.getProperties(this.state.iotId).then(function (o) {
            if (200 == o.code) {
              var l = o.data;
              t.setState({
                dustCollectionLiIndex: l.dustFreq,
                dusMode: 'charge' == l.mode ? 3 : 0,
                workStationType: l.workstationType,
              });
            }
          });
        },
      },
      {
        key: 'dustCollectionIndex',
        value: function (t, o) {
          if (o > 2 && 'a1iQ12ffASR' == this.state.productId) {
            if (this.state.dustCollectionLiIndex == t) t = 1;
            C = module1096.default.loading('', 0);
            module1145.default.setDustFreq(this.state.iotId, t).then(function (t) {
              if (!(200 == t.data.code)) {
                module1096.default.info(t.data.message, 1, undefined, false);
                module403.default.remove(C);
              }
            });
          } else if (t != this.state.dustCollectionLiIndex) {
            C = module1096.default.loading('', 0);
            module1145.default.setDustFreq(this.state.iotId, t).then(function (t) {
              if (!(200 == t.data.code)) {
                module1096.default.info(t.data.message, 1, undefined, false);
                module403.default.remove(C);
              }
            });
          }
        },
      },
      {
        key: 'startDust',
        value: function () {
          return 3 == this.state.dusMode && 102 == this.state.workStationType && void module1145.default.startDust(this.state.iotId);
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
                },
              },
              React.default.createElement(
                ReactNative.Text,
                {
                  style: k.dustTest,
                },
                module594.default.t('takeEffect')
              ),
              this.state.dustCollectionLi.map(function (o, l) {
                return l <= 2 && 'a1iQ12ffASR' == t.state.productId
                  ? null
                  : React.default.createElement(
                      ReactNative.TouchableOpacity,
                      {
                        key: l,
                        style: k.dustCollection,
                        onPress: function () {
                          t.dustCollectionIndex(o.typeId, l);
                        },
                      },
                      React.default.createElement(
                        ReactNative.View,
                        {
                          style: k.dustCollectionLi,
                        },
                        o.name
                          ? React.default.createElement(
                              ReactNative.Text,
                              {
                                style: k.topTitle,
                              },
                              o.name
                            )
                          : null,
                        React.default.createElement(
                          ReactNative.Text,
                          {
                            style: k.topTitle_f,
                          },
                          ' ',
                          'a1Wi9Hfe7VT' === t.state.productId || ('en' != module594.default.locale && 'zh' != module594.default.locale && 'zh-TW' != module594.default.locale)
                            ? o.nameTxt
                            : o.nameTxtOld,
                          ' '
                        )
                      ),
                      React.default.createElement(ReactNative.Image, {
                        source: t.state.dustCollectionLiIndex == o.typeId ? t.state.dustCollectionLiActive : t.state.dustCollectionLiNo,
                        style: k.dustCollectionIcon,
                        resizeMode: 'contain',
                      })
                    );
              }),
              React.default.createElement(
                ReactNative.View,
                {
                  style: k.suppliesBtnBox,
                },
                React.default.createElement(
                  module1135.default,
                  {
                    type: 'primary',
                    size: 'small',
                    disabled: (3 != this.state.dusMode && 14 != this.state.dusMode) || 102 != this.state.workStationType,
                    style: [k.suppliesBtn, k.suppliesBtnActive],
                    onPress: function () {
                      t.startDust();
                    },
                  },
                  module594.default.t('collectDustImmediately')
                )
              )
            )
          );
        },
      },
    ]);
    return L;
  })(React.default.Component);

exports.dustCollection = module1165;
var k = ReactNative.StyleSheet.create({
    dustTest: {
      color: '#213B5C',
      textAlign: 'center',
      fontSize: module588.default.setSpText(14),
      paddingTop: module588.default.setSpText(20),
      paddingBottom: module588.default.setSpText(10),
    },
    suppliesBtnBox: {
      paddingHorizontal: module588.default.setSpText(20),
      position: 'absolute',
      bottom: module588.default.setSpText(20),
      width: '100%',
    },
    suppliesBtn: {
      height: module588.default.setSpText(48),
      borderRadius: module588.default.setSpText(16),
      borderWidth: 0,
      backgroundColor: 'rgba(10, 114, 250, 0.4)',
    },
    suppliesBtnActive: {
      backgroundColor: '#0A72FA',
    },
    dustCollection: {
      backgroundColor: '#fff',
      paddingHorizontal: module588.default.setSpText(20),
      paddingVertical: module588.default.setSpText(10),
      flexDirection: 'row',
      marginTop: module588.default.setSpText(10),
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
    },
    topTitle_f: {
      color: '#213B5C',
      fontSize: module588.default.setSpText(14),
    },
    topTitle: {
      color: '#213B5C',
      fontSize: module588.default.setSpText(12),
      marginBottom: module588.default.setSpText(3),
    },
    dustCollectionLi: {
      flex: 1,
    },
    dustCollectionIcon: {
      width: module588.default.setSpText(22),
      height: module588.default.setSpText(22),
    },
  }),
  w = module1165;
exports.default = w;
