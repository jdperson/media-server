const { connect, connection } = require('mongoose');

connect('mongodb+srv://root:root@cluster0.v4nwp1a.mongodb.net/devApps');

module.exports = connection;