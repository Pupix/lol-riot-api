const cluster = require('cluster');
const os = require('os');
const configManager = require('./lib/configManager');
const worker = require('./lib/worker');

/**
 * Handles configuration errors
 *
 * @param {Error} error
 */
const errorHandler = error => {
    console.log(error);
    process.exit(0);
};

/**
 * Handles configuration success
 */
const successHandler = () => {
    const cfg = require('./config.json');

    if (cluster.isMaster) {
        // Handle master
        cluster.on('exit', () => cluster.fork());
        os.cpus().forEach(() => cluster.fork());

        return;
    }

    worker(cfg);
};

configManager.ensure().then(successHandler).catch(errorHandler);
