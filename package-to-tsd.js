#!/usr/bin/env node

var fs = require('fs')    
var execSync = require('exec-sync');

fs.readFile('package.json', handlePackageJson)

function handlePackageJson(err, data) {
    if (err) throw err
    obj = JSON.parse(data)
        
    Object.keys(obj.dependencies).forEach(function(key,index) {                
        execSync('tsd install ' + key + ' --save');        
    })
}
