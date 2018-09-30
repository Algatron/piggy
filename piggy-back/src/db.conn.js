
module.exports = (function setupDbConnection() {

    const mongoose = require('mongoose');
    const db = mongoose.connection;
    
    const DB_CONNECTION_URL = 'mongodb://test:test01@ds219432.mlab.com:19432/piggyback';
    
    db.on('error',  (monErr) => {
        if (monErr) {
            console.error(`1 - Failed to connect to DB server: ${monErr}`);
            return;
        }
    });
    mongoose.connect(DB_CONNECTION_URL, { useNewUrlParser: true }, (monErr) => {
        if (monErr) {
            console.error(`2 - Failed to connect to DB server: ${monErr}`);
            return;
        }
    });
    db.once('open', function() {
        console.info(`Connected to mongodb @ ds219432.mlab.com:19432/piggyback`);
    });

    return db;

})();