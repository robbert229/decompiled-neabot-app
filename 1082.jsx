require('./1086');

var module260 = require('./260'),
  module11 = require('./11'),
  React = require('react'),
  ReactNative = (ReactNative = require('react-native')).ViewPropTypes,
  module1083 = require('./1083'),
  PropTypes = require('prop-types'),
  p = ReactNative,
  h = p.Dimensions,
  u = p.View,
  b = p.Animated,
  f = p.StyleSheet,
  module1055 = require('./1055'),
  module1086 = require('./1086'),
  module1089 = require('./1089'),
  module1091 = require('./1091'),
  module1093 = require('./1093'),
  B = b.createAnimatedComponent(module1086),
  _ = module1083({
    displayName: 'ScrollableTabView',
    mixins: [module1055],
    statics: {
      DefaultTabBar: module1091,
      ScrollableTabBar: module1093,
    },
    scrollOnMountCalled: false,
    propTypes: {
      tabBarPosition: PropTypes.oneOf(['top', 'bottom', 'overlayTop', 'overlayBottom']),
      initialPage: PropTypes.number,
      page: PropTypes.number,
      onChangeTab: PropTypes.func,
      onScroll: PropTypes.func,
      renderTabBar: PropTypes.any,
      tabBarUnderlineStyle: ReactNative.style,
      tabBarBackgroundColor: PropTypes.string,
      tabBarActiveTextColor: PropTypes.string,
      tabBarInactiveTextColor: PropTypes.string,
      tabBarTextStyle: PropTypes.object,
      style: ReactNative.style,
      contentProps: PropTypes.object,
      scrollWithoutAnimation: PropTypes.bool,
      locked: PropTypes.bool,
      prerenderingSiblingsNumber: PropTypes.number,
    },
    getDefaultProps: function () {
      return {
        tabBarPosition: 'top',
        initialPage: 0,
        page: -1,
        onChangeTab: function () {},
        onScroll: function () {},
        contentProps: {},
        scrollWithoutAnimation: false,
        locked: false,
        prerenderingSiblingsNumber: 0,
      };
    },
    getInitialState: function () {
      var t,
        n,
        o,
        s = h.get('window').width;
      n = new b.Value(this.props.initialPage);
      o = new b.Value(0);
      t = b.add(n, o);

      var l = this._polyfillAnimatedValue(t),
        c = this.props.initialPage,
        p = 0;

      n.addListener(function (t) {
        var n = t.value;
        l((c = n) + p);
      });
      o.addListener(function (t) {
        var n = t.value;
        l(c + (p = n));
      });
      return {
        currentPage: this.props.initialPage,
        scrollValue: t,
        scrollXIOS: undefined,
        positionAndroid: n,
        offsetAndroid: o,
        containerWidth: s,
        sceneKeys: this.newSceneKeys({
          currentPage: this.props.initialPage,
        }),
      };
    },
    componentDidUpdate: function (t) {
      if (this.props.children !== t.children)
        this.updateSceneKeys({
          page: this.state.currentPage,
          children: this.props.children,
        });
      if (this.props.page >= 0 && this.props.page !== this.state.currentPage) this.goToPage(this.props.page);
    },
    componentWillUnmount: function () {
      this.state.positionAndroid.removeAllListeners();
      this.state.offsetAndroid.removeAllListeners();
    },
    goToPage: function (t) {
      if (this.scrollView) this.props.scrollWithoutAnimation ? this.scrollView.setPageWithoutAnimation(t) : this.scrollView.setPage(t);
      var n = this.state.currentPage;
      this.updateSceneKeys({
        page: t,
        callback: this._onChangeTab.bind(this, n, t),
      });
    },
    renderTabBar: function (t) {
      return false === this.props.renderTabBar ? null : this.props.renderTabBar ? React.cloneElement(this.props.renderTabBar(t), t) : <module1091 />;
    },
    updateSceneKeys: function (t) {
      var n = t.page,
        o = t.children,
        s = undefined === o ? this.props.children : o,
        l = t.callback,
        c = undefined === l ? function () {} : l,
        p = this.newSceneKeys({
          previousKeys: this.state.sceneKeys,
          currentPage: n,
          children: s,
        });
      this.setState(
        {
          currentPage: n,
          sceneKeys: p,
        },
        c
      );
    },
    newSceneKeys: function (t) {
      var n = this,
        o = t.previousKeys,
        s = undefined === o ? [] : o,
        l = t.currentPage,
        c = undefined === l ? 0 : l,
        p = t.children,
        h = undefined === p ? this.props.children : p,
        u = [];

      this._children(h).forEach(function (t, o) {
        var l = n._makeSceneKey(t, o);

        if (n._keyExists(s, l) || n._shouldRenderSceneKey(o, c)) u.push(l);
      });

      return u;
    },
    _polyfillAnimatedValue: function (t) {
      var n = new Set();

      t.addListener = function (t) {
        n.add(t);
      };

      t.removeListener = function (t) {
        n.delete(t);
      };

      t.removeAllListeners = function () {
        n.clear();
      };

      return function (t) {
        return n.forEach(function (n) {
          return n({
            value: t,
          });
        });
      };
    },
    _shouldRenderSceneKey: function (t, n) {
      var o = this.props.prerenderingSiblingsNumber;
      return t < n + o + 1 && t > n - o - 1;
    },
    _keyExists: function (t, n) {
      return t.find(function (t) {
        return n === t;
      });
    },
    _makeSceneKey: function (t, n) {
      return t.props.tabLabel + '_' + n;
    },
    renderScrollableContent: function () {
      var t = this,
        s = this._composeScenes();

      return <B>{s}</B>;
    },
    _composeScenes: function () {
      var t = this;
      return this._children().map(function (n, s) {
        var l = t._makeSceneKey(n, s);

        return (
          <module1089
            key={n.key}
            shouldUpdated={t._shouldRenderSceneKey(s, t.state.currentPage)}
            style={{
              width: t.state.containerWidth,
            }}
          >
            {t._keyExists(t.state.sceneKeys, l) ? n : <u tabLabel={n.props.tabLabel} />}
          </module1089>
        );
      });
    },
    _onMomentumScrollBeginAndEnd: function (t) {
      var n = t.nativeEvent.contentOffset.x,
        o = Math.round(n / this.state.containerWidth);
      if (this.state.currentPage !== o) this._updateSelectedPage(o);
    },
    _updateSelectedPage: function (t) {
      var n = t;
      if ('object' == typeof n) n = t.nativeEvent.position;
      var o = this.state.currentPage;
      this.updateSceneKeys({
        page: n,
        callback: this._onChangeTab.bind(this, o, n),
      });
    },
    _onChangeTab: function (t, n) {
      this.props.onChangeTab({
        i: n,
        ref: this._children()[n],
        from: t,
      });
    },
    _onScroll: function (t) {
      var n = t.nativeEvent,
        o = n.position,
        s = n.offset;
      this.props.onScroll(o + s);
    },
    _handleLayout: function (t) {
      var n = this,
        o = t.nativeEvent.layout.width;

      if (!(!o || o <= 0 || Math.round(o) === Math.round(this.state.containerWidth))) {
        this.setState({
          containerWidth: o,
        });
        this.requestAnimationFrame(function () {
          n.goToPage(n.state.currentPage);
        });
      }
    },
    _children: function () {
      var t = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : this.props.children;
      return React.Children.map(t, function (t) {
        return t;
      });
    },
    render: function () {
      var n = 'overlayTop' === this.props.tabBarPosition || 'overlayBottom' === this.props.tabBarPosition,
        s = {
          goToPage: this.goToPage,
          tabs: this._children().map(function (t) {
            return t.props.tabLabel;
          }),
          activeTab: this.state.currentPage,
          scrollValue: this.state.scrollValue,
          containerWidth: this.state.containerWidth,
        };
      if (this.props.tabBarBackgroundColor) s.backgroundColor = this.props.tabBarBackgroundColor;
      if (this.props.tabBarActiveTextColor) s.activeTextColor = this.props.tabBarActiveTextColor;
      if (this.props.tabBarInactiveTextColor) s.inactiveTextColor = this.props.tabBarInactiveTextColor;
      if (this.props.tabBarTextStyle) s.textStyle = this.props.tabBarTextStyle;
      if (this.props.tabBarUnderlineStyle) s.underlineStyle = this.props.tabBarUnderlineStyle;
      if (n)
        s.style = module260(
          {
            position: 'absolute',
            left: 0,
            right: 0,
          },
          'overlayTop' === this.props.tabBarPosition ? 'top' : 'bottom',
          0
        );
      return React.createElement(
        u,
        {
          style: [C.container, this.props.style],
          onLayout: this._handleLayout,
        },
        'top' === this.props.tabBarPosition && this.renderTabBar(s),
        this.renderScrollableContent(),
        ('bottom' === this.props.tabBarPosition || n) && this.renderTabBar(s)
      );
    },
  });

module.exports = _;
var C = f.create({
  container: {
    flex: 1,
  },
  scrollableContentAndroid: {
    flex: 1,
  },
});
