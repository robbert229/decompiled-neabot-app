var module20 = require('./20'),
  module24 = require('./24'),
  module25 = require('./25'),
  module35 = require('./35'),
  module37 = require('./37'),
  module34 = require('./34'),
  React = require('react'),
  ReactNative = require('react-native'),
  PropTypes = require('prop-types'),
  module1148 = require('./1148'),
  module916 = require('./916'),
  module1251 = require('./1251'),
  module588 = k(require('./588')),
  module594 = k(require('./594'));

k(require('./1255'));

function b(t) {
  if ('function' != typeof WeakMap) return null;
  var n = new WeakMap(),
    o = new WeakMap();
  return (b = function (t) {
    return t ? o : n;
  })(t);
}

function k(t, n) {
  if (!n && t && t.__esModule) return t;
  if (null === t || ('object' != typeof t && 'function' != typeof t))
    return {
      default: t,
    };
  var o = b(n);
  if (o && o.has(t)) return o.get(t);
  var s = {},
    l = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var u in t)
    if ('default' !== u && Object.prototype.hasOwnProperty.call(t, u)) {
      var f = l ? Object.getOwnPropertyDescriptor(t, u) : null;
      if (f && (f.get || f.set)) Object.defineProperty(s, u, f);
      else s[u] = t[u];
    }

  s.default = t;
  if (o) o.set(t, s);
  return s;
}

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

var module1258 = (function (t) {
  module35.default(module1256, t);

  var PropTypes = module1256,
    b = v(),
    k = function () {
      var t,
        n = module34.default(PropTypes);

      if (b) {
        var o = module34.default(this).constructor;
        t = Reflect.construct(n, arguments, o);
      } else t = n.apply(this, arguments);

      return module37.default(this, t);
    };

  function module1256(t) {
    var n;
    module24.default(this, module1256);

    (n = k.call(this, t))._showSectionDivideLine = function () {
      return React.default.createElement(ReactNative.View, {
        style: w.sectiondivideLine,
      });
    };

    n.state = {
      fullList: true,
      matchItem: new Set(),
      matchSection: new Set(),
      hideRightBar: false,
      isShow: n.props.isShow,
      countryCodeSession: [],
      CodeSessionChilder: [],
      letterArr: [],
      sections: '',
      text: '',
      inputValue: '',
      settimeId: null,
    };
    n.afterData = [];
    return n;
  }

  module25.default(module1256, [
    {
      key: '_extraUniqueKey',
      value: function (t, n) {
        return 'index' + n + t.domainAbbreviation;
      },
    },
    {
      key: 'componentDidMount',
      value: function () {
        this.getCountryList();
      },
    },
    {
      key: 'componentWillUnmount',
      value: function () {
        this.setState = function (t, n) {};
      },
    },
    {
      key: 'getCountryList',
      value: function () {
        var t = this;
        module916.default.getCountryList().then(function (o) {
          var s,
            l,
            u = o.data;
          s = [];
          l = [];
          u.forEach(function (t, n, o) {
            var s = t.pinyin.substring(0, 1).toUpperCase();
            l.push(s);
          });
          l = module20.default(new Set(l)).sort();
          t.setState({
            letterArr: l,
          });
          l.forEach(function (t, n, o) {
            s.push({
              key: t,
              data: [],
            });
          });
          u.forEach(function (t, n, o) {
            var l = t;
            s.forEach(function (t, n, o) {
              var s = l.pinyin.substring(0, 1).toUpperCase();
              module1251.default(l.areaName, {
                style: module1251.default.STYLE_NORMAL,
              });
              if (t.key === s)
                t.data.push({
                  countryName: l.areaName,
                  phoneCode: l.code,
                  domainAbbreviation: l.domainAbbreviation,
                  countryCode: l.isoCode,
                  countryPinyin: l.pinyin,
                });
            });
          });
          t.setState({
            sections: s,
          });
          t.setState({
            countryCodeSession: s,
            CodeSessionChilder: s,
          });
        });
      },
    },
    {
      key: 'handleRightBarPress',
      value: function (t) {
        this.sectionlist.scrollToLocation({
          itemIndex: t,
        });
      },
    },
    {
      key: '_onChangeText',
      value: function (t) {
        this.setState({
          fullList: false,
        });
        if (t)
          ~t.indexOf('')
            ? this.setState({
                fullList: false,
              })
            : t
            ? (this.setState({
                inputValue: t,
              }),
              clearTimeout(this.settimeId),
              (this.settimeId = setTimeout(function () {}, 1e3)))
            : this.setState({
                inputValue: '',
              });
        else
          this.setState({
            fullList: true,
          });
      },
    },
    {
      key: 'searchList',
      value: function (t) {
        if (
          (this.setState({
            fullList: false,
          }),
          t)
        ) {
          if (~t.indexOf(' ')) {
            var n = new RegExp('[^\\s]', 'g'),
              o = t.match(n);
            if ((console.log(o), null === o))
              return void this.setState({
                fullList: false,
              });
          }

          t = t
            .replace(
              /[`~!@#$%^&*\u20ac()_\-+=<>?:"{}|,.\/;'\\[\]\xb7~\uff01@#\uffe5%\u2026\u2026&*\uff08\uff09\u2014\u2014\-+={}|\u300a\u300b\uff1f\uff1a\u201c\u201d\u3010\u3011\u3001\uff1b\u2018\u2019\uff0c\u3002\u3001]/g,
              ''
            )
            .toUpperCase()
            .replace(/(^\s*)|(\s*$)/g, '');

          for (var s = [], l = 0; l < this.state.CodeSessionChilder.length; l++)
            for (var u = 0; u < this.state.CodeSessionChilder[l].data.length; u++) {
              var f = this.state.CodeSessionChilder[l].data[u].countryName.toUpperCase(),
                c = this.state.CodeSessionChilder[l].data[u].phoneCode.toUpperCase(),
                h = this.state.CodeSessionChilder[l].data[u].domainAbbreviation.toUpperCase(),
                p = this.state.CodeSessionChilder[l].data[u].countryPinyin.toUpperCase(),
                S = this.state.CodeSessionChilder[l].data[u].countryCode.toUpperCase();
              console.log('\u641c\u7d22\u6587\u672c:' + f + '======end', c, p, S, h);
              if (c.match(t) || f.match(t) || p.match(t) || S.match(t))
                s.push({
                  data: this.state.CodeSessionChilder[l].data[u],
                  key: this.state.CodeSessionChilder[l].key,
                });
            }

          var y = [];
          if (((this.afterData = []), 0 != s.length))
            for (var x = 0; x < s.length; x++)
              if (-1 === y.indexOf(s[x].key)) {
                this.afterData.push({
                  key: s[x].key,
                  data: [s[x].data],
                });
                y.push(s[x].key);
              } else
                for (var C = 0; C < this.afterData.length; C++)
                  if (this.afterData[C].key == s[x].key) {
                    this.afterData[C].data.push(s[x].data);
                    break;
                  }
          if (0 != s.length)
            this.setState({
              fullList: true,
              countryCodeSession: this.afterData,
            });
          else
            this.setState({
              fullList: true,
              countryCodeSession: this.state.CodeSessionChilder,
            });
        } else
          this.setState({
            fullList: true,
            countryCodeSession: this.state.CodeSessionChilder,
          });
      },
    },
    {
      key: 'phoneCodeSelected',
      value: function (t) {
        this.props.onPick(t);
        this.setState({
          isShow: false,
        });
      },
    },
    {
      key: 'closeBack',
      value: function () {
        this.props.closePilck();
        this.setState({
          isShow: false,
        });
      },
    },
    {
      key: 'render',
      value: function () {
        this.props.title;
        this.props.data;
        var t = this,
          n = new module1148.default.DataSource({
            rowHasChanged: function (t, n) {
              return t !== n;
            },
          });
        return React.default.createElement(
          ReactNative.Modal,
          {
            visible: this.state.isShow,
            animationType: this.props.animationType || 'slide',
            transparent: false,
            onRequestClose: function () {
              t.closeBack();
            },
          },
          React.default.createElement(
            ReactNative.SafeAreaView,
            {
              style: {
                flex: 1,
                backgroundColor: '#fff',
              },
            },
            React.default.createElement(ReactNative.StatusBar, {
              translucent: false,
              backgroundColor: '#fff',
              barStyle: 'dark-content',
            }),
            React.default.createElement(
              ReactNative.View,
              {
                style: [
                  w.container,
                  {
                    position: 'absolute',
                    bottom: module588.statusBarHeight,
                    right: 0,
                    left: 0,
                    top: module588.statusBarHeight,
                  },
                ],
              },
              React.default.createElement(
                ReactNative.View,
                {
                  style: [w.codeTtile],
                },
                React.default.createElement(
                  ReactNative.Text,
                  {
                    style: [w.codeTitleText],
                  },
                  module594.default.t('codeText')
                ),
                React.default.createElement(
                  ReactNative.TouchableOpacity,
                  {
                    style: w.codeTopBack,
                    onPress: function () {
                      t.closeBack();
                    },
                    hitSlop: {
                      left: 30,
                      right: 30,
                      top: 30,
                      bottom: 30,
                    },
                  },
                  React.default.createElement(ReactNative.Image, {
                    source: require('./1256'),
                    style: {
                      width: '20%',
                      height: '30%',
                    },
                  })
                )
              ),
              React.default.createElement(
                ReactNative.View,
                {
                  style: [w.container1],
                },
                React.default.createElement(ReactNative.TextInput, {
                  autoCapitalize: 'none',
                  autoCorrect: false,
                  editable: true,
                  maxLength: 32,
                  placeholderTextColor: '#CCCCCC',
                  enablesReturnKeyAutomatically: true,
                  style: [w.searchInput],
                  placeholder: module594.default.t('addTxt'),
                  onChangeText: function (n) {
                    t.searchList(n);
                  },
                  onFocus: function () {
                    return t.setState({
                      hideRightBar: false,
                    });
                  },
                }),
                React.default.createElement(ReactNative.Image, {
                  source: require('./1257'),
                  style: w.ssBack,
                })
              ),
              React.default.createElement(
                ReactNative.View,
                {
                  style: w.positioningUser,
                },
                React.default.createElement(
                  ReactNative.Text,
                  {
                    style: w.positioningText,
                  },
                  React.default.createElement(ReactNative.Image, {
                    source: require('./1258'),
                    style: w.icondark,
                  }),
                  module594.default.t('currentLocation'),
                  ' '
                )
              ),
              React.default.createElement(
                ReactNative.View,
                {
                  style: [w.container2],
                },
                React.default.createElement(ReactNative.SectionList, {
                  sections: this.state.countryCodeSession,
                  renderSectionHeader: function (n) {
                    var o = n.section;
                    n.index;
                    return t.state.matchSection.has(o.key) || t.state.fullList
                      ? React.default.createElement(
                          ReactNative.View,
                          null,
                          React.default.createElement(
                            ReactNative.Text,
                            {
                              style: [w.sessionHeader],
                            },
                            o.key
                          )
                        )
                      : React.default.createElement(ReactNative.View, null);
                  },
                  renderItem: function (n) {
                    var o = n.item;
                    return t.state.fullList
                      ? React.default.createElement(
                          ReactNative.TouchableHighlight,
                          {
                            onPress: function () {
                              return t.phoneCodeSelected(o);
                            },
                          },
                          React.default.createElement(
                            ReactNative.View,
                            {
                              style: [w.sessionListItemContainer],
                            },
                            React.default.createElement(
                              ReactNative.Text,
                              {
                                style: [w.sessionListItem1],
                              },
                              o.countryName
                            ),
                            React.default.createElement(
                              ReactNative.Text,
                              {
                                style: [w.sessionListItem2],
                              },
                              '+',
                              o.phoneCode
                            )
                          )
                        )
                      : React.default.createElement(ReactNative.View, null);
                  },
                  keyExtractor: this._extraUniqueKey,
                  initialNumToRender: 30,
                  onEndReached: function () {},
                  onEndReachedThreshold: 0.5,
                  ItemSeparatorComponent: function () {
                    return t.state.fullList
                      ? React.default.createElement(ReactNative.View, {
                          style: [w.itemSeparator],
                        })
                      : React.default.createElement(ReactNative.View, null);
                  },
                  stickySectionHeadersEnabled: false,
                  ref: function (n) {
                    return (t.sectionlist = n);
                  },
                  style: [w.sessionList],
                  onScrollToIndexFailed: function () {},
                })
              ),
              React.default.createElement(
                ReactNative.View,
                {
                  style: [w.rightBar],
                },
                this.state.hideRightBar
                  ? React.default.createElement(ReactNative.View, null)
                  : React.default.createElement(module1148.default, {
                      dataSource: n.cloneWithRows([
                        ['A', 0],
                        ['B', 20],
                        ['C', 47],
                        ['D', 51],
                        ['E', 59],
                        ['F', 64],
                        ['G', 78],
                        ['H', 93],
                        ['I', 104],
                        ['J', 106],
                        ['K', 119],
                        ['L', 132],
                        ['M', 146],
                        ['N', 176],
                        ['O', 191],
                        ['P', 193],
                        ['Q', 198],
                        ['R', 200],
                        ['S', 205],
                        ['T', 233],
                        ['U', 247],
                        ['V', 249],
                        ['W', 251],
                        ['X', 262],
                        ['Y', 272],
                        ['Z', 288],
                      ]),
                      renderRow: function (n) {
                        return React.default.createElement(
                          ReactNative.Text,
                          {
                            style: [w.rightBarText],
                            onPress: function () {
                              return t.handleRightBarPress(n[1]);
                            },
                          },
                          n[0]
                        );
                      },
                    })
              )
            )
          )
        );
      },
    },
  ]);
  return module1256;
})(React.default.Component);

exports.default = module1258;
module1258.propTypes = {
  isShow: PropTypes.default.bool,
  onPick: PropTypes.default.func,
  animationType: PropTypes.default.string,
};
var w = ReactNative.StyleSheet.create({
  sectiondivideLine: {
    height: 5,
    width: '100%',
    backgroundColor: '#ff00ff',
  },
  container: {
    flex: 1,
    backgroundColor: '#F7F9FC',
  },
  container1: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingLeft: module588.default.setSpText(20),
    paddingRight: module588.default.setSpText(20),
    paddingBottom: module588.default.setSpText(16),
    paddingTop: module588.default.setSpText(10),
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    flex: 11,
    flexDirection: 'row',
    paddingRight: module588.default.setSpText(15),
  },
  searchInput: {
    flex: 1,
    backgroundColor: '#E6EFFA',
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderColor: '#BCCCE0',
    fontSize: module588.default.setSpText(15),
    borderRadius: module588.default.setSpText(8),
    height: module588.default.setSpText(55),
    paddingLeft: module588.default.setSpText(10),
    marginTop: module588.default.setSpText(3),
    paddingRight: module588.default.setSpText(50),
  },
  ssBack: {
    position: 'absolute',
    width: module588.default.setSpText(22),
    height: module588.default.setSpText(22),
    right: module588.default.setSpText(30),
  },
  sessionList: {
    flex: 1,
  },
  rightBar: {
    position: 'absolute',
    width: module588.default.setSpText(10),
    height: module588.default.setSpText(334),
    right: module588.default.setSpText(5),
    top: module588.default.setSpText(170),
    backgroundColor: 'rgba(17,36,61,.5)',
    color: '#F7F9FC',
    borderBottomLeftRadius: module588.default.setSpText(5),
    borderBottomRightRadius: module588.default.setSpText(5),
    borderTopEndRadius: module588.default.setSpText(5),
    borderTopStartRadius: module588.default.setSpText(5),
  },
  rightBarText: {
    color: '#F7F9FC',
    textAlign: 'center',
    lineHeight: module588.default.setSpText(12.5),
    fontSize: module588.default.setSpText(10),
  },
  sessionListItemContainer: {
    flex: 1,
    flexDirection: 'row',
    padding: module588.default.setSpText(10),
    backgroundColor: '#fff',
    paddingLeft: module588.default.setSpText(10),
  },
  sessionListItem1: {
    flex: 1,
    color: '#213B5C',
    fontSize: module588.default.setSpText(14),
  },
  sessionListItem2: {
    flex: 1,
    textAlign: 'right',
    color: '#0A72FA',
    fontSize: module588.default.setSpText(12),
  },
  sessionHeader: {
    paddingLeft: module588.default.setSpText(10),
    height: module588.default.setSpText(28),
    lineHeight: module588.default.setSpText(28),
  },
  itemSeparator: {
    flex: 1,
    height: 1,
    backgroundColor: '#eee',
  },
  codeTtile: {
    width: '100%',
    position: 'relative',
  },
  codeTitleText: {
    backgroundColor: '#fff',
    height: module588.default.setSpText(50),
    lineHeight: module588.default.setSpText(50),
    color: '#11243D',
    fontSize: module588.default.setSpText(16),
    textAlign: 'center',
  },
  codeTopBack: {
    position: 'absolute',
    width: module588.default.setSpText(72),
    height: module588.default.setSpText(62),
    left: module588.default.setSpText(15),
    top: '60%',
    marginTop: module588.default.setSpText(-11),
  },
  icondark: {
    width: module588.default.setSpText(22),
    height: module588.default.setSpText(22),
  },
  positioningUser: {
    backgroundColor: '#fff',
    paddingLeft: module588.default.setSpText(20),
    paddingRight: module588.default.setSpText(20),
    paddingBottom: module588.default.setSpText(16),
  },
  positioningText: {
    height: module588.default.setSpText(30),
    color: '#0A72FA',
    fontSize: module588.default.setSpText(14),
  },
});
