// hot_reload.js
// Created by fanyingmao Sep/11/2017
// 热更新工具
var utils = module.exports;

function cleanCache(modulePath) {
  var module = require.cache[modulePath];
  // remove reference in module.parent
  if (module.parent) {
    module.parent.children.splice(module.parent.children.indexOf(module), 1);
  }
  require.cache[modulePath] = null;
}

utils.watchCleanCache = function (path, fc) {
  var fs = require('fs');
  fs.watch(require.resolve(path), function () {
    cleanCache(require.resolve(path));
    try {
      fc(path);
    } catch (ex) {
      console.error('module update failed');
    }
  });
};

utils.require = function(path,cb){
  let requireObj = require(path);
  cb(requireObj);
  this.watchCleanCache(path,()=>{
    requireObj = require(path);
    cb(requireObj);
  })
}