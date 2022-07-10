var module1049 = require('./1049'),
  t = module1049.checkMergeObjectArg,
  n = module1049.checkMergeIntoObjectArg;

module.exports = function (c, o) {
  if ((n(c), null != o)) for (var f in (t(o), o)) o.hasOwnProperty(f) && (c[f] = o[f]);
};
