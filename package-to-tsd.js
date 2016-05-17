#!/usr/bin/env node

var fs = require('fs');
var childProcess = require('child_process');

fs.readFile('package.json', handlePackageJson)

function handlePackageJson(err, data) {
    if (err) throw err
    var obj = JSON.parse(data)
        
    Object.keys(obj.dependencies).forEach(function(key,index) {                
        childProcess.execSync('tsd install ' + key + ' --save');        
    })
}
