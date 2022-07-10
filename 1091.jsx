var React = require('react'),
  ReactNative = (ReactNative = require('react-native')).ViewPropTypes,
  PropTypes = require('prop-types'),
  module1083 = require('./1083'),
  l = ReactNative,
  c = l.StyleSheet,
  p = l.Text,
  b = l.View,
  u = l.Animated,
  module1092 = require('./1092'),
  h = module1083({
    displayName: 'DefaultTabBar',
    propTypes: {
      goToPage: PropTypes.func,
      activeTab: PropTypes.number,
      tabs: PropTypes.array,
      backgroundColor: PropTypes.string,
      activeTextColor: PropTypes.string,
      inactiveTextColor: PropTypes.string,
      textStyle: p.propTypes.style,
      tabStyle: ReactNative.style,
      renderTab: PropTypes.func,
      underlineStyle: ReactNative.style,
    },
    getDefaultProps: function () {
      return {
        activeTextColor: 'navy',
        inactiveTextColor: 'black',
        backgroundColor: null,
      };
    },
    renderTabOption: function (t, o) {},
    renderTab: function (o, n, s, l) {
      var c = this.props,
        u = c.activeTextColor,
        h = c.inactiveTextColor,
        f = c.textStyle,
        v = s ? u : h,
        C = s ? 'bold' : 'normal';
      return (
        <module1092
          style={{
            flex: 1,
          }}
          key={o}
          accessible
          accessibilityLabel={o}
          accessibilityTraits="button"
          onPress={function () {
            return l(n);
          }}
        >
          <b style={[T.tab, this.props.tabStyle]}>
            <p
              style={[
                {
                  color: v,
                  fontWeight: C,
                },
                f,
              ]}
            >
              {o}
            </p>
          </b>
        </module1092>
      );
    },
    render: function () {
      var o = this,
        n = this.props.containerWidth,
        s = this.props.tabs.length,
        l = {
          position: 'absolute',
          width: n / s,
          height: 4,
          backgroundColor: 'navy',
          bottom: 0,
        },
        c = this.props.scrollValue.interpolate({
          inputRange: [0, 1],
          outputRange: [0, n / s],
        });
      return (
        <b
          style={[
            T.tabs,
            {
              backgroundColor: this.props.backgroundColor,
            },
            this.props.style,
          ]}
        >
          {this.props.tabs.map(function (t, n) {
            var s = o.props.activeTab === n;
            return (o.props.renderTab || o.renderTab)(t, n, s, o.props.goToPage);
          })}
          <u.View
            style={[
              l,
              {
                transform: [
                  {
                    translateX: c,
                  },
                ],
              },
              this.props.underlineStyle,
            ]}
          />
        </b>
      );
    },
  }),
  T = c.create({
    tab: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingBottom: 10,
    },
    tabs: {
      height: 50,
      flexDirection: 'row',
      justifyContent: 'space-around',
      borderWidth: 1,
      borderTopWidth: 0,
      borderLeftWidth: 0,
      borderRightWidth: 0,
      borderColor: '#ccc',
    },
  });

module.exports = h;
