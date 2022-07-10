var t =
    Object.assign ||
    function (t) {
      for (var n = 1; n < arguments.length; n++) {
        var o = arguments[n];

        for (var s in o) Object.prototype.hasOwnProperty.call(o, s) && (t[s] = o[s]);
      }

      return t;
    },
  module1104 = require('./1104'),
  module1105 = require('./1105'),
  module1106 = require('./1106'),
  React = require('react'),
  PropTypes = require('prop-types'),
  module1083 = require('./1083'),
  ReactNative = require('react-native');

var c = module1083.default({
    displayName: 'SwipeoutBtn',
    propTypes: {
      backgroundColor: PropTypes.default.string,
      color: PropTypes.default.string,
      component: PropTypes.default.node,
      onPress: PropTypes.default.func,
      text: PropTypes.default.node,
      type: PropTypes.default.string,
      underlayColor: PropTypes.default.string,
    },
    getDefaultProps: function () {
      return {
        backgroundColor: null,
        color: null,
        component: null,
        underlayColor: null,
        height: 0,
        onPress: null,
        disabled: false,
        text: 'Click me',
        type: '',
        width: 0,
      };
    },
    render: function () {
      var t = this.props,
        n = [module1106.default.swipeoutBtn];
      if ('delete' === t.type) n.push(module1106.default.colorDelete);
      else if ('primary' === t.type) n.push(module1106.default.colorPrimary);
      else if ('secondary' === t.type) n.push(module1106.default.colorSecondary);
      if (t.backgroundColor)
        n.push([
          {
            backgroundColor: t.backgroundColor,
          },
        ]);
      n.push([
        {
          height: t.height,
          width: t.width,
        },
      ]);
      var p = [];
      p.push([
        {
          height: t.height,
          width: t.width,
        },
      ]);
      var l = [module1106.default.swipeoutBtnText];
      if (t.color)
        l.push({
          color: t.color,
        });
      return React.default.createElement(
        module1105.default,
        {
          onPress: this.props.onPress,
          underlayColor: this.props.underlayColor,
          disabled: this.props.disabled,
          style: [module1106.default.swipeoutBtnTouchable, n],
          textStyle: l,
        },
        t.component
          ? React.default.createElement(
              ReactNative.View,
              {
                style: p,
              },
              t.component
            )
          : t.text
      );
    },
  }),
  b = module1083.default({
    displayName: 'Swipeout',
    mixins: [module1104.default.Mixin],
    propTypes: {
      autoClose: PropTypes.default.bool,
      backgroundColor: PropTypes.default.string,
      close: PropTypes.default.bool,
      left: PropTypes.default.array,
      onOpen: PropTypes.default.func,
      onClose: PropTypes.default.func,
      right: PropTypes.default.array,
      scroll: PropTypes.default.func,
      style: (ReactNative.ViewPropTypes || ReactNative.View.propTypes).style,
      sensitivity: PropTypes.default.number,
      buttonWidth: PropTypes.default.number,
      disabled: PropTypes.default.bool,
    },
    getDefaultProps: function () {
      return {
        disabled: false,
        rowID: -1,
        sectionID: -1,
        sensitivity: 50,
      };
    },
    getInitialState: function () {
      return {
        autoClose: this.props.autoClose || false,
        btnWidth: 0,
        btnsLeftWidth: 0,
        btnsRightWidth: 0,
        contentHeight: 0,
        contentPos: 0,
        contentWidth: 0,
        openedRight: false,
        swiping: false,
        tweenDuration: 160,
        timeStart: null,
      };
    },
    UNSAFE_componentWillMount: function () {
      var t = this;
      this._panResponder = ReactNative.PanResponder.create({
        onStartShouldSetPanResponder: function (t, n) {
          return true;
        },
        onStartShouldSetPanResponderCapture: function (n, o) {
          return t.state.openedLeft || t.state.openedRight;
        },
        onMoveShouldSetPanResponderCapture: function (n, o) {
          return Math.abs(o.dx) > t.props.sensitivity && Math.abs(o.dy) <= t.props.sensitivity;
        },
        onPanResponderGrant: this._handlePanResponderGrant,
        onPanResponderMove: this._handlePanResponderMove,
        onPanResponderRelease: this._handlePanResponderEnd,
        onPanResponderTerminate: this._handlePanResponderEnd,
        onShouldBlockNativeResponder: function (t, n) {
          return false;
        },
        onPanResponderTerminationRequest: function () {
          return false;
        },
      });
    },
    UNSAFE_componentWillReceiveProps: function (t) {
      if (t.close) this._close();
      if (t.openRight) this._openRight();
      if (t.openLeft) this._openLeft();
    },
    _handlePanResponderGrant: function (t, n) {
      var o = this;

      if (!this.props.disabled) {
        if (this.state.openedLeft || this.state.openedRight) this._callOnClose();
        else this._callOnOpen();
        this.refs.swipeoutContent.measure(function (t, n, s, h) {
          var p = o.props.buttonWidth || s / 5;
          o.setState({
            btnWidth: p,
            btnsLeftWidth: o.props.left ? p * o.props.left.length : 0,
            btnsRightWidth: o.props.right ? p * o.props.right.length : 0,
            swiping: true,
            timeStart: new Date().getTime(),
          });
        });
      }
    },
    _handlePanResponderMove: function (t, n) {
      if (!this.props.disabled) {
        var o = n.dx,
          s = n.dy,
          h = this.state.btnsLeftWidth,
          p = this.state.btnsRightWidth;
        if (this.state.openedRight) o = n.dx - p;
        else if (this.state.openedLeft) o = n.dx + h;
        var l = Math.abs(o) > Math.abs(s);
        if (this.props.scroll) l ? this.props.scroll(false) : this.props.scroll(true);
        if (this.state.swiping)
          o < 0 && this.props.right
            ? this.setState({
                contentPos: o ** 0,
              })
            : o > 0 &&
              this.props.left &&
              this.setState({
                contentPos: o ** 0,
              });
      }
    },
    _handlePanResponderEnd: function (t, n) {
      if (!this.props.disabled) {
        var o = n.dx,
          s = this.state.contentPos,
          h = this.state.contentWidth,
          p = this.state.btnsLeftWidth,
          l = this.state.btnsRightWidth,
          u = 0.33 * h,
          f = o > u || o > p / 2,
          c = o < -u || o < -l / 2;
        if (this.state.openedRight) c = o - u < -u;
        if (this.state.openedLeft) f = o + u > u;

        if (new Date().getTime() - this.state.timeStart < 200) {
          c = o < -u / 10 && !this.state.openedLeft;
          f = o > u / 10 && !this.state.openedRight;
        }

        if (this.state.swiping) c && s < 0 && o < 0 ? this._open(-l, 'right') : f && s > 0 && o > 0 ? this._open(p, 'left') : this._close();
        if (this.props.scroll) this.props.scroll(true);
      }
    },
    _tweenContent: function (t, o) {
      this.tweenState(t, {
        easing: module1104.default.easingTypes.easeInOutQuad,
        duration: 0 === o ? 1.5 * this.state.tweenDuration : this.state.tweenDuration,
        endValue: o,
      });
    },
    _rubberBandEasing: function (t, n) {
      return t < 0 && t < n ? n - (n - t) ** 0.85 : t > 0 && t > n ? n + (t - n) ** 0.85 : t;
    },
    _autoClose: function (t) {
      if (this.state.autoClose) this._close();
      var n = t.onPress;
      if (n) n();
    },
    _open: function (t, n) {
      var o = 'left' === n,
        s = this.props,
        h = s.sectionID,
        p = s.rowID,
        l = s.onOpen;
      if (l) l(h, p, n);

      this._tweenContent('contentPos', t);

      this.setState({
        contentPos: t,
        openedLeft: o,
        openedRight: !o,
        swiping: false,
      });
    },
    _close: function () {
      var t = this.props,
        n = t.sectionID,
        o = t.rowID,
        s = t.onClose;
      if (s && (this.state.openedLeft || this.state.openedRight)) s(n, o, this.state.openedRight ? 'right' : 'left');

      this._tweenContent('contentPos', 0);

      this._callOnClose();

      this.setState({
        openedRight: false,
        openedLeft: false,
        swiping: false,
      });
    },
    _callOnClose: function () {
      if (this.props.onClose) this.props.onClose(this.props.sectionID, this.props.rowID);
    },
    _callOnOpen: function () {
      if (this.props.onOpen) this.props.onOpen(this.props.sectionID, this.props.rowID);
    },
    _openRight: function () {
      var t = this;
      this.refs.swipeoutContent.measure(function (n, o, s, h) {
        var p = t.props.buttonWidth || s / 5;
        t.setState(
          {
            btnWidth: p,
            btnsRightWidth: t.props.right ? p * t.props.right.length : 0,
          },
          function () {
            t._tweenContent('contentPos', -t.state.btnsRightWidth);

            t._callOnOpen();

            t.setState({
              contentPos: -t.state.btnsRightWidth,
              openedLeft: false,
              openedRight: true,
              swiping: false,
            });
          }
        );
      });
    },
    _openLeft: function () {
      var t = this;
      this.refs.swipeoutContent.measure(function (n, o, s, h) {
        var p = t.props.buttonWidth || s / 5;
        t.setState(
          {
            btnWidth: p,
            btnsLeftWidth: t.props.left ? p * t.props.left.length : 0,
          },
          function () {
            t._tweenContent('contentPos', t.state.btnsLeftWidth);

            t._callOnOpen();

            t.setState({
              contentPos: t.state.btnsLeftWidth,
              openedLeft: true,
              openedRight: false,
              swiping: false,
            });
          }
        );
      });
    },
    render: function () {
      var n = this.state.contentWidth,
        o = this.getTweeningValue('contentPos'),
        p = [module1106.default.swipeout, this.props.style];
      if (this.props.backgroundColor)
        p.push([
          {
            backgroundColor: this.props.backgroundColor,
          },
        ]);
      var l = -this.state.btnsRightWidth;
      if (o > 0) l = this.state.btnsLeftWidth;
      var f = {
          left: {
            left: 0,
            overflow: 'hidden',
            width: (l * (o / l)) ** l,
          },
        },
        c = {
          right: {
            left: Math.abs(n + l ** o),
            right: 0,
          },
        },
        b = {
          content: {
            transform: [
              {
                translateX: this._rubberBandEasing(o, l),
              },
            ],
          },
        },
        w = [module1106.default.swipeoutContent];
      w.push(b.content);
      var _ = [module1106.default.swipeoutBtns];

      _.push(c.right);

      var y = [module1106.default.swipeoutBtns];
      y.push(f.left);
      var R = o < 0,
        v = o > 0;
      return React.default.createElement(
        ReactNative.View,
        {
          style: p,
        },
        React.default.createElement(
          ReactNative.View,
          t(
            {
              ref: 'swipeoutContent',
              style: w,
              onLayout: this._onLayout,
            },
            this._panResponder.panHandlers
          ),
          this.props.children
        ),
        this._renderButtons(this.props.right, R, _),
        this._renderButtons(this.props.left, v, y)
      );
    },
    _onLayout: function (t) {
      var n = t.nativeEvent.layout,
        o = n.width,
        s = n.height;
      this.setState({
        contentWidth: o,
        contentHeight: s,
      });
    },
    _renderButtons: function (t, n, o) {
      return t && n
        ? React.default.createElement(
            ReactNative.View,
            {
              style: o,
            },
            t.map(this._renderButton)
          )
        : React.default.createElement(ReactNative.View, null);
    },
    _renderButton: function (t, n) {
      var o = this;
      return React.default.createElement(c, {
        backgroundColor: t.backgroundColor,
        color: t.color,
        component: t.component,
        disabled: t.disabled,
        height: this.state.contentHeight,
        key: n,
        onPress: function () {
          return o._autoClose(t);
        },
        text: t.text,
        type: t.type,
        underlayColor: t.underlayColor,
        width: this.state.btnWidth,
      });
    },
  });
b.NativeButton = module1105.default;
b.SwipeoutButton = c;
exports.default = b;
