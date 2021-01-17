require('dotenv').config();

module.exports = {
    client: 'pg',
    /* connection: {
        host:     process.env.HOST,
        database: process.env.DATABASE,
        user:     process.env.USER,
        password: process.env.PASSWORD,
        typeCast: function(field, next) {
            if (field.type == 'TINY' && field.length == 1) {
                return (field.string() == '1'); // 1 = true, 0 = false
            }
            return next();
        }
    }, */

    connection: {
        // host:'144.217.79.17',
        database: process.env.DATABASE,
        user:     process.env.USER,
        password: process.env.PASSWORD,
        port:     process.env.PORT
    },
    
    pool: {
        min: 2,
        max: 10
    },
        migrations: {
        directory: './src/database/migrations',
        tableName: 'knex_migrations'
    },
    seeds: {
        directory: './src/database/seeds',
        tableName: 'knex_seeds'
    }
};