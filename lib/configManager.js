const fs = require('fs-extra');
const inquirer = require('inquirer');
const path = require('path');
const configDest = path.join(__dirname, '..', 'config.json');

const saveConfig = function (data) {
    return fs.writeJson(configDest, data);
};

const showBasicPrompt = function () {
    return inquirer.prompt([{
        name: 'apiKey',
        message: 'What\'s you API key?',
        validate(value) {
            return !value ? 'The API key is required' : true;
        }
    }, {
        name: 'port',
        message: 'What port will be used to run the API?',
        default: 3001
    }, {
        name: 'region',
        message: 'What\'s your region?',
        default: 'na'
    }, {
        name: 'cache',
        message: 'What kind of caching would you like?',
        choices: [
            {
                name: 'Redis',
                value: 'redis'
            },
            {
                name: 'In memory',
                value: 'memory'
            }
        ],
        type: 'list'
    }]);
};

const showCachingPrompt = function () {
    return inquirer.prompt([{
        name: 'cacheHost',
        message: 'What\'s you redis server host?',
        default: '127.0.0.1'
    }, {
        name: 'cachePort',
        message: 'What\'s you redis server port?',
        default: 6379
    }]);
};

/**
 * Manages the API Configuration
 */
class ConfigManager {

    /**
     * Loads the configuration party or creates of is not yet available
     *
     * @returns {Promise}
     */
    static ensure() {
        return fs.pathExists(configDest)
                .then(exists => {
                    if (exists) {
                        return Promise.resolve();
                    }

                    return ConfigManager.create();
                })
                .catch(error => {
                    Promise.reject(error);
                });
    }

    /**
     * Creates a configuration file for you API
     *
     * @returns {Promise}
     */
    static create() {
        const config = {};

        return showBasicPrompt().then(basicAnswers => {
            Object.assign(config, basicAnswers);

            switch (basicAnswers.cache) {
            case 'memory':
                return saveConfig(config);
            case 'redis':
                return showCachingPrompt().then(cachingAnswers => {
                    Object.assign(config, cachingAnswers);
                    return saveConfig(config);
                });
            // no default
            }
        });
    }

    /**
     * Removes the API configuration
     *
     * @returns {Promise}
     */
    static remove() {
        return fs.pathExists(configDest)
                .then(exists => {
                    if (!exists) {
                        return Promise.resolve();
                    }

                    return fs.remove(configDest);
                });
    }
}

module.exports = ConfigManager;
