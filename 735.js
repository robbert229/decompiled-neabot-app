var module736 = require('./736'),
  u = module736.mark,
  n = module736.extract,
  s = module736.refer,
  module737 = require('./737');

module.exports = function (t, l, o, b) {
  function p(c, o) {
    return o instanceof t.Record
      ? s(o, 'ImmutableRecord', 'toObject', l)
      : o instanceof t.Range
      ? n(o, 'ImmutableRange')
      : o instanceof t.Repeat
      ? n(o, 'ImmutableRepeat')
      : t.OrderedMap.isOrderedMap(o)
      ? u(o, 'ImmutableOrderedMap', 'toObject')
      : t.Map.isMap(o)
      ? u(o, 'ImmutableMap', 'toObject')
      : t.List.isList(o)
      ? u(o, 'ImmutableList', 'toArray')
      : t.OrderedSet.isOrderedSet(o)
      ? u(o, 'ImmutableOrderedSet', 'toArray')
      : t.Set.isSet(o)
      ? u(o, 'ImmutableSet', 'toArray')
      : t.Seq.isSeq(o)
      ? u(o, 'ImmutableSeq', 'toArray')
      : t.Stack.isStack(o)
      ? u(o, 'ImmutableStack', 'toArray')
      : o;
  }

  function _(u, n) {
    if ('object' == typeof n && null !== n && '__serializedType__' in n) {
      var s = n.data;

      switch (n.__serializedType__) {
        case 'ImmutableMap':
          return t.Map(s);

        case 'ImmutableOrderedMap':
          return t.OrderedMap(s);

        case 'ImmutableList':
          return t.List(s);

        case 'ImmutableRange':
          return t.Range(s._start, s._end, s._step);

        case 'ImmutableRepeat':
          return t.Repeat(s._value, s.size);

        case 'ImmutableSet':
          return t.Set(s);

        case 'ImmutableOrderedSet':
          return t.OrderedSet(s);

        case 'ImmutableSeq':
          return t.Seq(s);

        case 'ImmutableStack':
          return t.Stack(s);

        case 'ImmutableRecord':
          return l && l[n.__serializedRef__] ? new l[n.__serializedRef__](s) : t.Map(s);

        default:
          return s;
      }
    }

    return n;
  }

  return {
    replacer: o
      ? function (t, u) {
          return o(t, u, p);
        }
      : p,
    reviver: b
      ? function (t, u) {
          return b(t, u, _);
        }
      : _,
    options: module737,
  };
};
