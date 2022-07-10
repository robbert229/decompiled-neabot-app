var module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  React = require('react'),
  ReactNative = require('react-native'),
  module588 = require('./588'),
  module594 = require('./594'),
  module599 = require('./599'),
  module1111 = require('./1111'),
  module593 = require('./593');

function v() {
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

var module1478 = (function (t) {
  module35.default(C, t);

  var module588 = C,
    module1478 = v(),
    k = function () {
      var t,
        n = module34.default(module588);

      if (module1478) {
        var l = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, l);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function C(t) {
    var l;
    module24.default(this, C);
    (l = k.call(this, t)).state = {
      detailContnet: '',
      topic: '',
      productKey: '',
      devicename: '',
      detailLi: [],
      loading: false,
      inputVal: '',
      userName: '',
      userImg: '',
      urrentVersion: module599.default.getVersion(),
    };
    l._scrollViewRef = false;
    l.feedbackDetail();
    return l;
  }

  module25.default(C, [
    {
      key: 'componentDidMount',
      value: function () {
        var t = this;
        this.keyboardDidShowListener = ReactNative.Keyboard.addListener('keyboardDidShow', function (n) {
          t.setState({
            inputBoxBottom: 20,
          });
        });
        this.keyboardDidHideListener = ReactNative.Keyboard.addListener('keyboardDidHide', function (n) {
          t.setState({
            inputBoxBottom: null,
          });
        });
        this.userFun();
      },
    },
    {
      key: 'componentWillUnmount',
      value: function () {
        this.keyboardDidShowListener.emitter.removeAllListeners('keyboardDidShowListener');
        this.keyboardDidHideListener.emitter.removeAllListeners('keyboardDidHideListener');
      },
    },
    {
      key: 'userFun',
      value: function () {
        var t = this;
        module593.default.get('userData').then(function (n) {
          t.setState({
            userName: n.userName,
            userImg: n.avatar,
          });
        });
      },
    },
    {
      key: 'feedbackDetail',
      value: function () {
        var t = this;
        module1111.default.feedbackDetail(this.props.route.params.toString()).then(function (n) {
          t.setState(
            {
              detailContnet: n.data.content,
              topic: n.data.topic,
              productKey: n.data.productKey,
              devicename: n.data.devicename,
              detailLi: n.data.feedBackReplyList.reverse(),
            },
            function () {
              if (t.state.detailLi.length > 0)
                setTimeout(function () {
                  t.flatListRef.scrollToIndex({
                    viewPosition: 0,
                    index: t.state.detailLi.length - 1,
                  });
                }, 1e3);
            }
          );
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
      key: '_renderItem',
      value: function (t) {
        var n = t.item;
        t.index;
        return React.default.createElement(
          ReactNative.View,
          {
            style: b.detailsTopLi,
          },
          React.default.createElement(ReactNative.Image, {
            source:
              1 == n.type
                ? this.state.userImg
                  ? {
                      uri: this.state.userImg,
                    }
                  : require('./1477')
                : require('./1478'),
            resizeMode: 'cover',
            style: b.detailsTopLiIcon,
          }),
          React.default.createElement(
            ReactNative.View,
            {
              style: b.detailsTopLiContent,
            },
            React.default.createElement(
              ReactNative.View,
              {
                style: b.detailsTopLiContentChild,
              },
              React.default.createElement(
                ReactNative.Text,
                {
                  style: b.detailsLiContentChildTitle,
                },
                1 == n.type ? this.state.userName : module594.default.t('ldTitle')
              ),
              React.default.createElement(
                ReactNative.Text,
                {
                  style: b.detailsLiContentChildTxt,
                },
                this.transformTime(Number(n.gmtCreate))
              )
            ),
            React.default.createElement(
              ReactNative.Text,
              {
                style: b.detailsTopLiContentTxt,
              },
              this.FeedbackContent(n.content)
            )
          )
        );
      },
    },
    {
      key: 'loadMore',
      value: function () {
        this.setState({
          loading: true,
        });
        this.setState({
          loading: false,
        });
      },
    },
    {
      key: 'refresh',
      value: function () {
        this.setState({
          loading: true,
        });
        this.setState({
          loading: false,
        });
      },
    },
    {
      key: 'feedbackReply',
      value: function () {
        var t = this;
        module1111.default.feedbackReply(this.state.inputVal, this.state.urrentVersion, this.props.route.params.toString()).then(function (n) {
          if (200 == n.code) {
            t.feedbackDetail();
            t.setState({
              inputVal: null,
            });
          }
        });
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
        var t = this;
        return React.default.createElement(
          ReactNative.View,
          {
            style: [
              b.detailsBox,
              {
                marginBottom: this.state.inputBoxBottom ? this.state.inputBoxBottom : 0,
                backgroundColor: 'darkImg' == this.props.v ? '#0F1D2F' : '#F7F9FC',
              },
            ],
          },
          React.default.createElement(
            ReactNative.View,
            {
              style: [
                b.detailsTop,
                {
                  backgroundColor: 'darkImg' == this.props.v ? '#213B5C' : '#fff',
                },
              ],
              onP: function () {
                t.flatListRef.scrollToOffset({
                  animated: true,
                  viewPosition: 1,
                  index: 0,
                });
              },
            },
            React.default.createElement(
              ReactNative.Text,
              {
                style: [
                  b.detailsTitle,
                  {
                    color: 'darkImg' == this.props.v ? '#658DC2' : '#213B5C',
                  },
                ],
              },
              this.FeedbackContent(this.state.detailContnet)
            ),
            React.default.createElement(
              ReactNative.Text,
              {
                style: b.detailsChildTitle,
              },
              module594.default.t('RouterModel'),
              this.state.topic
            ),
            React.default.createElement(
              ReactNative.Text,
              {
                style: b.detailsChildTitle,
              },
              module594.default.t('ProductNumber'),
              this.state.productKey
            ),
            React.default.createElement(
              ReactNative.Text,
              {
                style: b.detailsChildTitle,
              },
              module594.default.t('DeviceSN'),
              this.state.devicename
            )
          ),
          React.default.createElement(
            ReactNative.View,
            {
              style: [
                b.detailsTop,
                {
                  paddingVertical: 0,
                  flex: 1,
                  backgroundColor: 'darkImg' == this.props.v ? '#213B5C' : '#fff',
                },
              ],
            },
            React.default.createElement(ReactNative.FlatList, {
              style: b.wrap,
              ref: function (n) {
                t.flatListRef = n;
              },
              showsVerticalScrollIndicator: false,
              removeClippedSubviews: true,
              data: this.state.detailLi,
              renderItem: this._renderItem.bind(this),
              keyExtractor: function (t, n) {
                return t + n;
              },
              onEndReachedThreshold: 0.2,
              onEndReached: this.loadMore.bind(this),
              refreshing: this.state.loading,
              onRefresh: this.refresh.bind(this),
              getItemLayout: function (t, n) {
                return {
                  length: 100,
                  offset: 100 * n,
                  index: n,
                };
              },
            })
          ),
          React.default.createElement(
            ReactNative.View,
            {
              style: [
                b.detailsInput,
                {
                  backgroundColor: 'darkImg' == this.props.v ? '#11243D' : 'rgb(230,239,250)',
                },
              ],
            },
            React.default.createElement(ReactNative.TextInput, {
              placeholder: module594.default.t('Reply'),
              placeholderTextColor: 'rgb(155,155,155)',
              style: [
                b.inputTxt,
                {
                  backgroundColor: 'darkImg' == this.props.v ? '#213B5C' : '#fff',
                  color: 'darkImg' == this.props.v ? '#658DC2' : '#213B5C',
                },
              ],
              value: this.state.inputVal,
              returnKeyType: 'send',
              onSubmitEditing: function () {
                t.feedbackReply();
              },
              onChangeText: function (n) {
                t.setState({
                  inputVal: n,
                });
              },
            })
          )
        );
      },
    },
  ]);
  return C;
})(React.default.Component);

exports.feedbackdetails = module1478;
var b = ReactNative.StyleSheet.create({
    detailsBox: {
      flex: 1,
      flexDirection: 'column',
    },
    detailsInput: {
      paddingHorizontal: module588.default.setSpText(16),
      paddingVertical: module588.default.setSpText(10),
    },
    inputTxt: {
      height: module588.default.setSpText(40),
      borderRadius: module588.default.setSpText(8),
      paddingHorizontal: module588.default.setSpText(12),
    },
    detailsTopLiIcon: {
      width: module588.default.setSpText(35),
      height: module588.default.setSpText(35),
      borderRadius: module588.default.setSpText(35),
    },
    detailsTopLi: {
      flexDirection: 'row',
      marginTop: module588.default.setSpText(20),
    },
    detailsTopLiContentChild: {
      flexDirection: 'row',
    },
    detailsTopLiContentTxt: {
      fontSize: module588.default.setSpText(12),
      marginTop: module588.default.setSpText(10),
      color: 'rgb(101,141,194)',
    },
    detailsLiContentChildTitle: {
      fontSize: module588.default.setSpText(12),
      color: 'rgb(17,36,61)',
      flex: 1,
    },
    detailsLiContentChildTxt: {
      color: 'rgb(153,153,153)',
      fontSize: module588.default.setSpText(10),
    },
    detailsTopLiContent: {
      flex: 1,
      marginLeft: module588.default.setSpText(8),
      borderBottomColor: 'rgb(178,178,178)',
      borderBottomWidth: 1,
      paddingBottom: module588.default.setSpText(17),
    },
    detailsTop: {
      marginTop: module588.default.setSpText(20),
      paddingHorizontal: module588.default.setSpText(10),
      paddingVertical: module588.default.setSpText(10),
    },
    detailsChildTitle: {
      color: '#0A72FA',
      fontSize: module588.default.setSpText(13),
      marginTop: module588.default.setSpText(5),
    },
    detailsTitle: {
      fontSize: module588.default.setSpText(16),
    },
  }),
  k = module1478;
exports.default = k;
