const { RESTDataSource } = require('apollo-datasource-rest');

class GitHubService extends RESTDataSource{
    constructor(){
        super();
        this.baseURL = "https://api.github.com"; // Complete list of API URLs
    }
    async getUser (login) {
        return await this.get(`users/${login}`)
    };

    createUser =  async (data) => await (
        await this.service('users').insert(data).returning('*')
    )[0];

    updateUser =  async (id, data) => await (
        await this.service('users').where({ id }).update(data).returning('*')
    )[0];

    deleteUser =  async (filtro) => await this.service('users').where({ id: filtro.id }).delete();
}

module.exports = new GitHubService();