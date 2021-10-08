exports.up = function (knex) {
    return knex.schema.createTable('recipes', tbl => {
        tbl.increments('recipe_id');
        tble.text('recipe_name', 130)
            .unique()
            .notNullable();
    })
     .createTable('steps', tbl => {
        tbl.increments('step_id')
        tbl.integer('step_number')
           .unsigned()
           .notNullable()
        tbl.text('step_instructions', 2000)
           .notNullable()
        tbl.integer('recipe_id')
           .unsigned()
           .notNullable()
           .references('recipe_id')
           .inTable('recipes')
           .onUpdate('CASCADE')
           .onDelete('CASCADE');
    })
     .createTable('ingredients', tbl => {
        tbl.increments('ingredient_id')
        tbl.text('ingredient_name', 130)
           .notNullable()
        tbl.text('quantity', 130)
           .notNullable()
     })
      .createTable('step_ingredients', tbl => {
        tbl.increments('step_ingredients_id')
        tbl.integer('step_id')
           .unsigned()
           .notNullable()
           .references('step_id')
           .inTable('steps')
           .onUpdate('CASCADE')
           .onDelete('CASCADE');
        tbl.integer('ingredient_id')
           .unsigned()
           .notNullable()
           .references('ingredient_id')
           .inTable('ingredients')
           .onUpdate('CASCADE')
           .onDelete('CASCADE');
      });
}

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('recipes')
                      .dropTableIfExists('steps')
                      .dropTableIfExists('ingredients')
                      .dropTableIfExists('step_ingredients');
}