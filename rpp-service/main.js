var fs = require('fs'),
    exec = require('child_process').exec;

exec("lp test.js");

// get printer jobs
exec("lpq",function (error, stdout, stderr) {
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);

    if (error !== null) {
      console.log('exec error: ' + error);
    }
});