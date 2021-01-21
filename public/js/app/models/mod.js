var Backbone = require('backbone')

module.exports = Backbone.Model.extend({
  defaults: {
    id: '',
    downloading: false,
    name: '',
    path: ''
  },
  idAttribute: 'id',
  urlRoot: '/api/mods/'
  idAttribute: 'name',
  urlRoot: 'api/mods/'
})
