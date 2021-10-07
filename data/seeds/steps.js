const steps = [
    {
        step_number: 1,
        recipe_id: 2,
        step_instructions: "bake potatoes at 350f for one hour"
    },
    
]

exports.steps = steps

exports.seed = function(knex){
    return knex('steps').insert(steps);
}