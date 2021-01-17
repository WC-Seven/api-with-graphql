const db = require('../database');

class ContatoService {
    constructor(service){
        this.service = service;
    }
    getContatos =  async () => await this.service('contatos');

    createContato =  async (data) => await (
        await this.service('contatos').insert(data).returning('*')
    )[0];

    updateContato =  async (id, data) => await (
        await this.service('contatos').where({ id }).update(data).returning('*')
    )[0];

    deleteContato =  async (filtro) => {
        if(filtro.id){
            return await this.service('contatos').where({ id: filtro.id }).delete();
        }else if(filtro.email){
            return await this.service('contatos').where({ email: filtro.email }).delete();

        }else{
            throw new Error('Por favor passar um parametro!!!');
        }
    };
}

module.exports = new ContatoService(db);