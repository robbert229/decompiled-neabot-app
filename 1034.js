var module24 = require('./24'),
  module25 = require('./25'),
  module1035 = require('./1035'),
  u = new ((function () {
    function s() {
      module24(this, s);
      this._list = [];
    }

    module25(s, [
      {
        key: 'get',
        value: function (t, n, s) {
          var u;
          if (this._list.length > 0) (u = this._list.pop()).constructor.call(u, t, n, s);
          else u = new o(t, n, s);
          return u;
        },
      },
      {
        key: 'put',
        value: function (t) {
          this._list.push(t);
        },
      },
    ]);
    return s;
  })())(),
  o = (function () {
    function o(n, s, u) {
      module24(this, o);
      this.target = s;
      this.eventPhase = o.NONE;
      this._type = n;
      this._currentTarget = s;
      this._data = u;
      this._defaultPrevented = false;
      this._disposed = false;
      this._propagationStopped = false;
    }

    module25(
      o,
      [
        {
          key: 'type',
          get: function () {
            return this._type;
          },
        },
        {
          key: 'currentTarget',
          get: function () {
            return this._currentTarget;
          },
        },
        {
          key: 'data',
          get: function () {
            return this._data;
          },
        },
        {
          key: 'defaultPrevented',
          get: function () {
            return this._defaultPrevented;
          },
        },
        {
          key: 'preventDefault',
          value: function () {
            this._defaultPrevented = true;
          },
        },
        {
          key: 'stopPropagation',
          value: function () {
            this._propagationStopped = true;
          },
        },
        {
          key: 'stop',
          value: function () {
            this.preventDefault();
            this.stopPropagation();
          },
        },
        {
          key: 'isPropagationStopped',
          value: function () {
            return this._propagationStopped;
          },
        },
        {
          key: 'dispose',
          value: function () {
            module1035(!this._disposed, 'NavigationEvent is already disposed');
            this._disposed = true;
            this.target = null;
            this.eventPhase = o.NONE;
            this._type = '';
            this._currentTarget = null;
            this._data = null;
            this._defaultPrevented = false;
            u.put(this);
          },
        },
      ],
      [
        {
          key: 'pool',
          value: function (t, n, s) {
            return u.get(t, n, s);
          },
        },
      ]
    );
    return o;
  })();

o.NONE = 0;
o.CAPTURING_PHASE = 1;
o.AT_TARGET = 2;
o.BUBBLING_PHASE = 3;
module.exports = o;
