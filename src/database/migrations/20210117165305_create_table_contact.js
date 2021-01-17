exports.up = knex => knex.schema.createTable('contatos', table => {
    table.increments('id').primary();
    table.text('nome', 50).notNullable();
    table.text('email', 50).unique().notNullable();
    table.text('telefone', 15).notNullable();

    table.timestamp('created_at', { precision: 6 }).defaultTo(knex.fn.now(6));
    table.timestamp('updated_at', { precision: 6 }).defaultTo(knex.fn.now(6));
});

exports.down = knex => knex.schema.dropTable('wcs_users');
