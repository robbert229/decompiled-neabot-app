var module11 = require('./11'),
  module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  React = (function (t, n) {
    if (!n && t && t.__esModule) return t;
    if (null === t || ('object' != typeof t && 'function' != typeof t))
      return {
        default: t,
      };
    var s = y(n);
    if (s && s.has(t)) return s.get(t);
    var o = {},
      l = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var u in t)
      if ('default' !== u && Object.prototype.hasOwnProperty.call(t, u)) {
        var f = l ? Object.getOwnPropertyDescriptor(t, u) : null;
        if (f && (f.get || f.set)) Object.defineProperty(o, u, f);
        else o[u] = t[u];
      }

    o.default = t;
    if (s) s.set(t, o);
    return o;
  })(require('react')),
  ReactNative = require('react-native'),
  PropTypes = require('prop-types'),
  module594 = require('./594');

function y(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    s = new WeakMap();
  return (y = function (t) {
    return t ? s : n;
  })(t);
}

function M() {
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

var D = (function (t) {
  module35.default(E, t);

  var PropTypes = E,
    y = M(),
    D = function () {
      var t,
        n = module34.default(PropTypes);

      if (y) {
        var s = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, s);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function E(t) {
    var n;
    module24.default(this, E);
    (n = D.call(this, t)).state = {
      data: [],
      refreshing: false,
      loadMoreing: false,
      isNoMoreData: false,
      emptyViewHint: '\u6682\u65e0\u6570\u636e',
      showFoot: 0,
      showTips: module594.default.t('N1619683430'),
    };
    return n;
  }

  module25.default(E, [
    {
      key: 'componentDidMount',
      value: function () {
        var t = this;
        this.page = 1;
        this.setState({
          refreshing: true,
        });
        this.refreshOneItemUI = ReactNative.DeviceEventEmitter.addListener('refreshOneItemUI', function (n, s) {
          t.ajaxRefreshOneFunc(n, s);
        });
        this.refreshUI = ReactNative.DeviceEventEmitter.addListener('indexList', function (n) {
          t.page = undefined != n ? n : t.page;
          t.loadData();
        });
        this.removeItemUI = ReactNative.DeviceEventEmitter.addListener('removeItemUI', function (n) {
          for (
            var s = t.state.data,
              o = function (o) {
                var l = s[o];

                if (l && l.deviceId == n.deviceId) {
                  s.splice(o, 1);
                  t.setState(
                    {
                      isNoMoreData: true,
                      sizes: t.state.sizes--,
                      data: s,
                      loadMoreing: false,
                    },
                    function () {
                      if (o >= (t.page - 1) * t.state.pageSize) t.loadData();
                    }
                  );
                }
              },
              l = 0;
            l < s.length;
            l++
          )
            o(l);
        });
        this.onChangeLanguageUI = ReactNative.DeviceEventEmitter.addListener('onChangeLanguageUI', function (n) {
          setTimeout(function () {
            t.setState({
              showTips: module594.default.t('N1619683430'),
            });
          }, 10);
        });
        this.loadData();
      },
    },
    {
      key: 'componentWillUnmount',
      value: function () {
        this.refreshOneItemUI.emitter.removeAllListeners('refreshOneItemUI');
        this.refreshUI.emitter.removeAllListeners('indexList');
        this.removeItemUI.emitter.removeAllListeners('removeItemUI');

        this.setState = function (t, n) {};
      },
    },
    {
      key: 'reLoadData',
      value: function () {
        this.setState({
          data: this.state.data,
        });
      },
    },
    {
      key: 'renderEmpty',
      value: function () {
        var t = this;
        return this.props.emptyView
          ? this.props.emptyView
          : React.default.createElement(
              ReactNative.View,
              {
                style: {
                  flex: 1,
                  alignItems: 'center',
                  marginTop: 30,
                  justifyContent: 'center',
                },
              },
              React.default.createElement(
                ReactNative.Text,
                {
                  style: {
                    fontSize: 18,
                    color: 'black',
                    marginTop: 15,
                  },
                },
                this.state.emptyViewHint
              ),
              React.default.createElement(
                ReactNative.TouchableOpacity,
                {
                  style: {
                    marginTop: 20,
                    backgroundColor: '#00000000',
                    borderRadius: 5,
                    borderWidth: 1,
                    borderColor: 'gray',
                    height: 40,
                    width: 120,
                    alignItems: 'center',
                    justifyContent: 'center',
                  },
                  onPress: this.props.emptyOnPress
                    ? this.props.emptyOnPress
                    : function () {
                        return t.onRefresh();
                      },
                },
                React.default.createElement(ReactNative.Text, null, this.props.emptyButtonTitle ? this.props.emptyButtonTitle : '\u91cd\u65b0\u52a0\u8f7d')
              )
            );
      },
    },
    {
      key: 'loadData',
      value: function () {
        var t = this,
          n = this.props.noMoreDataSize,
          s = this.props.pageSize;
        if (0 == this.page) this.page = 1;
        this.props
          .netWork(this.page)
          .then(function (o) {
            if ('{}' !== JSON.stringify(o) && '' != o) {
              var l = o.sdata,
                u = undefined != o.total ? o.total : n,
                f = undefined != o.pageSize ? o.pageSize : s;
              if (undefined != o.totalPage) o.totalPage;
              if (1 === t.page)
                t.setState(
                  {
                    sizes: u,
                    pageSize: f,
                    refreshing: false,
                    isNoMoreData: l.length <= s,
                  },
                  function () {
                    t.ajaxRefreshFunc(l);
                  }
                );
              else
                t.setState(
                  {
                    pageSize: f,
                    sizes: u,
                    loadMoreing: false,
                  },
                  function () {
                    t.ajaxRefreshMoreFunc(l, t.state.data);
                  }
                );
            }
          })
          .catch(function (n) {
            if (1 !== t.page) {
              t.page -= 1;
              t.setState({
                loadMoreing: false,
              });
            } else
              t.setState({
                refreshing: false,
                emptyViewHint: n,
              });
          });
      },
    },
    {
      key: 'ajaxRefreshMoreFunc',
      value: function (t, n) {
        var s = this;
        if (this.props.ajaxRefreshFunc)
          this.props.ajaxRefreshFunc(t).then(function (o) {
            t = o;
            if (s.props.ajaxRefreshMoreFunc)
              s.props.ajaxRefreshMoreFunc(t, n).then(function (t) {
                s.setState(
                  {
                    data: t,
                  },
                  function () {
                    s.setState(
                      {
                        isNoMoreData: s.state.data.length >= s.state.sizes,
                      },
                      function () {
                        if (s.props.saveAllData) s.props.saveAllData(s.state.data);
                      }
                    );
                  }
                );
              });
          });
      },
    },
    {
      key: 'ajaxRefreshOneFunc',
      value: function (t, n) {
        var s = this;
        this.props
          .ajaxRefreshOneFunc(this.state.data, [t, n])
          .then(function (t) {
            s.setState(
              {
                data: t,
              },
              function () {
                if (s.props.saveAllData) s.props.saveAllData(s.state.data);
              }
            );
          })
          .catch(function (t) {});
      },
    },
    {
      key: 'ajaxRefreshFunc',
      value: function (...args) {
        var t = this;

        if (this.props.ajaxRefreshFunc) {
          n = args ? args[0] : this.state.data;
          this.props.ajaxRefreshFunc(n).then(function (n) {
            t.setState(
              {
                data: n,
                isNoMoreData: n.length >= t.state.sizes,
              },
              function () {
                if (t.props.saveAllData) t.props.saveAllData(t.state.data);
              }
            );
          });
        }
      },
    },
    {
      key: 'onRefresh',
      value: function () {
        this.page = 1;
        this.setState({
          refreshing: true,
          loadMoreing: false,
        });
        this.loadData();
      },
    },
    {
      key: 'onLoadMore',
      value: function (t) {
        if (!(this.state.loadMoreing || this.state.isNoMoreData || (this.state.sizes && this.state.data && this.state.data.length >= this.state.sizes))) {
          this.page += 1;
          this.loadData();
          this.setState({
            loadMoreing: true,
            refreshing: false,
          });
        }
      },
    },
    {
      key: 'renderLoadMoreView',
      value: function () {
        if (this.props.loadMoreEnable && 0 !== this.state.data.length)
          if (this.state.isNoMoreData)
            return this.props.noMoreView
              ? this.props.noMoreView
              : React.default.createElement(
                  ReactNative.Text,
                  {
                    style: {
                      alignSelf: 'center',
                      height: 40,
                    },
                  },
                  this.state.showTips
                );
          else
            return this.state.loadMoreing
              ? this.props.loadMoreView
                ? this.props.loadMoreView
                : React.default.createElement(
                    ReactNative.View,
                    {
                      style: {
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flex: 1,
                        height: 50,
                      },
                    },
                    React.default.createElement(ReactNative.ActivityIndicator, null),
                    React.default.createElement(
                      ReactNative.Text,
                      {
                        style: {
                          marginLeft: 20,
                        },
                      },
                      module594.default.t('L1619683448')
                    )
                  )
              : undefined;
      },
    },
    {
      key: 'render',
      value: function () {
        var t = this;
        return React.default.createElement(
          ReactNative.FlatList,
          module11.default({}, this.props, {
            extraData: this.state,
            data: this.state.data,
            ListEmptyComponent: this.renderEmpty(),
            ListFooterComponent: this.renderLoadMoreView(),
            refreshing: this.state.refreshing,
            onRefresh: this.props.refreshEnable
              ? function () {
                  t.onRefresh();
                }
              : null,
            keyExtractor: function (t, n) {
              return n.toString();
            },
            onEndReachedThreshold: this.props.loadMoreEnable ? 0.1 : null,
            onEndReached: this.props.loadMoreEnable
              ? function (n) {
                  t.onLoadMore(n);
                }
              : null,
          })
        );
      },
    },
  ]);
  return E;
})(React.Component);

exports.default = D;
D.propTypes = module11.default({}, ReactNative.FlatList.propTypes, {
  refreshEnable: PropTypes.default.bool,
  loadMoreEnable: PropTypes.default.bool,
  netWork: PropTypes.default.func.isRequired,
  ajaxRefreshOneFunc: PropTypes.default.func.isRequired,
  ajaxRefreshMoreFunc: PropTypes.default.func.isRequired,
  emptyButtonTitle: PropTypes.default.string,
  emptyOnPress: PropTypes.default.func,
  noMoreDataSize: PropTypes.default.number,
  pageSize: PropTypes.default.number,
  pageSize: PropTypes.default.number,
  emptyView: PropTypes.default.func,
  noMoreView: PropTypes.default.element,
  loadMoreView: PropTypes.default.element,
});
D.defaultProps = module11.default({}, ReactNative.FlatList.defaultProps, {
  refreshEnable: true,
  loadMoreEnable: false,
  noMoreDataSize: 20,
  pageSize: 4,
  siezs: 20,
});
