require('./1107');

var module1096 = require('./1096'),
  module403 = require('./403'),
  module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  React = require('react'),
  ReactNative = require('react-native'),
  module1103 = require('./1103'),
  module588 = require('./588'),
  module1110 = require('./1110'),
  module1111 = require('./1111'),
  module594 = require('./594');

function q() {
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

var w = [],
  E = '',
  module1112 = (function (t) {
    module35.default(b, t);

    var module588 = b,
      module1112 = q(),
      C = function () {
        var t,
          n = module34.default(module588);

        if (module1112) {
          var u = module34.default(this).constructor;
          t = Reflect.construct(n, arguments, u);
        } else t = n.apply(this, arguments);

        return module37.default(this, t);
      };

    function b(t) {
      var n;
      module24.default(this, b);
      (n = C.call(this, t)).state = {
        loading: false,
        equipmentData: null,
        iotId: n.props.iotId ? [n.props.iotId] : null,
        nextToken: 0,
        maxResults: 20,
        newId: 0,
        index: 0,
        type: '',
        messageType: '',
        outArr: [],
        keyArr: [],
      };
      n.queryMsg(0);
      return n;
    }

    module25.default(b, [
      {
        key: 'componentDidMount',
        value: function () {
          var t = this;
          this.isNewData = ReactNative.DeviceEventEmitter.addListener('isNewData', function () {
            t.queryMsg(0);
          });
        },
      },
      {
        key: 'componentWillUnmount',
        value: function () {
          this.isNewData.emitter.removeAllListeners('isNewData');
          w = [];
          module403.default.remove(E);

          this.setState = function (t, n) {};
        },
      },
      {
        key: 'queryMsg',
        value: function () {
          var t = this;
          E = module1096.default.loading();
          console.log('\u8bf7\u6c42\u6570\u636e' + this.state.nextToken, this.state.maxResults, this.state.iotId);
          module1111.default.queryMsg(this.state.nextToken, this.state.maxResults, this.state.iotId).then(function (n) {
            module403.default.remove(E);
            if (200 == n.code) n.data.data ? t.formatData(n.data.data) : n.data.maxResults;
          });
        },
      },
      {
        key: 'formatData',
        value: function (t) {
          t.forEach(function (t, n) {
            var u = new Date();
            u.setTime(Number(t.gmtCreate));
            var l = u.getFullYear(),
              o = u.getMonth() + 1;
            o = o < 10 ? '0' + o : o;
            var s = u.getDate();
            s = s < 10 ? '0' + s : s;
            var f = u.getHours();
            f = f < 10 ? '0' + f : f;
            var c,
              p = u.getMinutes();

            if (((p = p < 10 ? '0' + p : p), (t.gmtCreate = f + ':' + p), 0 === n)) {
              (c = {}).date = l + '-' + o + '-' + s;
              c.data = [];
              c.data.push(t);
              w.push(c);
            } else if (w[w.length - 1].date === l + '-' + o + '-' + s) w[w.length - 1].data.push(t);
            else {
              (c = {}).date = l + '-' + o + '-' + s;
              c.data = [];
              c.data.push(t);
              w.push(c);
            }
          });
          this.deteleObject(w);
        },
      },
      {
        key: 'deteleObject',
        value: function (t) {
          for (var n = [], u = 0; u < t.length; u++)
            if ((0 == u && n.push(t[u]), n.length > 0 && u > 0)) {
              for (var l = 0; l < n.length; l++) n[l].date == t[u].date && (console.log(t[u].date), delete t[u].date);

              n.push(t[u]);
            }

          w = n;
          this.setState({
            equipmentData: w,
          });
        },
      },
      {
        key: 'swipeoutIndex',
        value: function (t, n, u, l) {
          this.setState({
            newId: t,
            type: n,
            messageType: u,
            index: l,
          });
        },
      },
      {
        key: '_renderItem',
        value: function (t) {
          var n = this,
            u = t.item,
            l = [
              {
                text: module594.default.t('deleted'),
                backgroundColor: 'red',
                color: '#fff',
                onPress: function () {
                  module1111.default.removeMessage(n.state.newId.toString(), n.state.type, n.state.messageType).then(function (t) {
                    if (200 == t.code) {
                      w.splice(n.state.index, 1);
                      n.setState(
                        {
                          equipmentData: w,
                        },
                        function () {
                          console.log('===equipmentData===' + JSON.stringify(n.state.equipmentData));
                          setTimeout(function () {
                            n.queryMsg(0);
                          }, 500);
                        }
                      );
                    }
                  });
                },
              },
            ];
          return React.default.createElement(
            ReactNative.View,
            null,
            u.date
              ? React.default.createElement(
                  ReactNative.View,
                  {
                    style: L.equipmentTimeBox,
                  },
                  React.default.createElement(
                    ReactNative.View,
                    {
                      style: L.equipmentTimeLi,
                    },
                    React.default.createElement(
                      ReactNative.Text,
                      {
                        style: L.equipmentTime,
                      },
                      ' ',
                      u.date,
                      ' '
                    )
                  )
                )
              : null,
            u.data.map(function (t, u) {
              return React.default.createElement(
                module1103.default,
                {
                  right: l,
                  autoClose: true,
                  style: L.equipmentContent,
                  key: u,
                  onOpen: function () {
                    n.swipeoutIndex(t.id, t.type, t.messageType, u);
                  },
                },
                React.default.createElement(
                  ReactNative.View,
                  {
                    style: L.equipmentLi,
                  },
                  React.default.createElement(
                    ReactNative.View,
                    {
                      style: L.equipmentLiBox,
                    },
                    React.default.createElement(
                      ReactNative.View,
                      {
                        style: L.equipmentLiLeft,
                      },
                      React.default.createElement(ReactNative.Image, {
                        source: require('./1112'),
                        resizeMode: 'contain',
                        style: L.equipmentLiIcon,
                      })
                    ),
                    React.default.createElement(
                      ReactNative.View,
                      {
                        style: L.equipmentLiRight,
                      },
                      React.default.createElement(
                        ReactNative.Text,
                        {
                          style: L.equipmentLiText,
                        },
                        t.title
                      ),
                      React.default.createElement(
                        ReactNative.Text,
                        {
                          style: L.equipmentLiText,
                        },
                        t.body
                      ),
                      React.default.createElement(
                        ReactNative.Text,
                        {
                          style: L.equipmentLiTime,
                        },
                        t.gmtCreate,
                        ' '
                      )
                    )
                  )
                )
              );
            }),
            u.date
              ? React.default.createElement(ReactNative.View, {
                  style: [L.equipmentTimeBox],
                })
              : null
          );
        },
      },
      {
        key: 'footer',
        value: function () {
          return React.default.createElement(
            ReactNative.View,
            null,
            this.state.loading
              ? React.default.createElement(ReactNative.ActivityIndicator, {
                  size: 'large',
                  color: '#ccc',
                  animating: true,
                })
              : null
          );
        },
      },
      {
        key: 'loadMore',
        value: function () {
          var t = this;
          this.setState({
            loading: true,
          });
          this.setState(
            {
              nextToken: this.state.nextToken + this.state.maxResults,
            },
            function () {
              module1110.default(function () {
                t.queryMsg();
              });
            }
          );
          this.setState({
            loading: false,
          });
        },
      },
      {
        key: 'refresh',
        value: function () {
          var t = this;
          this.setState({
            loading: true,
          });
          w = [];
          this.setState(
            {
              nextToken: 0,
            },
            function () {
              module1110.default(function () {
                t.queryMsg();
              });
            }
          );
          this.setState({
            loading: false,
          });
        },
      },
      {
        key: 'emptyLoad',
        value: function () {},
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
                style: {
                  flex: 1,
                  backgroundColor: '#eee',
                },
              },
              React.default.createElement(ReactNative.FlatList, {
                style: L.wrap,
                removeClippedSubviews: false,
                data: this.state.equipmentData,
                renderItem: this._renderItem.bind(this),
                keyExtractor: function (t, n) {
                  return t + n;
                },
                ListFooterComponent: this.footer.bind(this),
                onEndReachedThreshold: 0.2,
                onEndReached: this.loadMore.bind(this),
                refreshing: this.state.loading,
                onRefresh: this.refresh.bind(this),
              })
            )
          );
        },
      },
    ]);
    return b;
  })(React.default.Component);

exports.equipmentNews = module1112;
var L = ReactNative.StyleSheet.create({
    wrap: {
      paddingBottom: module588.default.setSpText(30),
    },
    equipmentTimeBox: {
      height: module588.default.setSpText(20),
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: module588.default.setSpText(10),
    },
    equipmentTimeLi: {
      height: module588.default.setSpText(20),
      backgroundColor: '#E1E7F5',
      borderRadius: module588.default.setSpText(16),
      paddingHorizontal: module588.default.setSpText(10),
      justifyContent: 'center',
    },
    equipmentTime: {
      includeFontPadding: false,
      textAlignVertical: 'center',
      backgroundColor: '#E1E7F5',
      alignItems: 'center',
      borderRadius: module588.default.setSpText(16),
      paddingHorizontal: module588.default.setSpText(10),
      color: '#658DC2',
      fontSize: module588.default.setSpText(12),
    },
    equipmentContent: {
      marginTop: module588.default.setSpText(11),
    },
    equipmentLi: {
      paddingHorizontal: module588.default.setSpText(10),
      backgroundColor: '#eee',
    },
    equipmentLiBox: {
      backgroundColor: '#fff',
      flexDirection: 'row',
      borderRadius: module588.default.setSpText(8),
    },
    equipmentLiLeft: {
      width: module588.default.setSpText(22),
    },
    equipmentLiIcon: {
      width: module588.default.setSpText(22),
      height: module588.default.setSpText(22),
      marginTop: module588.default.setSpText(26),
      marginLeft: module588.default.setSpText(16),
    },
    equipmentLiRight: {
      flex: 1,
      marginLeft: module588.default.setSpText(30),
      paddingTop: module588.default.setSpText(16),
    },
    equipmentLiText: {
      color: '#213B5C',
      fontSize: module588.default.setSpText(14),
    },
    equipmentLiTime: {
      color: '#658DC2',
      fontSize: module588.default.setSpText(12),
      marginTop: module588.default.setSpText(4),
      marginBottom: module588.default.setSpText(16),
    },
  }),
  C = module1112;
exports.default = C;
