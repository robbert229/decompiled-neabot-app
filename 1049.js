var module1035 = require('./1035'),
  module1050 = require('./1050'),
  c = function (t) {
    return 'object' != typeof t || null === t;
  },
  o = {
    MAX_MERGE_DEPTH: 36,
    isTerminal: c,
    normalizeMergeArg: function (t) {
      return undefined === t || null === t ? {} : t;
    },
    checkMergeArrayArgs: function (n, c) {
      module1035(Array.isArray(n) && Array.isArray(c), 'Tried to merge arrays, instead got %s and %s.', n, c);
    },
    checkMergeObjectArgs: function (t, n) {
      o.checkMergeObjectArg(t);
      o.checkMergeObjectArg(n);
    },
    checkMergeObjectArg: function (n) {
      module1035(!c(n) && !Array.isArray(n), 'Tried to merge an object, instead got %s.', n);
    },
    checkMergeIntoObjectArg: function (n) {
      module1035(!((c(n) && 'function' != typeof n) || Array.isArray(n)), 'Tried to merge into an object, instead got %s.', n);
    },
    checkMergeLevel: function (n) {
      module1035(n < 36, 'Maximum deep merge depth exceeded. You may be attempting to merge circular structures in an unsupported way.');
    },
    checkArrayStrategy: function (n) {
      module1035(
        undefined === n || n in o.ArrayStrategies,
        'You must provide an array strategy to deep merge functions to instruct the deep merge how to resolve merging two arrays.'
      );
    },
    ArrayStrategies: module1050({
      Clobber: true,
      IndexByIndex: true,
    }),
  };

module.exports = o;
