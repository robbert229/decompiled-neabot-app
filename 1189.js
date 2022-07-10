var t = {
  reachabilityUrl: 'https://clients3.google.com/generate_204',
  reachabilityTest: function (t) {
    return Promise.resolve(204 === t.status);
  },
  reachabilityShortTimeout: 5e3,
  reachabilityLongTimeout: 6e4,
  reachabilityRequestTimeout: 15e3,
};
exports.default = t;
