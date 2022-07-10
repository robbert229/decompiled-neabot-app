var module56 = require('./56'),
  module1058 = require('./1058'),
  module1035 = require('./1035'),
  s = 'mixins';

module.exports = function (p, c, u) {
  var l = [],
    f = {
      mixins: 'DEFINE_MANY',
      statics: 'DEFINE_MANY',
      propTypes: 'DEFINE_MANY',
      contextTypes: 'DEFINE_MANY',
      childContextTypes: 'DEFINE_MANY',
      getDefaultProps: 'DEFINE_MANY_MERGED',
      getInitialState: 'DEFINE_MANY_MERGED',
      getChildContext: 'DEFINE_MANY_MERGED',
      render: 'DEFINE_ONCE',
      componentWillMount: 'DEFINE_MANY',
      componentDidMount: 'DEFINE_MANY',
      componentWillReceiveProps: 'DEFINE_MANY',
      shouldComponentUpdate: 'DEFINE_ONCE',
      componentWillUpdate: 'DEFINE_MANY',
      componentDidUpdate: 'DEFINE_MANY',
      componentWillUnmount: 'DEFINE_MANY',
      updateComponent: 'OVERRIDE_BASE',
    },
    E = {
      displayName: function (t, n) {
        t.displayName = n;
      },
      mixins: function (t, n) {
        if (n) for (var o = 0; o < n.length; o++) y(t, n[o]);
      },
      childContextTypes: function (n, o) {
        n.childContextTypes = module56({}, n.childContextTypes, o);
      },
      contextTypes: function (n, o) {
        n.contextTypes = module56({}, n.contextTypes, o);
      },
      getDefaultProps: function (t, n) {
        if (t.getDefaultProps) t.getDefaultProps = D(t.getDefaultProps, n);
        else t.getDefaultProps = n;
      },
      propTypes: function (n, o) {
        n.propTypes = module56({}, n.propTypes, o);
      },
      statics: function (t, n) {
        N(t, n);
      },
      autobind: function () {},
    };

  function h(t, n) {
    var s = f.hasOwnProperty(n) ? f[n] : null;
    if (P.hasOwnProperty(n))
      module1035(
        'OVERRIDE_BASE' === s,
        'ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.',
        n
      );
    if (t)
      module1035(
        'DEFINE_MANY' === s || 'DEFINE_MANY_MERGED' === s,
        'ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.',
        n
      );
  }

  function y(t, n) {
    if (n) {
      module1035('function' != typeof n, "ReactClass: You're attempting to use a component class or function as a mixin. Instead, just use a regular object.");
      module1035(!c(n), "ReactClass: You're attempting to use a component as a mixin. Instead, just use a regular object.");
      var p = t.prototype,
        u = p.__reactAutoBindPairs;

      for (var l in (n.hasOwnProperty(s) && E.mixins(t, n.mixins), n))
        if (n.hasOwnProperty(l) && l !== s) {
          var y = n[l],
            N = p.hasOwnProperty(l);
          if ((h(N, l), E.hasOwnProperty(l))) E[l](t, y);
          else {
            var _ = f.hasOwnProperty(l);

            if ('function' != typeof y || _ || N || false === n.autobind) {
              if (N) {
                var M = f[l];
                module1035(_ && ('DEFINE_MANY_MERGED' === M || 'DEFINE_MANY' === M), 'ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.', M, l);
                if ('DEFINE_MANY_MERGED' === M) p[l] = D(p[l], y);
                else if ('DEFINE_MANY' === M) p[l] = I(p[l], y);
              } else p[l] = y;
            } else {
              u.push(l, y);
              p[l] = y;
            }
          }
        }
    }
  }

  function N(t, n) {
    if (n)
      for (var s in n) {
        var p = n[s];

        if (n.hasOwnProperty(s)) {
          module1035(
            !(s in E),
            'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.',
            s
          );
          module1035(!(s in t), 'ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.', s);
          t[s] = p;
        }
      }
  }

  function _(t, n) {
    for (var s in (module1035(t && n && 'object' == typeof t && 'object' == typeof n, 'mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.'), n))
      n.hasOwnProperty(s) &&
        (module1035(
          undefined === t[s],
          'mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.',
          s
        ),
        (t[s] = n[s]));

    return t;
  }

  function D(t, n) {
    return function () {
      var o = t.apply(this, arguments),
        s = n.apply(this, arguments);
      if (null == o) return s;
      if (null == s) return o;
      var p = {};

      _(p, o);

      _(p, s);

      return p;
    };
  }

  function I(t, n) {
    return function () {
      t.apply(this, arguments);
      n.apply(this, arguments);
    };
  }

  function M(t, n) {
    return n.bind(t);
  }

  function A(t) {
    for (var n = t.__reactAutoBindPairs, o = 0; o < n.length; o += 2) {
      var s = n[o],
        p = n[o + 1];
      t[s] = M(t, p);
    }
  }

  var Y = {
      componentDidMount: function () {
        this.__isMounted = true;
      },
    },
    v = {
      componentWillUnmount: function () {
        this.__isMounted = false;
      },
    },
    P = {
      replaceState: function (t, n) {
        this.updater.enqueueReplaceState(this, t, n);
      },
      isMounted: function () {
        return !!this.__isMounted;
      },
    },
    x = function () {};

  module56(x.prototype, p.prototype, P);
  return function (t) {
    var s = function (t, p, c) {
      if (this.__reactAutoBindPairs.length) A(this);
      this.props = t;
      this.context = p;
      this.refs = module1058;
      this.updater = c || u;
      this.state = null;
      var l = this.getInitialState ? this.getInitialState() : null;
      module1035('object' == typeof l && !Array.isArray(l), '%s.getInitialState(): must return an object or null', s.displayName || 'ReactCompositeComponent');
      this.state = l;
    };

    for (var p in ((s.prototype = new x()),
    (s.prototype.constructor = s),
    (s.prototype.__reactAutoBindPairs = []),
    l.forEach(y.bind(null, s)),
    y(s, Y),
    y(s, t),
    y(s, v),
    s.getDefaultProps && (s.defaultProps = s.getDefaultProps()),
    module1035(s.prototype.render, 'createClass(...): Class specification must implement a `render` method.'),
    f))
      s.prototype[p] || (s.prototype[p] = null);

    return s;
  };
};
