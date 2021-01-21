var events = require('events')
var fs = require('fs.extra')
var glob = require('glob')
var path = require('path')

var Mods = function (config) {
  this.config = config
  this.mods = []
}

Mods.prototype = new events.EventEmitter()

Mods.prototype.delete = function (mod, cb) {
  var self = this
  fs.rmrf(path.join(this.config.path, mod), function (err) {
    cb(err)

    if (!err) {
      self.updateMods()
    }
  })
}

Mods.prototype.find = function (id) {
  this.mods.find(function (mod) {
    return mod.id === id
  })
}

Mods.prototype.updateMods = function () {
  var self = this
  glob('**/@*/addons', { cwd: self.config.path }, function (err, files) {
    if (err) {
      console.log(err)
    } else {
      var mods = files.map(function (file) {
        return {
          id: name,
          name: name
          // Find actual parent mod folder from addons folder
          name: path.join(file, '..')
        }
      })

      self.mods = mods
      self.emit('mods', mods)
    }
  })
}

module.exports = Mods