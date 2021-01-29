exports.up = knex => knex.schema.createTable('users', table => {
    table.increments('id').primary();
    table.text('login').unique().notNullable();
    table.text('avatar_url').notNullable();

    table.timestamp('created_at', { precision: 6 }).defaultTo(knex.fn.now(6));
    table.timestamp('updated_at', { precision: 6 }).defaultTo(knex.fn.now(6));
});

exports.down = knex => knex.schema.dropTable('users');
