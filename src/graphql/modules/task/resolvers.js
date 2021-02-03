module.exports = {
    Query: {
        async getTasks(_, __, { dataSources, userId }) {
            return await dataSources.tasksRegisterService.getTasks(userId);
        },
        async getTask(_, {id }, { dataSources, userId }) {
            return await dataSources.tasksRegisterService.getTaskById(userId, id);
        },
    },
    Mutation:{
        async createTask(_, { data }, { dataSources, userId }) {
            return await dataSources.tasksRegisterService.addTask(userId, data);
        },
        async updateTask(_, { id, data }, { dataSources, userId }) {
            return await dataSources.tasksRegisterService.updateTask(userId, id, data);
        },
        async deleteTask(_, { id }, { dataSources, userId }) {
            return await dataSources.tasksRegisterService.deleteTask(userId, id);
        },
    }
}