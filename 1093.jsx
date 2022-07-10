var React = require('react'),
  ReactNative = (ReactNative = require('react-native')).ViewPropTypes,
  PropTypes = require('prop-types'),
  module1083 = require('./1083'),
  l = ReactNative,
  u = l.View,
  h = l.Animated,
  c = l.StyleSheet,
  b = l.ScrollView,
  p = l.Text,
  y = l.Dimensions,
  module1092 = require('./1092'),
  _ = y.get('window').width,
  T = module1083({
    displayName: 'ScrollableTabBar',
    propTypes: {
      goToPage: PropTypes.func,
      activeTab: PropTypes.number,
      tabs: PropTypes.array,
      backgroundColor: PropTypes.string,
      activeTextColor: PropTypes.string,
      inactiveTextColor: PropTypes.string,
      scrollOffset: PropTypes.number,
      style: ReactNative.style,
      tabStyle: ReactNative.style,
      tabsContainerStyle: ReactNative.style,
      textStyle: p.propTypes.style,
      renderTab: PropTypes.func,
      underlineStyle: ReactNative.style,
      onScroll: PropTypes.func,
    },
    getDefaultProps: function () {
      return {
        scrollOffset: 52,
        activeTextColor: 'navy',
        inactiveTextColor: 'black',
        backgroundColor: null,
        style: {},
        tabStyle: {},
        tabsContainerStyle: {},
        underlineStyle: {},
      };
    },
    getInitialState: function () {
      this._tabsMeasurements = [];
      return {
        _leftTabUnderline: new h.Value(0),
        _widthTabUnderline: new h.Value(0),
        _containerWidth: null,
      };
    },
    componentDidMount: function () {
      this.props.scrollValue.addListener(this.updateView);
    },
    updateView: function (t) {
      var n = Math.floor(t.value),
        s = t.value % 1,
        o = this.props.tabs.length,
        l = o - 1;
      if (!(0 === o || t.value < 0 || t.value > l)) this.necessarilyMeasurementsCompleted(n, n === l) && (this.updateTabPanel(n, s), this.updateTabUnderline(n, s, o));
    },
    necessarilyMeasurementsCompleted: function (t, n) {
      return this._tabsMeasurements[t] && (n || this._tabsMeasurements[t + 1]) && this._tabContainerMeasurements && this._containerMeasurements;
    },
    updateTabPanel: function (t, n) {
      var s = this._containerMeasurements.width,
        o = this._tabsMeasurements[t].width,
        l = this._tabsMeasurements[t + 1],
        u = (l && l.width) || 0,
        h = this._tabsMeasurements[t].left + n * o;
      h = (h -= (s - (1 - n) * o - n * u) / 2) >= 0 ? h : 0;

      this._scrollView.scrollTo({
        x: h,
        y: 0,
        animated: false,
      });
    },
    updateTabUnderline: function (t, n, s) {
      var o = this._tabsMeasurements[t].left,
        l = this._tabsMeasurements[t].right;

      if (t < s - 1) {
        var u = n * this._tabsMeasurements[t + 1].left + (1 - n) * o,
          h = n * this._tabsMeasurements[t + 1].right + (1 - n) * l;

        this.state._leftTabUnderline.setValue(u);

        this.state._widthTabUnderline.setValue(h - u);
      } else {
        this.state._leftTabUnderline.setValue(o);

        this.state._widthTabUnderline.setValue(l - o);
      }
    },
    renderTab: function (n, s, o, l, h) {
      var c = this.props,
        b = c.activeTextColor,
        y = c.inactiveTextColor,
        _ = c.textStyle,
        T = o ? b : y,
        w = o ? 'bold' : 'normal';
      return (
        <module1092
          key={n + '_' + s}
          accessible
          accessibilityLabel={n}
          accessibilityTraits="button"
          onPress={function () {
            return l(s);
          }}
          onLayout={h}
        >
          <u style={[v.tab, this.props.tabStyle]}>
            <p
              style={[
                {
                  color: T,
                  fontWeight: w,
                },
                _,
              ]}
            >
              {n}
            </p>
          </u>
        </module1092>
      );
    },
    measureTab: function (t, n) {
      var s = n.nativeEvent.layout,
        o = s.x,
        l = s.width,
        u = s.height;
      this._tabsMeasurements[t] = {
        left: o,
        right: o + l,
        width: l,
        height: u,
      };
      this.updateView({
        value: this.props.scrollValue.__getValue(),
      });
    },
    render: function () {
      var n = this,
        s = {
          left: this.state._leftTabUnderline,
          width: this.state._widthTabUnderline,
        };
      return (
        <u
          style={[
            v.container,
            {
              backgroundColor: this.props.backgroundColor,
            },
            this.props.style,
          ]}
          onLayout={this.onContainerLayout}
        >
          <b
            ref={function (t) {
              n._scrollView = t;
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            directionalLockEnabled
            bounces={false}
            scrollsToTop={false}
          >
            <u
              style={[
                v.tabs,
                {
                  width: this.state._containerWidth,
                },
                this.props.tabsContainerStyle,
              ]}
              ref="tabContainer"
              onLayout={this.onTabContainerLayout}
            >
              {this.props.tabs.map(function (t, s) {
                var o = n.props.activeTab === s;
                return (n.props.renderTab || n.renderTab)(t, s, o, n.props.goToPage, n.measureTab.bind(n, s));
              })}
              <h.View
                style={[
                  {
                    position: 'absolute',
                    height: 4,
                    backgroundColor: 'navy',
                    bottom: 0,
                  },
                  s,
                  this.props.underlineStyle,
                ]}
              />
            </u>
          </b>
        </u>
      );
    },
    componentDidUpdate: function (t) {
      if (JSON.stringify(t.tabs) !== JSON.stringify(this.props.tabs) && this.state._containerWidth)
        this.setState({
          _containerWidth: null,
        });
    },
    onTabContainerLayout: function (t) {
      this._tabContainerMeasurements = t.nativeEvent.layout;
      var n = this._tabContainerMeasurements.width;
      if (n < _) n = _;
      this.setState({
        _containerWidth: n,
      });
      this.updateView({
        value: this.props.scrollValue.__getValue(),
      });
    },
    onContainerLayout: function (t) {
      this._containerMeasurements = t.nativeEvent.layout;
      this.updateView({
        value: this.props.scrollValue.__getValue(),
      });
    },
  });

module.exports = T;
var v = c.create({
  tab: {
    height: 49,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
  container: {
    height: 50,
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderColor: '#ccc',
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
