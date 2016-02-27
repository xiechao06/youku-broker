var convict = require('convict');

var conf = convict({
    port: {
        doc: 'listening port',
        format: 'port',
        default: 5000,
        env: 'PORT'
    },
});

module.exports = conf;
