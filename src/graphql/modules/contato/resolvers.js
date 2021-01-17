const db = require('../../../database');
const { getContatos, createContato, updateContato, deleteContato } = require('../../../services/ContatoService');

module.exports = {
    Query: {
        contatos: async () => await getContatos('contatos'),
    },
    Mutation: {
        criarContato: async (_, { data }) => await createContato(data),
        atualizarContato: async (_, { id, data }) => await updateContato(id, data),
        deletarContato: async (_, { filtro }) => await deleteContato(filtro),
    }
}