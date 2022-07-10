var module621 = require('./621'),
  module640 = require('./640');

module.exports.factory = module640;
module.exports.SCClientSocket = module621;
module.exports.Emitter = require('./622');

module.exports.create = function (t) {
  return module640.create(t);
};

module.exports.connect = module.exports.create;

module.exports.destroy = function (t) {
  return module640.destroy(t);
};

module.exports.clients = module640.clients;
module.exports.version = '14.3.1';
