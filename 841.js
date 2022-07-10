module.exports =
  Array.isArray ||
  function (t) {
    return null != t && t.length >= 0 && '[object Array]' === Object.prototype.toString.call(t);
  };
