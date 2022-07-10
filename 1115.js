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
  module1111 = require('./1111'),
  module1110 = require('./1110');

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

var T = [],
  L = '',
  module1112 = (function (t) {
    module35.default(q, t);

    var module588 = q,
      module1112 = x(),
      C = function () {
        var t,
          n = module34.default(module588);

        if (module1112) {
          var o = module34.default(this).constructor;
          t = Reflect.construct(n, arguments, o);
        } else t = n.apply(this, arguments);

        return module37.default(this, t);
      };

    function q(t) {
      var n;
      module24.default(this, q);
      (n = C.call(this, t)).state = {
        mySharedLi: null,
        pageNo: 1,
        loading: false,
      };
      n.getShareNoticeList();
      return n;
    }

    module25.default(q, [
      {
        key: 'componentDidMount',
        value: function () {},
      },
      {
        key: 'componentWillUnmount',
        value: function () {
          module403.default.remove(L);

          this.setState = function (t, n) {};
        },
      },
      {
        key: 'getShareNoticeList',
        value: function () {
          var t = this;
          L = module1096.default.loading();
          module1111.default.getShareNoticeList(this.state.pageNo, 20).then(function (n) {
            module403.default.remove(L);
            t.sendData(n.data.data);
          });
        },
      },
      {
        key: 'sendData',
        value: function (t) {
          for (var n = [], o = 0; o < t.length; o++) 0 == t[o].isReceiver && n.push(t[o]);

          this.formatData(n);
        },
      },
      {
        key: 'formatData',
        value: function (t) {
          t.forEach(function (t, n) {
            var o = new Date();
            o.setTime(Number(t.gmtCreate));
            var l = o.getFullYear(),
              u = o.getMonth() + 1;
            u = u < 10 ? '0' + u : u;
            var s = o.getDate();
            s = s < 10 ? '0' + s : s;
            var f = o.getHours();
            f = f < 10 ? '0' + f : f;
            var c,
              h = o.getMinutes();

            if (
              ((h = h < 10 ? '0' + h : h),
              (t.gmtCreate = f + ':' + h),
              '\u5411\u5171\u4eab\u8bbe\u5907\u8d85\u65f6\uff0c\u8bf7\u91cd\u8bd5' == t.description && console.log('\u63cf\u8ff0\uff1a====>>>' + JSON.stringify(t) + '\n'),
              0 === n)
            ) {
              (c = {}).date = l + '-' + u + '-' + s;
              c.data = [];
              c.data.push(t);
              T.push(c);
            } else if (T[T.length - 1].date === l + '-' + u + '-' + s) T[T.length - 1].data.push(t);
            else {
              (c = {}).date = l + '-' + u + '-' + s;
              c.data = [];
              c.data.push(t);
              T.push(c);
            }
          });
          this.setState({
            mySharedLi: T,
          });
        },
      },
      {
        key: '_renderItem',
        value: function (t) {
          var n = t.item;
          t.index;
          return React.default.createElement(
            ReactNative.View,
            null,
            n.data.map(function (t, o) {
              console.log('');
              return React.default.createElement(
                ReactNative.View,
                {
                  style: k.equipmentLi,
                  key: o,
                },
                React.default.createElement(
                  ReactNative.View,
                  {
                    style: k.equipmentLiBox,
                  },
                  React.default.createElement(ReactNative.Image, {
                    source: require('./1112'),
                    style: k.equipmentLiIcon,
                  }),
                  React.default.createElement(
                    ReactNative.View,
                    {
                      style: k.equipmentLiRight,
                    },
                    React.default.createElement(
                      ReactNative.Text,
                      {
                        style: k.equipmentLiText,
                      },
                      t.deviceName
                    ),
                    React.default.createElement(
                      ReactNative.Text,
                      {
                        style: k.equipmentLiTime,
                      },
                      n.date,
                      ' ',
                      t.gmtCreate
                    ),
                    React.default.createElement(
                      ReactNative.Text,
                      {
                        style: k.equipmentLiTime,
                      },
                      t.description
                    )
                  )
                )
              );
            })
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
              pageNo: this.state.pageNo + 1,
            },
            function () {
              module1110.default(function () {
                t.getShareNoticeList();
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
          this.setState(
            {
              pageNo: 1,
            },
            function () {
              module1110.default(function () {
                t.getShareNoticeList();
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
                style: k.wrap,
                removeClippedSubviews: false,
                data: this.state.mySharedLi,
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
    return q;
  })(React.default.Component);

exports.myShared = module1112;
var k = ReactNative.StyleSheet.create({
    equipmentTimeBox: {
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: module588.default.setSpText(10),
    },
    equipmentTime: {
      height: module588.default.setSpText(20),
      backgroundColor: '#E1E7F5',
      borderRadius: module588.default.setSpText(16),
      paddingHorizontal: module588.default.setSpText(10),
      color: '#658DC2',
      fontSize: module588.default.setSpText(12),
    },
    equipmentLi: {
      paddingHorizontal: module588.default.setSpText(10),
      backgroundColor: '#eee',
    },
    equipmentLiBox: {
      flexDirection: 'row',
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
    },
    equipmentLiIcon: {
      width: module588.default.setSpText(42),
      height: module588.default.setSpText(42),
    },
    equipmentLiRight: {
      flex: 1,
      marginLeft: module588.default.setSpText(10),
      paddingBottom: module588.default.setSpText(10),
      borderBottomWidth: 1,
      borderBottomColor: '#E1E7F5',
      position: 'relative',
    },
    equipmentLiText: {
      color: '#213B5C',
      fontSize: module588.default.setSpText(14),
      marginTop: module588.default.setSpText(10),
    },
    equipmentLiTime: {
      color: '#658DC2',
      fontSize: module588.default.setSpText(12),
      marginTop: module588.default.setSpText(4),
    },
    iconRight: {
      width: module588.default.setSpText(22),
      height: module588.default.setSpText(22),
    },
  }),
  C = module1112;
exports.default = C;
