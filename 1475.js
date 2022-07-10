var module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  React = require('react'),
  ReactNative = require('react-native'),
  module588 = require('./588'),
  module594 = require('./594'),
  module1110 = require('./1110'),
  module1111 = require('./1111');

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

var module1380 = (function (t) {
  module35.default(T, t);

  var module588 = T,
    module1380 = y(),
    L = function () {
      var t,
        n = module34.default(module588);

      if (module1380) {
        var l = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, l);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function T(t) {
    var l;
    module24.default(this, T);
    (l = L.call(this, t)).state = {
      iarrowdown: require('./1297'),
      banf: require('./1380'),
      feeDackLiNav: [
        {
          titleName: module594.default.t('EquipmentProblem'),
          child: [],
        },
        {
          titleName: module594.default.t('otherProblems'),
          child: [],
        },
      ],
      feeDackIndex: null,
      loading: false,
      theme: [],
      other: [],
      page: 1,
    };
    l.feedbackList();
    return l;
  }

  module25.default(T, [
    {
      key: 'componentDidMount',
      value: function () {
        var t = this;
        this.feedBack = ReactNative.DeviceEventEmitter.addListener('feedBack', function (n) {
          t.props.navigation.navigate('feedBack');
        });
        this.feedackLiRefreshUI = ReactNative.DeviceEventEmitter.addListener('feedackLiRefreshUI', function (n) {
          t.setState({
            theme: [],
            other: [],
          });
          t.feedbackList();
        });
      },
    },
    {
      key: 'componentWillUnmount',
      value: function () {
        this.feedBack.emitter.removeAllListeners('feedBack');
        this.feedackLiRefreshUI.emitter.removeAllListeners('feedackLiRefreshUI');

        this.setState = function (t, n) {};
      },
    },
    {
      key: 'feedbackList',
      value: function () {
        var t = this;
        module1111.default.feedbackList(this.state.page, 20).then(function (n) {
          if (200 == n.code) {
            if (0 == n.data.data.length) {
              t.setState({
                page: t.state.page - 1,
              });
              return false;
            }

            for (var l = 0; l < n.data.data.length; l++) n.data.data[l].iotId ? t.state.theme.push(n.data.data[l]) : t.state.other.push(n.data.data[l]);

            t.setState({
              feeDackLiNav: [
                {
                  titleName: module594.default.t('EquipmentProblem'),
                  child: t.state.theme,
                },
                {
                  titleName: module594.default.t('otherProblems'),
                  child: t.state.other,
                },
              ],
            });
          }
        });
      },
    },
    {
      key: 'showViewFun',
      value: function (t) {
        if (t == this.state.feeDackIndex) t = null;
        this.setState({
          feeDackIndex: t,
        });
      },
    },
    {
      key: '_renderItem',
      value: function (t) {
        var n = this,
          l = t.item,
          f = t.index;
        return React.default.createElement(
          ReactNative.View,
          null,
          0 != l.child.length
            ? React.default.createElement(
                ReactNative.View,
                {
                  style: x.feedackLi,
                  key: f,
                },
                React.default.createElement(
                  ReactNative.TouchableOpacity,
                  {
                    style: x.feedackList,
                    onPress: function () {
                      n.showViewFun(f);
                    },
                  },
                  React.default.createElement(
                    ReactNative.Text,
                    {
                      style: x.feedackListTitle,
                    },
                    l.titleName
                  ),
                  React.default.createElement(ReactNative.Image, {
                    source: this.state.feeDackIndex != f ? this.state.iarrowdown : this.state.banf,
                    resizeMode: 'contain',
                    style: x.feedackListIcon,
                  })
                ),
                this.state.feeDackIndex != f
                  ? React.default.createElement(
                      ReactNative.View,
                      null,
                      l.child.map(function (t, l) {
                        return React.default.createElement(
                          ReactNative.TouchableOpacity,
                          {
                            key: l,
                            style: x.feedackBoxContent,
                            onPress: function () {
                              n.props.navigation.navigate('feedbackdetails', t.id);
                            },
                          },
                          React.default.createElement(
                            ReactNative.View,
                            {
                              style: x.feedackTime,
                            },
                            React.default.createElement(
                              ReactNative.Text,
                              {
                                style: x.feedackTimeData,
                              },
                              n.transformTime(Number(t.gmtLastFeedback) > Number(t.gmtLastReply) ? Number(t.gmtLastFeedback) : Number(t.gmtLastReply))
                            ),
                            React.default.createElement(
                              ReactNative.Text,
                              {
                                style: x.feedackTimeNum,
                              },
                              t.id
                            )
                          ),
                          React.default.createElement(
                            ReactNative.Text,
                            {
                              style: x.feedackContent,
                            },
                            n.FeedbackContent(t.lastReply ? (Number(t.gmtLastFeedback) > Number(t.gmtLastReply) ? t.lastFeedback : t.lastReply) : t.lastFeedback)
                          )
                        );
                      })
                    )
                  : null
              )
            : null
        );
      },
    },
    {
      key: 'loadMore',
      value: function () {
        var t = this;
        this.setState(
          {
            loading: true,
            page: this.state.page + 1,
          },
          function () {
            module1110.default(function () {
              t.feedbackList();
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
        this.setState(
          {
            loading: true,
            theme: [],
            other: [],
            page: 1,
          },
          function () {
            module1110.default(function () {
              t.feedbackList();
            });
          }
        );
        this.setState({
          loading: false,
        });
      },
    },
    {
      key: 'transformTime',
      value: function () {
        var t = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : +new Date();

        if (t) {
          var n = new Date(t);
          return n.getFullYear() + '-' + (n.getMonth() + 1) + '-' + n.getDate() + ' ' + n.getHours() + ':' + n.getMinutes() + ':' + n.getSeconds();
        }

        return '';
      },
    },
    {
      key: 'FeedbackContent',
      value: function (t) {
        return (t = t.split('**robot**'))[0];
      },
    },
    {
      key: 'render',
      value: function () {
        return React.default.createElement(
          ReactNative.View,
          {
            style: x.feedackBox,
          },
          React.default.createElement(ReactNative.FlatList, {
            style: x.wrap,
            removeClippedSubviews: false,
            data: this.state.feeDackLiNav,
            renderItem: this._renderItem.bind(this),
            keyExtractor: function (t, n) {
              return t + n;
            },
            onEndReachedThreshold: 0.2,
            onEndReached: this.loadMore.bind(this),
            refreshing: this.state.loading,
            onRefresh: this.refresh.bind(this),
          })
        );
      },
    },
  ]);
  return T;
})(React.default.Component);

exports.feedackLi = module1380;
var x = ReactNative.StyleSheet.create({
    feedackBox: {
      paddingHorizontal: module588.default.setSpText(16),
    },
    feedackTime: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    feedackTimeData: {
      flex: 1,
      color: '#658DC2',
      fontSize: module588.default.setSpText(16),
    },
    feedackContent: {
      textAlign: 'justify',
      marginTop: module588.default.setSpText(10),
    },
    feedackTimeNum: {
      color: '#777',
    },
    feedackBoxContent: {
      paddingHorizontal: module588.default.setSpText(10),
      paddingVertical: module588.default.setSpText(10),
    },
    feedackLi: {
      backgroundColor: '#fff',
      borderRadius: module588.default.setSpText(6),
      marginTop: module588.default.setSpText(16),
    },
    feedackList: {
      backgroundColor: '#E6EFFA',
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: module588.default.setSpText(16),
      paddingHorizontal: module588.default.setSpText(10),
      borderTopLeftRadius: module588.default.setSpText(6),
      borderTopRightRadius: module588.default.setSpText(6),
    },
    feedackListTitle: {
      color: '#658DC2',
      flex: 1,
      fontSize: module588.default.setSpText(16),
    },
    feedackListIcon: {
      width: module588.default.setSpText(22),
      height: module588.default.setSpText(22),
    },
  }),
  L = module1380;
exports.default = L;
