const db = require('../database');

class ContatoService {
    getContatos =  async () => await db('contatos');

    createContato =  async (data) => await (
        await db('contatos').insert(data).returning('*')
    )[0];

    updateContato =  async (id, data) => await (
        await db('contatos').where({ id }).update(data).returning('*')
    )[0];

    deleteContato =  async (filtro) => {
        if(filtro.id){
            return await db('contatos').where({ id: filtro.id }).delete();
        }else if(filtro.email){
            return await db('contatos').where({ email: filtro.email }).delete();

        }else{
            throw new Error('Por favor passar um parametro!!!');
        }
    };
}

module.exports = new ContatoService();