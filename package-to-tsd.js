#!/usr/bin/env node

var fs = require('fs');
var childProcess = require('child_process');

var processedPaths = {};

function parsePackageJson(path) {
    
    if(processedPaths[path]===true) return;
    processedPaths[path]=true;
    
    var packageObj = JSON.parse(fs.readFileSync(path+'/package.json'));
    
    if(!packageObj.dependencies) return;
    
    Object.keys(packageObj.dependencies).forEach(function(key) {   
       
        if(packageObj.dependencies[key].substring(0,1)=='/'  || 
           packageObj.dependencies[key].substring(0,2)=='./' || 
           packageObj.dependencies[key].substring(0,3)=='../' ) {
           parsePackageJson(path + '/' + packageObj.dependencies[key]);
        } else {
           childProcess.execSync('tsd install ' + key + ' --save');   
        }
              
    })
}

parsePackageJson('.');
