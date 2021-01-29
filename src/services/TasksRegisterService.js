const db = require('../database');

class TasksRegisterService{
    constructor(db){
        this.db = db;
    }

    getTasks = async (userId) => {
        return await this.db('tasks').where({ userId});
    };
}

module.exports = new TasksRegisterService(db);