module.exports = function (n) {
  return (
    !(!n || 'string' == typeof n) &&
    (n instanceof Array ||
      Array.isArray(n) ||
      (n.length >= 0 && (n.splice instanceof Function || (Object.getOwnPropertyDescriptor(n, n.length - 1) && 'String' !== n.constructor.name))))
  );
};
