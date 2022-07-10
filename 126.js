var n;
if (require('./127').canUseDOM) n = window.performance || window.msPerformance || window.webkitPerformance;
module.exports = n || {};
