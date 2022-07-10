require('./1028');

var module11 = require('@babel/runtime/helpers/interopRequireDefault')(require('./11')),
  ReactNative = require('react-native'),
  s = ReactNative.NativeModules.AnimationsDebugModule,
  module1032 = require('./1032'),
  module1033 = require('./1033'),
  module1044 = require('./1044'),
  module1053 = require('./1053'),
  module1027 = require('./1027'),
  React = require('react'),
  module1054 = require('./1054'),
  module1055 = require('./1055'),
  module1056 = require('./1056'),
  module1059 = require('./1059'),
  module1035 = require('./1035'),
  module1060 = require('./1060'),
  module1061 = require('./1061'),
  PropTypes = require('prop-types'),
  R = ReactNative.Dimensions.get('window').width,
  y = ReactNative.Dimensions.get('window').height,
  k = {
    pointerEvents: 'none',
    style: {
      top: y,
      bottom: -y,
      opacity: 0,
    },
  },
  C = 0;

function F(t) {
  if (null === t || 'object' != typeof t) return String(t);
  var n = '__navigatorRouteID';
  if (!t.hasOwnProperty(n))
    Object.defineProperty(t, n, {
      enumerable: false,
      configurable: false,
      writable: false,
      value: C++,
    });
  return t[n];
}

var T = {
    position: 'absolute',
    overflow: 'hidden',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  },
  w = {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    transform: [
      {
        translateX: 0,
      },
      {
        translateY: 0,
      },
      {
        scaleX: 1,
      },
      {
        scaleY: 1,
      },
      {
        rotate: '0deg',
      },
      {
        skewX: '0deg',
      },
      {
        skewY: '0deg',
      },
    ],
  },
  P = ReactNative.StyleSheet.create({
    container: {
      flex: 1,
      overflow: 'hidden',
    },
    defaultSceneStyle: w,
    baseScene: T,
    disabledScene: {
      top: y,
      bottom: -y,
    },
    transitioner: {
      flex: 1,
      backgroundColor: 'transparent',
      overflow: 'hidden',
    },
  }),
  A = ['pop', 'jumpBack', 'jumpForward'],
  V = module1056({
    displayName: 'Navigator',
    propTypes: {
      configureScene: PropTypes.func,
      renderScene: PropTypes.func.isRequired,
      initialRoute: PropTypes.object,
      initialRouteStack: PropTypes.arrayOf(PropTypes.object),
      onWillFocus: PropTypes.func,
      onDidFocus: PropTypes.func,
      navigationBar: PropTypes.node,
      navigator: PropTypes.object,
      sceneStyle: ReactNative.ViewPropTypes.style,
    },
    statics: {
      BreadcrumbNavigationBar: module1044,
      NavigationBar: module1053,
      SceneConfigs: module1027,
    },
    mixins: [module1055, module1032, module1054.Mixin],
    getDefaultProps: function () {
      return {
        configureScene: function () {
          return module1027.PushFromRight;
        },
        sceneStyle: w,
      };
    },
    getInitialState: function () {
      var t = this;
      this._navigationBarNavigator = this.props.navigationBarNavigator || this;
      this._renderedSceneMap = new Map();
      this._sceneRefs = [];
      var s = this.props.initialRouteStack || [this.props.initialRoute];
      module1035(s.length >= 1, 'Navigator requires props.initialRoute or props.initialRouteStack.');
      var o = s.length - 1;

      if (this.props.initialRoute) {
        o = s.indexOf(this.props.initialRoute);
        module1035(-1 !== o, 'initialRoute is not in initialRouteStack.');
      }

      this.__defineGetter__('navigationContext', this._getNavigationContext);

      this._subRouteFocus = [];
      this.parentNavigator = this.props.navigator;
      this._handlers = {};
      this.springSystem = new module1060.SpringSystem();
      this.spring = this.springSystem.createSpring();
      this.spring.setRestSpeedThreshold(0.05);
      this.spring.setCurrentValue(0).setAtRest();
      this.spring.addListener({
        onSpringEndStateChange: function () {
          if (!t._interactionHandle) t._interactionHandle = t.createInteractionHandle();
        },
        onSpringUpdate: function () {
          t._handleSpringUpdate();
        },
        onSpringAtRest: function () {
          t._completeTransition();
        },
      });
      this.panGesture = ReactNative.PanResponder.create({
        onMoveShouldSetPanResponder: this._handleMoveShouldSetPanResponder,
        onPanResponderRelease: this._handlePanResponderRelease,
        onPanResponderMove: this._handlePanResponderMove,
        onPanResponderTerminate: this._handlePanResponderTerminate,
      });
      this._interactionHandle = null;

      this._emitWillFocus(s[o]);

      return {
        sceneConfigStack: s.map(function (n) {
          return t.props.configureScene(n, s);
        }),
        routeStack: s,
        presentedIndex: o,
        transitionFromIndex: null,
        activeGesture: null,
        pendingGestureProgress: null,
        transitionQueue: [],
      };
    },
    componentDidMount: function () {
      this._isMounted = true;

      this._handleSpringUpdate();

      this._emitDidFocus(this.state.routeStack[this.state.presentedIndex]);

      this._enableTVEventHandler();
    },
    componentWillUnmount: function () {
      this._isMounted = false;

      if (this._navigationContext) {
        this._navigationContext.dispose();

        this._navigationContext = null;
      }

      this.spring.destroy();
      if (this._interactionHandle) this.clearInteractionHandle(this._interactionHandle);

      this._disableTVEventHandler();
    },
    immediatelyResetRouteStack: function (t) {
      var n = this,
        s = t.length - 1;

      this._emitWillFocus(t[s]);

      this.setState(
        {
          routeStack: t,
          sceneConfigStack: t.map(function (s) {
            return n.props.configureScene(s, t);
          }),
          presentedIndex: s,
          activeGesture: null,
          transitionFromIndex: null,
          transitionQueue: [],
        },
        function () {
          n._handleSpringUpdate();

          var t = n._navBar;
          if (t && t.immediatelyRefresh) t.immediatelyRefresh();

          n._emitDidFocus(n.state.routeStack[n.state.presentedIndex]);
        }
      );
    },
    _transitionTo: function (t, n, o, u) {
      if (this.state.presentedIndex !== t) {
        if (null === this.state.transitionFromIndex) {
          this.state.transitionFromIndex = this.state.presentedIndex;
          this.state.presentedIndex = t;
          this.state.transitionCb = u;

          this._onAnimationStart();

          if (s) s.startRecordingFps();
          var h = this.state.sceneConfigStack[this.state.transitionFromIndex] || this.state.sceneConfigStack[this.state.presentedIndex];
          module1035(h, 'Cannot configure scene at index ' + this.state.transitionFromIndex);
          if (null != o) this.spring.setCurrentValue(o);
          this.spring.setOvershootClampingEnabled(true);
          this.spring.getSpringConfig().friction = h.springFriction;
          this.spring.getSpringConfig().tension = h.springTension;
          this.spring.setVelocity(n || h.defaultTransitionVelocity);
          this.spring.setEndValue(1);
        } else
          this.state.transitionQueue.push({
            destIndex: t,
            velocity: n,
            cb: u,
          });
      } else u && u();
    },
    _handleSpringUpdate: function () {
      if (this._isMounted)
        if (null != this.state.transitionFromIndex) this._transitionBetween(this.state.transitionFromIndex, this.state.presentedIndex, this.spring.getCurrentValue());
        else if (null != this.state.activeGesture) {
          var t = this.state.presentedIndex + this._deltaForGestureAction(this.state.activeGesture);

          this._transitionBetween(this.state.presentedIndex, t, this.spring.getCurrentValue());
        }
    },
    _completeTransition: function () {
      if (this._isMounted)
        if (1 === this.spring.getCurrentValue() || 0 === this.spring.getCurrentValue()) {
          this._onAnimationEnd();

          var t = this.state.presentedIndex,
            n = this._subRouteFocus[t] || this.state.routeStack[t];

          if (
            (s && s.stopRecordingFps(Date.now()),
            (this.state.transitionFromIndex = null),
            this.spring.setCurrentValue(0).setAtRest(),
            this._hideScenes(),
            this.state.transitionCb && (this.state.transitionCb(), (this.state.transitionCb = null)),
            this._emitDidFocus(n),
            this._interactionHandle && (this.clearInteractionHandle(this._interactionHandle), (this._interactionHandle = null)),
            this.state.pendingGestureProgress)
          ) {
            var o = this.state.presentedIndex + this._deltaForGestureAction(this.state.activeGesture);

            this._enableScene(o);

            return void this.spring.setEndValue(this.state.pendingGestureProgress);
          }

          if (this.state.transitionQueue.length) {
            var u = this.state.transitionQueue.shift();

            this._enableScene(u.destIndex);

            this._emitWillFocus(this.state.routeStack[u.destIndex]);

            this._transitionTo(u.destIndex, u.velocity, null, u.cb);
          }
        } else this.state.pendingGestureProgress && (this.state.pendingGestureProgress = null);
    },
    _emitDidFocus: function (t) {
      this.navigationContext.emit('didfocus', {
        route: t,
      });
      if (this.props.onDidFocus) this.props.onDidFocus(t);
    },
    _emitWillFocus: function (t) {
      this.navigationContext.emit('willfocus', {
        route: t,
      });
      var n = this._navBar;
      if (n && n.handleWillFocus) n.handleWillFocus(t);
      if (this.props.onWillFocus) this.props.onWillFocus(t);
    },
    _hideScenes: function () {
      var t = null;
      if (this.state.activeGesture) t = this.state.presentedIndex + this._deltaForGestureAction(this.state.activeGesture);

      for (var n = 0; n < this.state.routeStack.length; n++) n !== this.state.presentedIndex && n !== this.state.transitionFromIndex && n !== t && this._disableScene(n);
    },
    _disableScene: function (t) {
      if (this._sceneRefs[t]) this._sceneRefs[t].setNativeProps(k);
    },
    _enableScene: function (t) {
      var n = module1061([T, this.props.sceneStyle]),
        s = {
          pointerEvents: 'auto',
          style: {
            top: n.top,
            bottom: n.bottom,
          },
        };
      if (t !== this.state.transitionFromIndex && t !== this.state.presentedIndex) s.style.opacity = 0;
      if (this._sceneRefs[t]) this._sceneRefs[t].setNativeProps(s);
    },
    _clearTransformations: function (t) {
      var n = module1061([w]);

      this._sceneRefs[t].setNativeProps({
        style: n,
      });
    },
    _onAnimationStart: function () {
      var t = this.state.presentedIndex,
        n = this.state.presentedIndex;
      if (null != this.state.transitionFromIndex) t = this.state.transitionFromIndex;
      else if (this.state.activeGesture) n = this.state.presentedIndex + this._deltaForGestureAction(this.state.activeGesture);

      this._setRenderSceneToHardwareTextureAndroid(t, true);

      this._setRenderSceneToHardwareTextureAndroid(n, true);

      var s = this._navBar;
      if (s && s.onAnimationStart) s.onAnimationStart(t, n);
    },
    _onAnimationEnd: function () {
      for (var t = this.state.routeStack.length - 1, n = 0; n <= t; n++) this._setRenderSceneToHardwareTextureAndroid(n, false);

      var s = this._navBar;
      if (s && s.onAnimationEnd) s.onAnimationEnd();
    },
    _setRenderSceneToHardwareTextureAndroid: function (t, n) {
      var s = this._sceneRefs[t];
      if (null !== s && undefined !== s)
        s.setNativeProps({
          renderToHardwareTextureAndroid: n,
        });
    },
    _handleTouchStart: function () {
      this._eligibleGestures = A;
    },
    _handleMoveShouldSetPanResponder: function (t, n) {
      var s = this.state.sceneConfigStack[this.state.presentedIndex];
      return !!s && ((this._expectingGestureGrant = this._matchGestureAction(this._eligibleGestures, s.gestures, n)), !!this._expectingGestureGrant);
    },
    _doesGestureOverswipe: function (t) {
      var n = this.state.presentedIndex <= 0 && ('pop' === t || 'jumpBack' === t);
      return this.state.presentedIndex >= this.state.routeStack.length - 1 ? 'jumpForward' === t : n;
    },
    _deltaForGestureAction: function (t) {
      switch (t) {
        case 'pop':
        case 'jumpBack':
          return -1;

        case 'jumpForward':
          return 1;

        default:
          return void module1035(false, 'Unsupported gesture action ' + t);
      }
    },
    _handlePanResponderRelease: function (t, n) {
      var s = this,
        o = this.state.sceneConfigStack[this.state.presentedIndex],
        u = this.state.activeGesture;

      if (u) {
        var h = o.gestures[u],
          c = this.state.presentedIndex + this._deltaForGestureAction(this.state.activeGesture);

        if (0 === this.spring.getCurrentValue()) {
          this.spring.setCurrentValue(0).setAtRest();
          return void this._completeTransition();
        }

        var l,
          p,
          v = 'top-to-bottom' === h.direction || 'bottom-to-top' === h.direction,
          f = 'right-to-left' === h.direction || 'bottom-to-top' === h.direction;

        if (v) {
          l = f ? -n.vy : n.vy;
          p = f ? -n.dy : n.dy;
        } else {
          l = f ? -n.vx : n.vx;
          p = f ? -n.dx : n.dx;
        }

        var _ = module1059(-10, l, 10);

        if (Math.abs(l) < h.notMoving) _ = p > h.fullDistance * h.stillCompletionRatio ? h.snapVelocity : -h.snapVelocity;

        if (_ < 0 || this._doesGestureOverswipe(u)) {
          if (null == this.state.transitionFromIndex) {
            var x = this.state.presentedIndex;
            this.state.presentedIndex = c;

            this._transitionTo(x, -_, 1 - this.spring.getCurrentValue());
          }
        } else {
          this._emitWillFocus(this.state.routeStack[c]);

          this._transitionTo(c, _, null, function () {
            if ('pop' === u) s._cleanScenesPastIndex(c);
          });
        }

        this._detachGesture();
      }
    },
    _handlePanResponderTerminate: function (t, n) {
      if (null != this.state.activeGesture) {
        var s = this.state.presentedIndex + this._deltaForGestureAction(this.state.activeGesture);

        this._detachGesture();

        var o = this.state.presentedIndex;
        this.state.presentedIndex = s;

        this._transitionTo(o, null, 1 - this.spring.getCurrentValue());
      }
    },
    _attachGesture: function (t) {
      this.state.activeGesture = t;

      var n = this.state.presentedIndex + this._deltaForGestureAction(this.state.activeGesture);

      this._enableScene(n);
    },
    _detachGesture: function () {
      this.state.activeGesture = null;
      this.state.pendingGestureProgress = null;

      this._hideScenes();
    },
    _handlePanResponderMove: function (t, n) {
      if (undefined !== this._isMoveGestureAttached) {
        module1035(this._expectingGestureGrant, 'Responder granted unexpectedly.');

        this._attachGesture(this._expectingGestureGrant);

        this._onAnimationStart();

        this._expectingGestureGrant = undefined;
      }

      var s = this.state.sceneConfigStack[this.state.presentedIndex];

      if (this.state.activeGesture) {
        var o = s.gestures[this.state.activeGesture];
        return this._moveAttachedGesture(o, n);
      }

      var u = this._matchGestureAction(A, s.gestures, n);

      if (u) this._attachGesture(u);
    },
    _moveAttachedGesture: function (t, n) {
      var s = 'top-to-bottom' === t.direction || 'bottom-to-top' === t.direction,
        o = 'right-to-left' === t.direction || 'bottom-to-top' === t.direction,
        u = s ? n.dy : n.dx;
      u = o ? -u : u;
      var h = t.gestureDetectMovement,
        c = (u - h) / (t.fullDistance - h);

      if (c < 0 && t.isDetachable) {
        var l = this.state.presentedIndex + this._deltaForGestureAction(this.state.activeGesture);

        this._transitionBetween(this.state.presentedIndex, l, 0);

        this._detachGesture();

        return void (null != this.state.pendingGestureProgress && this.spring.setCurrentValue(0));
      }

      if (t.overswipe && this._doesGestureOverswipe(this.state.activeGesture)) {
        var p = t.overswipe.frictionConstant,
          v = t.overswipe.frictionByDistance;
        c *= 1 / (p + Math.abs(c) * v);
      }

      c = module1059(0, c, 1);
      if (null != this.state.transitionFromIndex) this.state.pendingGestureProgress = c;
      else if (this.state.pendingGestureProgress) this.spring.setEndValue(c);
      else this.spring.setCurrentValue(c);
    },
    _matchGestureAction: function (t, n, s) {
      var o = this;
      if (!n || !t || !t.some) return null;
      var module1033 = null;
      t.some(function (t, h) {
        var c = n[t];

        if (c) {
          if (null == c.overswipe && o._doesGestureOverswipe(t)) return false;

          var l = 'top-to-bottom' === c.direction || 'bottom-to-top' === c.direction,
            p = 'right-to-left' === c.direction || 'bottom-to-top' === c.direction,
            v = l ? s.y0 : s.x0,
            f = l ? s.moveY : s.moveX,
            _ = l ? s.dy : s.dx,
            S = l ? s.dx : s.dy,
            x = c.edgeHitWidth;

          if ((p && ((v = -v), (f = -f), (_ = -_), (S = -S), (x = l ? -(y - x) : -(R - x))), 0 === v && (v = f), !(null == c.edgeHitWidth || v < x))) return false;
          if (!(_ >= c.gestureDetectMovement)) return false;

          if (Math.abs(_) > Math.abs(S) * c.directionRatio) {
            module1033 = t;
            return true;
          }

          o._eligibleGestures = o._eligibleGestures.slice().splice(h, 1);
        }
      });
      return module1033 || null;
    },
    _transitionSceneStyle: function (t, n, s, o) {
      var u = this._sceneRefs[o];

      if (null !== u && undefined !== u) {
        var h = t < n ? n : t,
          c = this.state.sceneConfigStack[h];
        if (!c) c = this.state.sceneConfigStack[h - 1];
        var l = {};
        if ((o < t || o < n ? c.animationInterpolators.out : c.animationInterpolators.into)(l, t < n ? s : 1 - s))
          u.setNativeProps({
            style: l,
          });
      }
    },
    _transitionBetween: function (t, n, s) {
      this._transitionSceneStyle(t, n, s, t);

      this._transitionSceneStyle(t, n, s, n);

      var o = this._navBar;
      if (o && o.updateProgress && n >= 0 && t >= 0) o.updateProgress(s, t, n);
    },
    _handleResponderTerminationRequest: function () {
      return false;
    },
    _getDestIndexWithinBounds: function (t) {
      var n = this.state.presentedIndex + t;
      module1035(n >= 0, 'Cannot jump before the first route.');
      var s = this.state.routeStack.length - 1;
      module1035(s >= n, 'Cannot jump past the last route.');
      return n;
    },
    _jumpN: function (t) {
      var n = this._getDestIndexWithinBounds(t);

      this._enableScene(n);

      this._emitWillFocus(this.state.routeStack[n]);

      this._transitionTo(n);
    },
    jumpTo: function (t) {
      var n = this.state.routeStack.indexOf(t);
      module1035(-1 !== n, 'Cannot jump to route that is not in the route stack');

      this._jumpN(n - this.state.presentedIndex);
    },
    jumpForward: function () {
      this._jumpN(1);
    },
    jumpBack: function () {
      this._jumpN(-1);
    },
    push: function (t) {
      var n = this;
      module1035(!!t, 'Must supply route to push');
      var s = this.state.presentedIndex + 1,
        o = this.state.routeStack.slice(0, s),
        u = this.state.sceneConfigStack.slice(0, s),
        h = o.concat([t]),
        c = h.length - 1,
        l = this.props.configureScene(t, h),
        p = u.concat([l]);

      this._emitWillFocus(h[c]);

      this.setState(
        {
          routeStack: h,
          sceneConfigStack: p,
        },
        function () {
          n._enableScene(c);

          n._transitionTo(c, l.defaultTransitionVelocity);
        }
      );
    },
    popN: function (t) {
      var n = this;

      if ((module1035('number' == typeof t, 'Must supply a number to popN'), !((t = parseInt(t, 10)) <= 0 || this.state.presentedIndex - t < 0))) {
        var s = this.state.presentedIndex - t,
          o = this.state.routeStack[this.state.presentedIndex],
          u = this.props.configureScene(o);

        this._enableScene(s);

        this._clearTransformations(s);

        this._emitWillFocus(this.state.routeStack[s]);

        this._transitionTo(s, u.defaultTransitionVelocity, null, function () {
          n._cleanScenesPastIndex(s);
        });
      }
    },
    pop: function () {
      if (!this.state.transitionQueue.length) this.popN(1);
    },
    replaceAtIndex: function (t, n, s) {
      var o = this;

      if ((module1035(!!t, 'Must supply route to replace'), n < 0 && (n += this.state.routeStack.length), !(this.state.routeStack.length <= n))) {
        var u = this.state.routeStack.slice(),
          h = this.state.sceneConfigStack.slice();
        u[n] = t;
        h[n] = this.props.configureScene(t, u);
        if (n === this.state.presentedIndex) this._emitWillFocus(t);
        this.setState(
          {
            routeStack: u,
            sceneConfigStack: h,
          },
          function () {
            if (n === o.state.presentedIndex) o._emitDidFocus(t);
            if (s) s();
          }
        );
      }
    },
    replace: function (t) {
      this.replaceAtIndex(t, this.state.presentedIndex);
    },
    replacePrevious: function (t) {
      this.replaceAtIndex(t, this.state.presentedIndex - 1);
    },
    popToTop: function () {
      this.popToRoute(this.state.routeStack[0]);
    },
    popToRoute: function (t) {
      var n = this.state.routeStack.indexOf(t);
      module1035(-1 !== n, "Calling popToRoute for a route that doesn't exist!");
      var s = this.state.presentedIndex - n;
      this.popN(s);
    },
    replacePreviousAndPop: function (t) {
      if (!(this.state.routeStack.length < 2)) {
        this.replacePrevious(t);
        this.pop();
      }
    },
    resetTo: function (t) {
      var n = this;
      module1035(!!t, 'Must supply route to push');
      this.replaceAtIndex(t, 0, function () {
        n.popN(n.state.presentedIndex);
      });
    },
    getCurrentRoutes: function () {
      return this.state.routeStack.slice();
    },
    _cleanScenesPastIndex: function (t) {
      var n = t + 1;
      if (n < this.state.routeStack.length)
        this.setState({
          sceneConfigStack: this.state.sceneConfigStack.slice(0, n),
          routeStack: this.state.routeStack.slice(0, n),
        });
    },
    _renderScene: function (t, s) {
      var o = this,
        u = null,
        h = 'auto';

      if (s !== this.state.presentedIndex) {
        u = P.disabledScene;
        h = 'none';
      }

      return (
        <ReactNative.View
          collapsable={false}
          key={'scene_' + F(t)}
          ref={function (t) {
            o._sceneRefs[s] = t;
          }}
          onStartShouldSetResponderCapture={function () {
            return null != o.state.transitionFromIndex;
          }}
          pointerEvents={h}
          style={[P.baseScene, this.props.sceneStyle, u]}
        >
          <t />
        </ReactNative.View>
      );
    },
    _renderNavigationBar: function () {
      var t = this,
        n = this.props.navigationBar;
      return n
        ? React.cloneElement(n, {
            ref: function (s) {
              t._navBar = s;
              if (n && 'function' == typeof n.ref) n.ref(s);
            },
            navigator: this._navigationBarNavigator,
            navState: this.state,
          })
        : null;
    },
    _tvEventHandler: ReactNative.TVEventHandler,
    _enableTVEventHandler: function () {
      if (ReactNative.TVEventHandler) {
        this._tvEventHandler = new ReactNative.TVEventHandler();

        this._tvEventHandler.enable(this, function (t, n) {
          if (n && 'menu' === n.eventType) t.pop();
        });
      }
    },
    _disableTVEventHandler: function () {
      if (this._tvEventHandler) {
        this._tvEventHandler.disable();

        delete this._tvEventHandler;
      }
    },
    render: function () {
      var s = this,
        o = new Map(),
        u = this.state.routeStack.map(function (t, n) {
          var u;
          u = s._renderedSceneMap.has(t) && n !== s.state.presentedIndex ? s._renderedSceneMap.get(t) : s._renderScene(t, n);
          o.set(t, u);
          return u;
        });
      this._renderedSceneMap = o;
      return React.createElement(
        ReactNative.View,
        {
          style: [P.container, this.props.style],
        },
        React.createElement(
          ReactNative.View,
          module11.default(
            {
              style: P.transitioner,
            },
            this.panGesture.panHandlers,
            {
              onTouchStart: this._handleTouchStart,
              onResponderTerminationRequest: this._handleResponderTerminationRequest,
            }
          ),
          u
        ),
        this._renderNavigationBar()
      );
    },
    _getNavigationContext: function () {
      if (!this._navigationContext) this._navigationContext = new module1033();
      return this._navigationContext;
    },
  });
module.exports = V;
