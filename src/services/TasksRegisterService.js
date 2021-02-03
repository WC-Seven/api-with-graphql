const db = require('../database');

class TasksRegisterService{
    constructor(db){
        this.db = db;
    }

    getTasks = async (userId) => {
        return await this.db('tasks').where({ userId});
    };

    getTaskById = async (userId, id) => {
        const task = await this.db('tasks').where({id}).first();
        if(!task) throw new Error('Tarefa não encontrada!!!');

        if(task.userId != userId) throw new Error('Você não tem permissão!!!');

        return task;
    };

    addTask = async (userId, data) => {
        const taskNew = await db('tasks').returning('*').insert({userId, ...data});
        return taskNew;
    }

    updateTask = async (userId, id, data) => {
        await this.getTaskById(userId, id);
        return await db('tasks').returning('*').where({ id }).update(data);
    }

    deleteTask = async (userId, id) => {
        await this.getTaskById(userId, id);
        return await db('tasks').where({ id }).delete();
    }
}

module.exports = new TasksRegisterService(db);