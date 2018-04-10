module.exports = {
  version: '1.2.0',
  init: function (pluginContext) {
     let policy = require('./policies/fetch')
     pluginContext.registerPolicy(policy)
  }
}