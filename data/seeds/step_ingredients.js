const step_ingredients = [
    {
        step_id: 1,
        ingredient_id: 5
    },
    {
        step_id: 2,
        ingredient_id: 3
    },
    {
        step_id: 2,
        ingredient_id: 1
    },
    {
        step_id: 3,
        ingredient_id: 6
    },
    {
        step_id: 5,
        ingredient_id: 6
    },
    {
        step_id: 5,
        ingredient_id: 7
    },
    {
        step_id: 5,
        ingredient_id: 8
    },
    {
        step_id: 5,
        ingredient_id: 9
    },
    {
        step_id: 5,
        ingredient_id: 10
    },
    {
        step_id: 5,
        ingredient_id: 11
    },
    {
        step_id: 8,
        ingredient_id: 2
    },
    {
        step_id: 8,
        ingredient_id: 4
    },
    {
        step_id: 9,
        ingredient_id: 3
    }
]


exports.step_ingredients = step_ingredients

exports.seed = function (knex) {
    return knex('step_ingredients').insert(step_ingredients);
}