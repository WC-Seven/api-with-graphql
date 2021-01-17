const { ApolloServer } = require('apollo-server');
const graphql = require('./src/graphql');
const ContatoService = require('./src/services/ContatoService');

const server = new ApolloServer({
    ...graphql,
    context: () => ({
        ContatoService: ContatoService
    }),
});

server.listen().then(({url}) => console.log(`Server rodando em: ${url}`));