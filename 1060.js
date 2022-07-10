!(function () {
  var t = {},
    n = (t.util = {}),
    s = Array.prototype.concat,
    o = Array.prototype.slice;

  n.bind = function (t, n) {
    var h = o.call(arguments, 2);
    return function () {
      t.apply(n, s.call(h, o.call(arguments)));
    };
  };

  n.extend = function (t, n) {
    for (var s in n) n.hasOwnProperty(s) && (t[s] = n[s]);
  };

  var h = (t.SpringSystem = function (t) {
    this._springRegistry = {};
    this._activeSprings = [];
    this.listeners = [];
    this._idleSpringIndices = [];
    this.looper = t || new p();
    this.looper.springSystem = this;
  });

  n.extend(h.prototype, {
    _springRegistry: null,
    _isIdle: true,
    _lastTimeMillis: -1,
    _activeSprings: null,
    listeners: null,
    _idleSpringIndices: null,
    setLooper: function (t) {
      this.looper = t;
      t.springSystem = this;
    },
    createSpring: function (t, n) {
      var s;
      s = undefined === t || undefined === n ? c.DEFAULT_ORIGAMI_SPRING_CONFIG : c.fromOrigamiTensionAndFriction(t, n);
      return this.createSpringWithConfig(s);
    },
    createSpringWithBouncinessAndSpeed: function (t, n) {
      var s;
      s = undefined === t || undefined === n ? c.DEFAULT_ORIGAMI_SPRING_CONFIG : c.fromBouncinessAndSpeed(t, n);
      return this.createSpringWithConfig(s);
    },
    createSpringWithConfig: function (t) {
      var n = new u(this);
      this.registerSpring(n);
      n.setSpringConfig(t);
      return n;
    },
    getIsIdle: function () {
      return this._isIdle;
    },
    getSpringById: function (t) {
      return this._springRegistry[t];
    },
    getAllSprings: function () {
      var t = [];

      for (var n in this._springRegistry) this._springRegistry.hasOwnProperty(n) && t.push(this._springRegistry[n]);

      return t;
    },
    registerSpring: function (t) {
      this._springRegistry[t.getId()] = t;
    },
    deregisterSpring: function (t) {
      I(this._activeSprings, t);
      delete this._springRegistry[t.getId()];
    },
    advance: function (t, n) {
      for (; this._idleSpringIndices.length > 0; ) this._idleSpringIndices.pop();

      for (var s = 0, o = this._activeSprings.length; s < o; s++) {
        var h = this._activeSprings[s];
        if (h.systemShouldAdvance()) h.advance(t / 1e3, n / 1e3);
        else this._idleSpringIndices.push(this._activeSprings.indexOf(h));
      }

      for (; this._idleSpringIndices.length > 0; ) {
        var u = this._idleSpringIndices.pop();

        if (u >= 0) this._activeSprings.splice(u, 1);
      }
    },
    loop: function (t) {
      var n;
      if (-1 === this._lastTimeMillis) this._lastTimeMillis = t - 1;
      var s = t - this._lastTimeMillis;
      this._lastTimeMillis = t;
      var o = 0,
        h = this.listeners.length;

      for (o = 0; o < h; o++) (n = this.listeners[o]).onBeforeIntegrate && n.onBeforeIntegrate(this);

      for (this.advance(t, s), 0 === this._activeSprings.length && ((this._isIdle = true), (this._lastTimeMillis = -1)), o = 0; o < h; o++)
        (n = this.listeners[o]).onAfterIntegrate && n.onAfterIntegrate(this);

      if (!this._isIdle) this.looper.run();
    },
    activateSpring: function (t) {
      var n = this._springRegistry[t];
      if (-1 == this._activeSprings.indexOf(n)) this._activeSprings.push(n);

      if (this.getIsIdle()) {
        this._isIdle = false;
        this.looper.run();
      }
    },
    addListener: function (t) {
      this.listeners.push(t);
    },
    removeListener: function (t) {
      I(this.listeners, t);
    },
    removeAllListeners: function () {
      this.listeners = [];
    },
  });

  var u = (t.Spring = function t(n) {
    this._id = 's' + t._ID++;
    this._springSystem = n;
    this.listeners = [];
    this._currentState = new l();
    this._previousState = new l();
    this._tempState = new l();
  });

  n.extend(u, {
    _ID: 0,
    MAX_DELTA_TIME_SEC: 0.064,
    SOLVER_TIMESTEP_SEC: 0.001,
  });
  n.extend(u.prototype, {
    _id: 0,
    _springConfig: null,
    _overshootClampingEnabled: false,
    _currentState: null,
    _previousState: null,
    _tempState: null,
    _startValue: 0,
    _endValue: 0,
    _wasAtRest: true,
    _restSpeedThreshold: 0.001,
    _displacementFromRestThreshold: 0.001,
    listeners: null,
    _timeAccumulator: 0,
    _springSystem: null,
    destroy: function () {
      this.listeners = [];
      this.frames = [];

      this._springSystem.deregisterSpring(this);
    },
    getId: function () {
      return this._id;
    },
    setSpringConfig: function (t) {
      this._springConfig = t;
      return this;
    },
    getSpringConfig: function () {
      return this._springConfig;
    },
    setCurrentValue: function (t, n) {
      this._startValue = t;
      this._currentState.position = t;
      if (!n) this.setAtRest();
      this.notifyPositionUpdated(false, false);
      return this;
    },
    getStartValue: function () {
      return this._startValue;
    },
    getCurrentValue: function () {
      return this._currentState.position;
    },
    getCurrentDisplacementDistance: function () {
      return this.getDisplacementDistanceForState(this._currentState);
    },
    getDisplacementDistanceForState: function (t) {
      return Math.abs(this._endValue - t.position);
    },
    setEndValue: function (t) {
      if (this._endValue == t && this.isAtRest()) return this;
      this._startValue = this.getCurrentValue();
      this._endValue = t;

      this._springSystem.activateSpring(this.getId());

      for (var n = 0, s = this.listeners.length; n < s; n++) {
        var o = this.listeners[n].onSpringEndStateChange;
        if (o) o(this);
      }

      return this;
    },
    getEndValue: function () {
      return this._endValue;
    },
    setVelocity: function (t) {
      if (t === this._currentState.velocity) return this;
      else {
        this._currentState.velocity = t;

        this._springSystem.activateSpring(this.getId());

        return this;
      }
    },
    getVelocity: function () {
      return this._currentState.velocity;
    },
    setRestSpeedThreshold: function (t) {
      this._restSpeedThreshold = t;
      return this;
    },
    getRestSpeedThreshold: function () {
      return this._restSpeedThreshold;
    },
    setRestDisplacementThreshold: function (t) {
      this._displacementFromRestThreshold = t;
    },
    getRestDisplacementThreshold: function () {
      return this._displacementFromRestThreshold;
    },
    setOvershootClampingEnabled: function (t) {
      this._overshootClampingEnabled = t;
      return this;
    },
    isOvershootClampingEnabled: function () {
      return this._overshootClampingEnabled;
    },
    isOvershooting: function () {
      var t = this._startValue,
        n = this._endValue;
      return this._springConfig.tension > 0 && ((t < n && this.getCurrentValue() > n) || (t > n && this.getCurrentValue() < n));
    },
    advance: function (t, n) {
      var s = this.isAtRest();

      if (!s || !this._wasAtRest) {
        var o = n;
        if (n > u.MAX_DELTA_TIME_SEC) o = u.MAX_DELTA_TIME_SEC;
        this._timeAccumulator += o;

        for (
          var h,
            l,
            c,
            p,
            _,
            S,
            f,
            v,
            E = this._springConfig.tension,
            I = this._springConfig.friction,
            y = this._currentState.position,
            T = this._currentState.velocity,
            R = this._tempState.position,
            A = this._tempState.velocity;
          this._timeAccumulator >= u.SOLVER_TIMESTEP_SEC;

        ) {
          this._timeAccumulator -= u.SOLVER_TIMESTEP_SEC;

          if (this._timeAccumulator < u.SOLVER_TIMESTEP_SEC) {
            this._previousState.position = y;
            this._previousState.velocity = T;
          }

          h = T;
          l = E * (this._endValue - R) - I * T;
          R = y + h * u.SOLVER_TIMESTEP_SEC * 0.5;
          c = A = T + l * u.SOLVER_TIMESTEP_SEC * 0.5;
          p = E * (this._endValue - R) - I * A;
          R = y + c * u.SOLVER_TIMESTEP_SEC * 0.5;
          _ = A = T + p * u.SOLVER_TIMESTEP_SEC * 0.5;
          S = E * (this._endValue - R) - I * A;
          R = y + _ * u.SOLVER_TIMESTEP_SEC * 0.5;
          f = A = T + S * u.SOLVER_TIMESTEP_SEC * 0.5;
          v = 0.16666666666666666 * (l + 2 * (p + S) + (E * (this._endValue - R) - I * A));
          y += 0.16666666666666666 * (h + 2 * (c + _) + f) * u.SOLVER_TIMESTEP_SEC;
          T += v * u.SOLVER_TIMESTEP_SEC;
        }

        this._tempState.position = R;
        this._tempState.velocity = A;
        this._currentState.position = y;
        this._currentState.velocity = T;
        if (this._timeAccumulator > 0) this._interpolate(this._timeAccumulator / u.SOLVER_TIMESTEP_SEC);

        if (this.isAtRest() || (this._overshootClampingEnabled && this.isOvershooting())) {
          if (this._springConfig.tension > 0) {
            this._startValue = this._endValue;
            this._currentState.position = this._endValue;
          } else {
            this._endValue = this._currentState.position;
            this._startValue = this._endValue;
          }

          this.setVelocity(0);
          s = true;
        }

        var V = false;

        if (this._wasAtRest) {
          this._wasAtRest = false;
          V = true;
        }

        var C = false;

        if (s) {
          this._wasAtRest = true;
          C = true;
        }

        this.notifyPositionUpdated(V, C);
      }
    },
    notifyPositionUpdated: function (t, n) {
      for (var s = 0, o = this.listeners.length; s < o; s++) {
        var h = this.listeners[s];
        if (t && h.onSpringActivate) h.onSpringActivate(this);
        if (h.onSpringUpdate) h.onSpringUpdate(this);
        if (n && h.onSpringAtRest) h.onSpringAtRest(this);
      }
    },
    systemShouldAdvance: function () {
      return !this.isAtRest() || !this.wasAtRest();
    },
    wasAtRest: function () {
      return this._wasAtRest;
    },
    isAtRest: function () {
      return (
        Math.abs(this._currentState.velocity) < this._restSpeedThreshold &&
        (this.getDisplacementDistanceForState(this._currentState) <= this._displacementFromRestThreshold || 0 === this._springConfig.tension)
      );
    },
    setAtRest: function () {
      this._endValue = this._currentState.position;
      this._tempState.position = this._currentState.position;
      this._currentState.velocity = 0;
      return this;
    },
    _interpolate: function (t) {
      this._currentState.position = this._currentState.position * t + this._previousState.position * (1 - t);
      this._currentState.velocity = this._currentState.velocity * t + this._previousState.velocity * (1 - t);
    },
    getListeners: function () {
      return this.listeners;
    },
    addListener: function (t) {
      this.listeners.push(t);
      return this;
    },
    removeListener: function (t) {
      I(this.listeners, t);
      return this;
    },
    removeAllListeners: function () {
      this.listeners = [];
      return this;
    },
    currentValueIsApproximately: function (t) {
      return Math.abs(this.getCurrentValue() - t) <= this.getRestDisplacementThreshold();
    },
  });

  var l = function () {};

  n.extend(l.prototype, {
    position: 0,
    velocity: 0,
  });

  var c = (t.SpringConfig = function (t, n) {
      this.tension = t;
      this.friction = n;
    }),
    p = (t.AnimationLooper = function () {
      this.springSystem = null;

      var t = this,
        s = function () {
          t.springSystem.loop(Date.now());
        };

      this.run = function () {
        n.onFrame(s);
      };
    });

  t.SimulationLooper = function (t) {
    this.springSystem = null;
    var n = 0,
      s = false;
    t = t || 16.667;

    this.run = function () {
      if (!s) {
        for (s = true; !this.springSystem.getIsIdle(); ) this.springSystem.loop((n += t));

        s = false;
      }
    };
  };

  t.SteppingSimulationLooper = function (t) {
    this.springSystem = null;
    var n = 0;

    this.run = function () {};

    this.step = function (t) {
      this.springSystem.loop((n += t));
    };
  };

  var _ = (t.OrigamiValueConverter = {
      tensionFromOrigamiValue: function (t) {
        return 3.62 * (t - 30) + 194;
      },
      origamiValueFromTension: function (t) {
        return (t - 194) / 3.62 + 30;
      },
      frictionFromOrigamiValue: function (t) {
        return 3 * (t - 8) + 25;
      },
      origamiFromFriction: function (t) {
        return (t - 25) / 3 + 8;
      },
    }),
    S = (t.BouncyConversion = function (t, n) {
      this.bounciness = t;
      this.speed = n;
      var s = this.normalize(t / 1.7, 0, 20);
      s = this.projectNormal(s, 0, 0.8);
      var o = this.normalize(n / 1.7, 0, 20);
      this.bouncyTension = this.projectNormal(o, 0.5, 200);
      this.bouncyFriction = this.quadraticOutInterpolation(s, this.b3Nobounce(this.bouncyTension), 0.01);
    });

  n.extend(S.prototype, {
    normalize: function (t, n, s) {
      return (t - n) / (s - n);
    },
    projectNormal: function (t, n, s) {
      return n + t * (s - n);
    },
    linearInterpolation: function (t, n, s) {
      return t * s + (1 - t) * n;
    },
    quadraticOutInterpolation: function (t, n, s) {
      return this.linearInterpolation(2 * t - t * t, n, s);
    },
    b3Friction1: function (t) {
      return 7e-4 * t ** 3 - 0.031 * t ** 2 + 0.64 * t + 1.28;
    },
    b3Friction2: function (t) {
      return 44e-6 * t ** 3 - 0.006 * t ** 2 + 0.36 * t + 2;
    },
    b3Friction3: function (t) {
      return 4.5e-7 * t ** 3 - 332e-6 * t ** 2 + 0.1078 * t + 5.84;
    },
    b3Nobounce: function (t) {
      return t <= 18 ? this.b3Friction1(t) : t > 18 && t <= 44 ? this.b3Friction2(t) : this.b3Friction3(t);
    },
  });
  n.extend(c, {
    fromOrigamiTensionAndFriction: function (t, n) {
      return new c(_.tensionFromOrigamiValue(t), _.frictionFromOrigamiValue(n));
    },
    fromBouncinessAndSpeed: function (n, s) {
      var o = new t.BouncyConversion(n, s);
      return this.fromOrigamiTensionAndFriction(o.bouncyTension, o.bouncyFriction);
    },
    coastingConfigWithOrigamiFriction: function (t) {
      return new c(0, _.frictionFromOrigamiValue(t));
    },
  });
  c.DEFAULT_ORIGAMI_SPRING_CONFIG = c.fromOrigamiTensionAndFriction(40, 7);
  n.extend(c.prototype, {
    friction: 0,
    tension: 0,
  });
  var f = {};

  n.hexToRGB = function (t) {
    if (f[t]) return f[t];
    if (3 === (t = t.replace('#', '')).length) t = t[0] + t[0] + t[1] + t[1] + t[2] + t[2];
    var n = t.match(/.{2}/g),
      s = {
        r: parseInt(n[0], 16),
        g: parseInt(n[1], 16),
        b: parseInt(n[2], 16),
      };
    f[t] = s;
    return s;
  };

  n.rgbToHex = function (t, n, s) {
    t = t.toString(16);
    n = n.toString(16);
    s = s.toString(16);
    return '#' + (t = t.length < 2 ? '0' + t : t) + (n = n.length < 2 ? '0' + n : n) + (s = s.length < 2 ? '0' + s : s);
  };

  var v,
    E = (t.MathUtil = {
      mapValueInRange: function (t, n, s, o, h) {
        return o + ((t - n) / (s - n)) * (h - o);
      },
      interpolateColor: function (t, s, o, h, u, l) {
        h = undefined === h ? 0 : h;
        u = undefined === u ? 1 : u;
        s = n.hexToRGB(s);
        o = n.hexToRGB(o);

        var c = Math.floor(n.mapValueInRange(t, h, u, s.r, o.r)),
          p = Math.floor(n.mapValueInRange(t, h, u, s.g, o.g)),
          _ = Math.floor(n.mapValueInRange(t, h, u, s.b, o.b));

        return l ? 'rgb(' + c + ',' + p + ',' + _ + ')' : n.rgbToHex(c, p, _);
      },
      degreesToRadians: function (t) {
        return (t * Math.PI) / 180;
      },
      radiansToDegrees: function (t) {
        return (180 * t) / Math.PI;
      },
    });

  function I(t, n) {
    var s = t.indexOf(n);
    if (-1 != s) t.splice(s, 1);
  }

  n.extend(n, E);
  if ('undefined' != typeof window)
    v =
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      function (t) {
        window.setTimeout(t, 16.666666666666668);
      };
  if (!(v || 'undefined' == typeof process || 'node' !== process.title)) v = setImmediate;

  n.onFrame = function (t) {
    return v(t);
  };

  if (undefined !== exports) n.extend(exports, t);
  else if ('undefined' != typeof window) window.rebound = t;
})();
