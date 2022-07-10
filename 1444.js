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
  module1248 = require('./1248'),
  module1145 = require('./1145'),
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

var v = '',
  module1434 = (function (t) {
    module35.default(E, t);

    var module588 = E,
      module1434 = y(),
      V = function () {
        var t,
          l = module34.default(module588);

        if (module1434) {
          var s = module34.default(this).constructor;
          t = Reflect.construct(l, arguments, s);
        } else t = l.apply(this, arguments);

        return module37.default(this, t);
      };

    function E(t) {
      var l;
      module24.default(this, E);
      l = V.call(this, t);
      var s = JSON.stringify(l.props.route.params);
      l.state = {
        iotId: JSON.parse(s).iotId,
        suppLi: [
          {
            name: module594.default.t('filter'),
            Val: '',
            Ratio: '',
            id: 0,
          },
          {
            name: module594.default.t('sideBrush'),
            Val: '',
            Ratio: '',
            id: 2,
          },
          {
            name: module594.default.t('mainBrush'),
            Val: '',
            Ratio: '',
            id: 1,
          },
        ],
      };
      return l;
    }

    module25.default(E, [
      {
        key: 'componentDidMount',
        value: function () {
          var t = this;
          this.getProperties();
          this.getProper = ReactNative.DeviceEventEmitter.addListener('getProper', function () {
            t.setState({
              suppLi: [
                {
                  name: module594.default.t('filter'),
                  Val: '',
                  Ratio: '',
                  id: 0,
                },
                {
                  name: module594.default.t('sideBrush'),
                  Val: '',
                  Ratio: '',
                  id: 2,
                },
                {
                  name: module594.default.t('mainBrush'),
                  Val: '',
                  Ratio: '',
                  id: 1,
                },
              ],
            });
            setTimeout(function () {
              t.getProperties();
            }, 500);
          });
        },
      },
      {
        key: 'componentWillUnmount',
        value: function () {
          if (this.getProper) this.getProper.emitter.removeAllListeners('getProper');
          module403.default.remove(v);

          this.setState = function (t, l) {};
        },
      },
      {
        key: 'getProperties',
        value: function () {
          var t = this;
          v = module1096.default.loading();
          module1145.default.getProperties(this.state.iotId).then(function (l) {
            if ((module403.default.remove(v), 200 == l.code)) {
              var u = l.data;
              u.mainBrushTime = Math.floor((72e4 - 60 * u.mainBrushTime) / 3600);
              u.sideBrushTime = Math.floor((72e4 - 60 * u.sideBrushTime) / 3600);
              u.filterTime = Math.floor((72e4 - 60 * u.filterTime) / 3600);
              t.state.suppLi[0].Val = u.filterTime;
              t.state.suppLi[1].Val = u.sideBrushTime;
              t.state.suppLi[2].Val = u.mainBrushTime;
              t.state.suppLi[0].Ratio = parseInt((u.filterTime / 200) * 100);
              t.state.suppLi[1].Ratio = parseInt((u.sideBrushTime / 200) * 100);
              t.state.suppLi[2].Ratio = parseInt((u.mainBrushTime / 200) * 100);
              t.setState({
                suppLi: t.state.suppLi,
              });
            }
          });
        },
      },
      {
        key: 'render',
        value: function () {
          var t = this,
            l = this.props.navigation.navigate;
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
                style: B.suppliesBox,
              },
              React.default.createElement(
                ReactNative.View,
                {
                  style: B.suppliesContent,
                },
                React.default.createElement(
                  ReactNative.View,
                  {
                    style: B.suppliesD,
                  },
                  React.default.createElement(module1248.default, {
                    start: {
                      x: 0,
                      y: 0,
                    },
                    end: {
                      x: 0.7,
                      y: 0.8,
                    },
                    colors: ['#0A72FA', '#18ABFD'],
                    style: B.container,
                  })
                ),
                React.default.createElement(
                  ReactNative.View,
                  {
                    style: B.suppliesS,
                  },
                  React.default.createElement(
                    ReactNative.View,
                    {
                      style: B.suppliesSContnet,
                    },
                    this.state.suppLi.map(function (s, u) {
                      return React.default.createElement(
                        ReactNative.TouchableOpacity,
                        {
                          style: B.suppliesSLi,
                          key: u,
                          onPress: function () {
                            var o = '';

                            switch (u) {
                              case 0:
                                o = module594.default.t('filterDetailsTitle');
                                break;

                              case 1:
                                o = module594.default.t('edgeDetails');
                                break;

                              case 2:
                                o = module594.default.t('Maindetails');
                            }

                            l('suppliesLi', {
                              title: o,
                              Val: s.Val,
                              Ratio: s.Ratio,
                              type: s.id,
                              iotId: t.state.iotId,
                            });
                          },
                        },
                        React.default.createElement(
                          ReactNative.View,
                          {
                            style: B.suppliesSLiLeft,
                          },
                          React.default.createElement(
                            ReactNative.Text,
                            {
                              style: B.suppliesSLiLeftTitle,
                            },
                            ' ',
                            s.name,
                            ' '
                          ),
                          React.default.createElement(
                            ReactNative.Text,
                            {
                              style: B.suppliesSLiLeftTxt,
                            },
                            module594.default.t('expectedRemaining').replace(/\%/g, s.Val)
                          )
                        ),
                        React.default.createElement(
                          ReactNative.View,
                          {
                            style: B.suppliesSLiRighe,
                          },
                          React.default.createElement(
                            ReactNative.Text,
                            {
                              style: [B.suppliesSLiRigheTxt, s.Ratio <= 10 ? B.suppliesSLiRigheActive : ''],
                            },
                            s.Ratio,
                            ' '
                          )
                        ),
                        React.default.createElement(
                          ReactNative.View,
                          {
                            style: B.suppliesSLiRighe,
                          },
                          React.default.createElement(
                            ReactNative.Text,
                            {
                              style: [B.suppliesSLiRigheTxt],
                            },
                            '% '
                          )
                        )
                      );
                    })
                  )
                )
              ),
              React.default.createElement(ReactNative.Image, {
                source: require('./1434'),
                resizeMode: 'contain',
                style: B.backIndex,
              })
            )
          );
        },
      },
    ]);
    return E;
  })(React.default.Component);

exports.supplies = module1434;
var B = ReactNative.StyleSheet.create({
    suppliesBox: {
      flex: 1,
      position: 'relative',
    },
    suppliesSLiRigheActive: {
      color: '#E95B55',
    },
    container: {
      height: module588.default.setSpText(256),
      borderRadius: module588.default.setSpText(24),
    },
    suppliesSLi: {
      flexDirection: 'row',
      borderBottomColor: '#E1E7F5',
      borderBottomWidth: module588.default.setSpText(1),
      paddingBottom: module588.default.setSpText(10),
    },
    suppliesSLiRighe: {
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
    },
    suppliesSLiRigheTxt: {
      fontSize: module588.default.setSpText(26),
      color: '#0A72FA',
    },
    suppliesSLiLeft: {
      flex: 1,
    },
    suppliesSLiLeftTxt: {
      fontSize: module588.default.setSpText(14),
      color: '#658DC2',
      marginTop: module588.default.setSpText(8),
    },
    suppliesSLiLeftTitle: {
      color: '#213B5C',
      fontSize: module588.default.setSpText(14),
      marginTop: module588.default.setSpText(10),
    },
    suppliesBtnBox: {
      paddingHorizontal: module588.default.setSpText(40),
      marginTop: module588.default.setSpText(40),
    },
    suppliesBtn: {
      height: module588.default.setSpText(40),
      borderWidth: module588.default.setSpText(2),
      borderColor: '#0A72FA',
      borderRadius: module588.default.setSpText(16),
      backgroundColor: 'rgba(10, 114, 250, 0.08)',
    },
    suppliesS: {
      paddingLeft: module588.default.setSpText(20),
      marginTop: module588.default.setSpText(-232),
    },
    suppliesSContnet: {
      height: module588.default.setSpText(256),
      backgroundColor: 'rgba(255,255,255,.98)',
      borderRadius: module588.default.setSpText(24),
      paddingHorizontal: module588.default.setSpText(20),
      paddingVertical: module588.default.setSpText(10),
    },
    suppliesD: {
      paddingRight: module588.default.setSpText(20),
    },
    suppliesContent: {
      paddingHorizontal: module588.default.setSpText(20),
      marginTop: module588.default.setSpText(20),
    },
    backIndex: {
      position: 'absolute',
      width: '100%',
      height: module588.default.setSpText(242),
      bottom: 0,
      left: 0,
    },
  }),
  V = module1434;
exports.default = V;
