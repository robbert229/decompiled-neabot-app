var module1117 = require('./1117'),
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
  module1111 = require('./1111'),
  module1110 = require('./1110'),
  module594 = require('./594');

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

var E = [],
  k = '',
  L = (function (t) {
    module35.default(D, t);

    var module588 = D,
      L = b(),
      C = function () {
        var t,
          n = module34.default(module588);

        if (L) {
          var o = module34.default(this).constructor;
          t = Reflect.construct(n, arguments, o);
        } else t = n.apply(this, arguments);

        return module37.default(this, t);
      };

    function D(t) {
      var n;
      module24.default(this, D);
      (n = C.call(this, t)).state = {
        myAcceptLi: null,
        pageNo: 1,
        loading: false,
      };
      n.getShareNoticeList();
      return n;
    }

    module25.default(D, [
      {
        key: 'componentDidMount',
        value: function () {},
      },
      {
        key: 'componentWillUnmount',
        value: function () {
          module403.default.remove(k);

          this.setState = function (t, n) {};
        },
      },
      {
        key: 'getShareNoticeList',
        value: function () {
          var t = this;
          k = module1096.default.loading();
          module1111.default.getShareNoticeList(this.state.pageNo, 20).then(function (n) {
            module403.default.remove(k);
            if (200 == n.code) t.sendData(n.data.data);
            else module1096.default.info(n.localMsg ? n.localMsg : n.message ? n.message : '', 1, undefined, false);
          });
        },
      },
      {
        key: 'sendData',
        value: function (t) {
          if (1 == this.state.pageNo) E = [];

          for (var n = [], o = 0; o < t.length; o++) {
            var l;
            if (1 == t[o].isReceiver)
              !(function () {
                var u = t[o];
                l = false;
                E.findIndex(function (t, n, o) {
                  var s = t.data;
                  Object.keys(s).map(function (t) {
                    if ('batchId' == t && s[t] == u.batchId) {
                      l = !0;
                      return (l = !0);
                    }
                  });
                });
                l || n.push(u);
              })();
          }

          this.formatData(n);
        },
      },
      {
        key: 'formatData',
        value: function (t) {
          console.log('\u6211\u63a5\u53d7\u7684 \u5217\u8868\u6570\u636e\u91cd\u7ec4\u524d' + JSON.stringify(t), '=====newData:' + JSON.stringify(E));
          t.forEach(function (t, n) {
            var o = new Date();
            o.setTime(Number(t.gmtCreate));
            var l = o.getFullYear(),
              u = o.getMonth() + 1;
            u = u < 10 ? '0' + u : u;
            var s = o.getDate();
            s = s < 10 ? '0' + s : s;
            var c = o.getHours();
            c = c < 10 ? '0' + c : c;
            var f,
              p = o.getMinutes();

            switch (((p = p < 10 ? '0' + p : p), (t.gmtCreate = c + ':' + p), t.status)) {
              case -1:
                t.typeTxt = module594.default.t('statusAgree');
                break;

              case 0:
                t.typeTxt = module594.default.t('statusApproved');
                break;

              case 1:
                t.typeTxt = module594.default.t('statusRejected');
                break;

              case 2:
                t.typeTxt = module594.default.t('statusCancelled');
                break;

              case 3:
                t.typeTxt = module594.default.t('statusExpired');
                break;

              case 4:
                t.typeTxt = module594.default.t('statusPreempted');
                break;

              case 5:
                t.typeTxt = module594.default.t('statusDeleted');
                break;

              case 6:
                t.typeTxt = module594.default.t('statusUserDel');
                break;

              case 99:
                t.typeTxt = module594.default.t('statusAbnormal');
            }

            (t.description &&
              (t.description =
                '\u60a8\u5df2\u63a5\u53d7\u4e86%&\u7684\u5171\u4eab\u8bbe\u5907' == t.description.replace(t.initiatorAlias, '%&')
                  ? module594.default.t('acceptDeviceDescription').replace(/\%&/g, t.initiatorAlias ? t.initiatorAlias : 'X')
                  : t.description),
            0 === n)
              ? (((f = {}).date = l + '-' + u + '-' + s), (f.data = []), f.data.push(t), E.push(f))
              : E[E.length - 1].date === l + '-' + u + '-' + s
              ? E[E.length - 1].data.push(t)
              : (((f = {}).date = l + '-' + u + '-' + s), (f.data = []), f.data.push(t), E.push(f));
          });
          this.setState({
            myAcceptLi: E,
          });
        },
      },
      {
        key: 'isAgree',
        value: function (t, o) {
          var l = this;
          -1 == t &&
            module1117.default.alert(module594.default.t('isInvitation'), module594.default.t('joinShare'), [
              {
                text: module594.default.t('refuse'),
                style: 'cancel',
                onPress: function () {
                  module1111.default.confirmShare(o, 0).then(function (t) {
                    l.refresh();
                    ReactNative.DeviceEventEmitter.emit('loginIndex');
                  });
                },
              },
              {
                text: module594.default.t('btnConfirm'),
                onPress: function () {
                  module1111.default.confirmShare(o, 1).then(function (t) {
                    l.refresh();
                    ReactNative.DeviceEventEmitter.emit('loginIndex', -1);
                  });
                },
              },
            ]);
        },
      },
      {
        key: '_renderItem',
        value: function (t) {
          var n = this,
            o = t.item;
          t.index;
          return React.default.createElement(
            ReactNative.View,
            null,
            o.data.map(function (t, l) {
              return React.default.createElement(
                ReactNative.View,
                {
                  style: A.equipmentLi,
                  key: l,
                },
                React.default.createElement(
                  ReactNative.View,
                  {
                    style: A.equipmentLiBox,
                  },
                  React.default.createElement(ReactNative.Image, {
                    source: require(d[15]),
                    style: A.equipmentLiIcon,
                  }),
                  React.default.createElement(
                    ReactNative.View,
                    {
                      style: A.equipmentLiRight,
                    },
                    React.default.createElement(
                      ReactNative.Text,
                      {
                        style: A.equipmentLiText,
                      },
                      t.deviceName
                    ),
                    React.default.createElement(
                      ReactNative.Text,
                      {
                        style: A.equipmentLiTime,
                      },
                      o.date,
                      ' ',
                      t.gmtCreate
                    ),
                    React.default.createElement(
                      ReactNative.Text,
                      {
                        style: A.equipmentLiTime,
                      },
                      t.description
                    )
                  ),
                  React.default.createElement(
                    ReactNative.TouchableOpacity,
                    {
                      style: A.myacceptBtn,
                      onPress: function () {
                        n.isAgree(t.status, t.recordId);
                      },
                    },
                    React.default.createElement(
                      ReactNative.Text,
                      {
                        style: [A.myacceptBtnTxt, -1 == t.status ? A.myacceptBtnActive : ''],
                      },
                      '',
                      t.typeTxt,
                      ' '
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
                  animating: !0,
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
            loading: !0,
          });
          this.setState(
            {
              pageNo: this.state.pageNo + 1,
            },
            function () {
              (0, module1110.default)(function () {
                t.getShareNoticeList();
              });
            }
          );
          this.setState({
            loading: !1,
          });
        },
      },
      {
        key: 'refresh',
        value: function () {
          var t = this;
          this.setState({
            loading: !0,
          });
          this.setState(
            {
              pageNo: 1,
            },
            function () {
              (0, module1110.default)(function () {
                t.getShareNoticeList();
              });
            }
          );
          this.setState({
            loading: !1,
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
                style: A.wrap,
                removeClippedSubviews: !1,
                data: this.state.myAcceptLi,
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
    return D;
  })(React.default.Component);

exports.myShared = L;
var A = ReactNative.StyleSheet.create({
    myacceptBtnActive: {
      color: '#0A72FA',
    },
    equipmentContent: {
      marginTop: module588.default.setSpText(11),
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
    myacceptBtn: {
      width: module588.default.setSpText(100),
      height: module588.default.setSpText(44),
      backgroundColor: '#E1E7F5',
      borderRadius: module588.default.setSpText(12),
    },
    myacceptBtnTxt: {
      lineHeight: module588.default.setSpText(44),
      alignItems: 'center',
      color: '#658DC2',
      textAlign: 'center',
    },
  }),
  C = L;
exports.default = C;
