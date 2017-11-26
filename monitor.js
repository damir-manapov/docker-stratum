var respawn = require('respawn')

var monitor = respawn(['/node_modules/.bin/coin-hive-stratum', '8892', '--host=' + process.env.HOST, '--port=' + process.env.PORT], {
    name: 'monitor-name',          // set monitor name
    cwd: '.',              // set cwd
    maxRestarts:10,        // how many restarts are allowed within 60s
                           // or -1 for infinite restarts
    sleep:1000,            // time to sleep between restarts,
    kill:30000,            // wait 30s before force killing after stopping
    fork: true             // fork instead of spawn
})

monitor.start() // spawn and watch