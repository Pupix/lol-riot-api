const ConfigManager = require('./lib/configManager');

ConfigManager.remove()
    .then(() => console.log('Config has been removed successfully'))
    .catch(() => console.log('Couldn\'t remove config'));

