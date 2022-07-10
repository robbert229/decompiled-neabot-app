module.exports = function (t) {
  return 'object' == typeof t && true === t.isAxiosError;
};
