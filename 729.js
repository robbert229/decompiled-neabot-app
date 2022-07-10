exports.default = function (b) {
  var o,
    t = b.Symbol;
  if ('function' == typeof t) t.observable ? (o = t.observable) : ((o = t('observable')), (t.observable = o));
  else o = '@@observable';
  return o;
};
