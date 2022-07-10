require('react');

require('./48');

var module274 = require('@babel/runtime/helpers/interopRequireDefault')(require('./274')),
  module59 = require('./59'),
  module275 = require('./275'),
  module277 = require('./277'),
  module84 = require('./84'),
  module173 = require('./173'),
  module44 = require('./44'),
  module3 = require('./3'),
  module125 = require('./125'),
  S = {
    Mixin: {
      _subscriptionKeyboardWillShow: null,
      _subscriptionKeyboardWillHide: null,
      _subscriptionKeyboardDidShow: null,
      _subscriptionKeyboardDidHide: null,
      scrollResponderMixinGetInitialState: function () {
        return {
          isTouching: false,
          lastMomentumScrollBeginTime: 0,
          lastMomentumScrollEndTime: 0,
          observedScrollSinceBecomingResponder: false,
          becameResponderWhileAnimating: false,
        };
      },
      scrollResponderHandleScrollShouldSetResponder: function () {
        return true !== this.props.disableScrollViewPanResponder && this.state.isTouching;
      },
      scrollResponderHandleStartShouldSetResponder: function (o) {
        if (true === this.props.disableScrollViewPanResponder) return false;
        var l = module173.currentlyFocusedInput();
        return 'handled' === this.props.keyboardShouldPersistTaps && null != l && o.target !== l;
      },
      scrollResponderHandleStartShouldSetResponderCapture: function (o) {
        if (this.scrollResponderIsAnimating()) return true;
        if (true === this.props.disableScrollViewPanResponder) return false;
        var l = module173.currentlyFocusedInput(),
          s = this.props.keyboardShouldPersistTaps,
          n = !s || 'never' === s;
        return 'number' != typeof o.target && !(!n || null == l || null == o.target || module173.isTextInput(o.target));
      },
      scrollResponderHandleResponderReject: function () {},
      scrollResponderHandleTerminationRequest: function () {
        return !this.state.observedScrollSinceBecomingResponder;
      },
      scrollResponderHandleTouchEnd: function (o) {
        var l = o.nativeEvent;
        this.state.isTouching = 0 !== l.touches.length;
        if (this.props.onTouchEnd) this.props.onTouchEnd(o);
      },
      scrollResponderHandleTouchCancel: function (o) {
        this.state.isTouching = false;
        if (this.props.onTouchCancel) this.props.onTouchCancel(o);
      },
      scrollResponderHandleResponderRelease: function (o) {
        if ((this.props.onResponderRelease && this.props.onResponderRelease(o), 'number' != typeof o.target)) {
          var l = module173.currentlyFocusedInput();

          if (
            !(
              true === this.props.keyboardShouldPersistTaps ||
              'always' === this.props.keyboardShouldPersistTaps ||
              null == l ||
              o.target === l ||
              this.state.observedScrollSinceBecomingResponder ||
              this.state.becameResponderWhileAnimating
            )
          ) {
            if (this.props.onScrollResponderKeyboardDismissed) this.props.onScrollResponderKeyboardDismissed(o);
            module173.blurTextInput(l);
          }
        }
      },
      scrollResponderHandleScroll: function (o) {
        this.state.observedScrollSinceBecomingResponder = true;
        if (this.props.onScroll) this.props.onScroll(o);
      },
      scrollResponderHandleResponderGrant: function (o) {
        this.state.observedScrollSinceBecomingResponder = false;
        if (this.props.onResponderGrant) this.props.onResponderGrant(o);
        this.state.becameResponderWhileAnimating = this.scrollResponderIsAnimating();
      },
      scrollResponderHandleScrollBeginDrag: function (o) {
        module275.beginScroll();
        if (this.props.onScrollBeginDrag) this.props.onScrollBeginDrag(o);
      },
      scrollResponderHandleScrollEndDrag: function (o) {
        var l = o.nativeEvent.velocity;
        if (!(this.scrollResponderIsAnimating() || (l && (0 !== l.x || 0 !== l.y)))) module275.endScroll();
        if (this.props.onScrollEndDrag) this.props.onScrollEndDrag(o);
      },
      scrollResponderHandleMomentumScrollBegin: function (o) {
        this.state.lastMomentumScrollBeginTime = module125();
        if (this.props.onMomentumScrollBegin) this.props.onMomentumScrollBegin(o);
      },
      scrollResponderHandleMomentumScrollEnd: function (o) {
        module275.endScroll();
        this.state.lastMomentumScrollEndTime = module125();
        if (this.props.onMomentumScrollEnd) this.props.onMomentumScrollEnd(o);
      },
      scrollResponderHandleTouchStart: function (o) {
        this.state.isTouching = true;
        if (this.props.onTouchStart) this.props.onTouchStart(o);
      },
      scrollResponderHandleTouchMove: function (o) {
        if (this.props.onTouchMove) this.props.onTouchMove(o);
      },
      scrollResponderIsAnimating: function () {
        return module125() - this.state.lastMomentumScrollEndTime < 16 || this.state.lastMomentumScrollEndTime < this.state.lastMomentumScrollBeginTime;
      },
      scrollResponderGetScrollableNode: function () {
        return this.getScrollableNode ? this.getScrollableNode() : module84.findNodeHandle(this);
      },
      scrollResponderScrollTo: function (l, s, n) {
        if ('number' == typeof l) console.warn('`scrollResponderScrollTo(x, y, animated)` is deprecated. Use `scrollResponderScrollTo({x: 5, y: 5, animated: true})` instead.');
        else {
          var t = l || {};
          l = t.x;
          s = t.y;
          n = t.animated;
        }
        module3(null != this.getNativeScrollRef, 'Expected scrollTo to be called on a scrollViewRef. If this exception occurs it is likely a bug in React Native');
        var c = this.getNativeScrollRef();
        if (null != c) module274.default.scrollTo(c, l || 0, s || 0, false !== n);
      },
      scrollResponderScrollToEnd: function (l) {
        var s = false !== (l && l.animated);
        module3(null != this.getNativeScrollRef, 'Expected scrollToEnd to be called on a scrollViewRef. If this exception occurs it is likely a bug in React Native');
        var n = this.getNativeScrollRef();
        if (null != n) module274.default.scrollToEnd(n, s);
      },
      scrollResponderZoomTo: function (l, s) {
        module3(false, 'zoomToRect is not implemented');

        if ('animated' in l) {
          s = l.animated;
          delete l.animated;
        } else if (undefined !== s) console.warn('`scrollResponderZoomTo` `animated` argument is deprecated. Use `options.animated` instead');

        module3(null != this.getNativeScrollRef, 'Expected zoomToRect to be called on a scrollViewRef. If this exception occurs it is likely a bug in React Native');
        var n = this.getNativeScrollRef();
        if (null != n) module274.default.zoomToRect(n, l, false !== s);
      },
      scrollResponderFlashScrollIndicators: function () {
        module3(null != this.getNativeScrollRef, 'Expected flashScrollIndicators to be called on a scrollViewRef. If this exception occurs it is likely a bug in React Native');
        var l = this.getNativeScrollRef();
        if (null != l) module274.default.flashScrollIndicators(l);
      },
      scrollResponderScrollNativeHandleToKeyboard: function (o, l, s) {
        if (((this.additionalScrollOffset = l || 0), (this.preventNegativeScrollOffset = !!s), 'number' == typeof o))
          module44.measureLayout(o, module84.findNodeHandle(this.getInnerViewNode()), this.scrollResponderTextInputFocusError, this.scrollResponderInputMeasureAndScrollToKeyboard);
        else {
          var n = this.getInnerViewRef();
          if (null == n) return;
          o.measureLayout(n, this.scrollResponderInputMeasureAndScrollToKeyboard, this.scrollResponderTextInputFocusError);
        }
      },
      scrollResponderInputMeasureAndScrollToKeyboard: function (o, s, n, t) {
        var c = module59.get('window').height;
        if (this.keyboardWillOpenTo) c = this.keyboardWillOpenTo.endCoordinates.screenY;
        var p = s - c + t + this.additionalScrollOffset;
        if (this.preventNegativeScrollOffset) p = 0 ** p;
        this.scrollResponderScrollTo({
          x: 0,
          y: p,
          animated: true,
        });
        this.additionalOffset = 0;
        this.preventNegativeScrollOffset = false;
      },
      scrollResponderTextInputFocusError: function (o) {
        console.error('Error measuring text field: ', o);
      },
      UNSAFE_componentWillMount: function () {
        var o = this.props.keyboardShouldPersistTaps;
        if ('boolean' == typeof o)
          console.warn(
            "'keyboardShouldPersistTaps={" + (true === o ? 'true' : 'false') + "}' is deprecated. Use 'keyboardShouldPersistTaps=\"" + (o ? 'always' : 'never') + '"\' instead'
          );
        this.keyboardWillOpenTo = null;
        this.additionalScrollOffset = 0;
        this._subscriptionKeyboardWillShow = module277.addListener('keyboardWillShow', this.scrollResponderKeyboardWillShow);
        this._subscriptionKeyboardWillHide = module277.addListener('keyboardWillHide', this.scrollResponderKeyboardWillHide);
        this._subscriptionKeyboardDidShow = module277.addListener('keyboardDidShow', this.scrollResponderKeyboardDidShow);
        this._subscriptionKeyboardDidHide = module277.addListener('keyboardDidHide', this.scrollResponderKeyboardDidHide);
      },
      componentWillUnmount: function () {
        if (null != this._subscriptionKeyboardWillShow) this._subscriptionKeyboardWillShow.remove();
        if (null != this._subscriptionKeyboardWillHide) this._subscriptionKeyboardWillHide.remove();
        if (null != this._subscriptionKeyboardDidShow) this._subscriptionKeyboardDidShow.remove();
        if (null != this._subscriptionKeyboardDidHide) this._subscriptionKeyboardDidHide.remove();
      },
      scrollResponderKeyboardWillShow: function (o) {
        this.keyboardWillOpenTo = o;
        if (this.props.onKeyboardWillShow) this.props.onKeyboardWillShow(o);
      },
      scrollResponderKeyboardWillHide: function (o) {
        this.keyboardWillOpenTo = null;
        if (this.props.onKeyboardWillHide) this.props.onKeyboardWillHide(o);
      },
      scrollResponderKeyboardDidShow: function (o) {
        if (o) this.keyboardWillOpenTo = o;
        if (this.props.onKeyboardDidShow) this.props.onKeyboardDidShow(o);
      },
      scrollResponderKeyboardDidHide: function (o) {
        this.keyboardWillOpenTo = null;
        if (this.props.onKeyboardDidHide) this.props.onKeyboardDidHide(o);
      },
    },
  };

module.exports = S;
