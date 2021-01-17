const db = require('../../../database');
// const { getContatos, createContato, updateContato, deleteContato } = require('../../../services/ContatoService');

module.exports = {
    Query: {
        contatos: async (obj, args, { ContatoService }, info) =>  await ContatoService.getContatos('contatos'),
    },
    Mutation: {
        criarContato: async (_, { data }, { ContatoService }) => await ContatoService.createContato(data),
        atualizarContato: async (_, { id, data }, { ContatoService }) => await ContatoService.updateContato(id, data),
        deletarContato: async (_, { filtro }, { ContatoService }) => await ContatoService.deleteContato(filtro),
    }
}