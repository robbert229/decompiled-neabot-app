var module714 = require('./714');

module.exports = function (o, _, t) {
  if ('__proto__' == _ && module714)
    module714(o, _, {
      configurable: true,
      enumerable: true,
      value: t,
      writable: true,
    });
  else o[_] = t;
};
