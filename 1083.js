var React = require('react'),
  module1084 = require('./1084');

if (undefined === React)
  throw Error('create-react-class could not find the React object. If you are using script tags, make sure that React is being loaded before create-react-class.');
var c = new React.Component().updater;
module.exports = module1084(React.Component, React.isValidElement, c);
