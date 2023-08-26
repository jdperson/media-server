const { connect, connection } = require('mongoose');

connect(process.env.MONGO_CONN);

module.exports = connection;