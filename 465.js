exports.default = function n(c) {
  var s = !(arguments.length > 1 && undefined !== arguments[1]) || arguments[1];
  var f = ['initialRouteName', 'screens'];
  if (!s) f.push('path', 'exact', 'stringify', 'parse');
  var u = Object.keys(c).filter(function (n) {
    return !f.includes(n);
  });
  if (u.length)
    throw new Error(
      'Found invalid properties in the configuration:\n' +
        o(u) +
        "\n\nDid you forget to specify them under a 'screens' property?\n\nYou can only specify the following properties:\n" +
        o(f) +
        '\n\nSee https://reactnavigation.org/docs/configuring-links for more details on how to specify a linking configuration.'
    );
  if (c.screens)
    Object.entries(c.screens).forEach(function (o) {
      var c = module12.default(o, 2),
        s = c[1];
      if ('string' != typeof s) n(s, false);
    });
};

var module12 = require('./12'),
  o = function (n) {
    return n
      .map(function (n) {
        return '- ' + n;
      })
      .join('\n');
  };
