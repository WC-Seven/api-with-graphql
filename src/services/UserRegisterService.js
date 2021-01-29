const db = require('../database');

class UserRegisterService{
    constructor(db){
        this.db = db;
    }
    async addUser(user) {
        const newUser = await this.db('users').returning('*', { includeTriggerModifications: true }).insert(user);
        return await newUser[0];
    };

    async getUserByLogin(login) {
        return await this.db('users').where({ login}).first();
    };
}

module.exports = new UserRegisterService(db);