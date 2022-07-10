module.exports = function (n, t) {
  return function (u) {
    return null != u && u[n] === t && (undefined !== t || n in Object(u));
  };
};
