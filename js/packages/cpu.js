var usage = require('usage');
 
var pid = process.pid // you can use any valid PID instead 
usage.lookup(pid, function(err, result) {
 
});
{
    memory: 100065280, // in no of bytes 
    memoryInfo: {
        rss: 15966208, // resident size memory in bytes 
        vsize: 3127906304 // virtual memory size in bytes 
    },
    cpu: 10.6 // in percentage 
}
var pid = process.pid;
var options = { keepHistory: true }
usage.lookup(pid, options, function(err, result) {
 
});
usage.clearHistory(pid); //clear history for the given pid 
usage.clearHistory(); //clean history for all pids
