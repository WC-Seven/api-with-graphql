exports.up = knex => knex.schema.createTable('tasks', table => {
    table.increments('id').primary();
    table.integer('userId').notNullable();
    table.text('title').unique().notNullable();
    table.text('description').notNullable();

    table.timestamp('created_at', { precision: 6 }).defaultTo(knex.fn.now(6));
    table.timestamp('updated_at', { precision: 6 }).defaultTo(knex.fn.now(6));

    table.foreign('userId').references('id').inTable('users');
});

exports.down = knex => knex.schema.dropTable('tasks');
