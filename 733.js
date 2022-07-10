var n = function (n) {
  'use strict';

  if ('function' != typeof n) return [];
  var t = n.toString().replace(/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm, ''),
    o = t.slice(t.indexOf('(') + 1, t.indexOf(')')).match(/([^\s,]+)/g);
  return null === o ? [] : o;
};

if (undefined !== module && undefined !== module.exports) module.exports = n;
if ('undefined' != typeof window) window.GetParams = n;
