module.exports = (function() {

    const mongoose = require('mongoose');
    const db = require('./sreg').get('dbconn');
    const bcrypt = require('bcrypt');

    class AuthService {

        constructor(mongoose, dbconn, bcrypt) {
            const userSchema = new mongoose.Schema({
                name: String,
                email: String,
                password: String
            });
            
            this.bcrypt = bcrypt;
            this.UsersModel = dbconn.model('users', userSchema);
        }

        userExists(user) {
            user = user || {};
            return this.UsersModel.findOne({ email: user.email }, (err, result) => {
                if (err) {
                    throw new Error(`auth.service.userExists - db error: ${err}`);
                }
                return !!result;
            });
        }

        registerNewUser(user) {
            return this.userExists(user).then(exists => {
                if (exists) {
                    return Promise.reject(`auth.service.registerNewUser - user [${user.email}] already exists`);
                } 

                // TODO - validate password length, characters etc...
                user.password = this.bcrypt.hashSync(user.password, 10);

                return this.UsersModel.create(user);
            });
        }
    }

    return new AuthService(mongoose, db, bcrypt);

})();