'use babel';
var provider = require('./provider');

module.exports = {
  config: {
    features_path: {
      type: 'string',
      title: 'Features path',
      default: '/features',
      description: 'This is the relative path (from your project root) to your projects features directory.'
    },

    steps_path: {
      type: 'string',
      title: 'Step definitions path',
      default: '/steps',
      description: 'This is the relative path (from your project root) to your projects step definitions directory.'
    }
  },
  activate: function() {
    return provider.load();
  },
  getProvider: function() {
    return provider
  }
};
