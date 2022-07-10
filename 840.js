var module830 = require('./830'),
  module841 = require('./841'),
  module842 = require('./842'),
  h = module830(function (n) {
    return (
      !!module841(n) ||
      (!!n && 'object' == typeof n && !module842(n) && (1 === n.nodeType ? !!n.length : 0 === n.length || (n.length > 0 && n.hasOwnProperty(0) && n.hasOwnProperty(n.length - 1))))
    );
  });

module.exports = h;
