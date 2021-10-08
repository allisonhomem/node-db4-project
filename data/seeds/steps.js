const steps = [
    {
        step_number: 1,
        recipe_id: 2,
        step_instructions: "bake potatoes at 350f for one hour"
    },
    {
        step_number: 2,
        recipe_id: 1,
        step_instructions: "mix levain with flour and water"
    },
    {
        step_number: 3,
        recipe_id: 1,
        step_instructions: "add salt and knead that dough"
    },
    {
        step_number: 4,
        recipe_id: 1,
        step_instructions: "let the dough ferment 2 hours"
    },
    {
        step_number: 2,
        recipe_id: 2,
        step_instructions: "blend pine nuts, parmesan,olive oil, basil, garlic and salt until smooth sauce forms"
    },
    {
        step_number: 4,
        recipe_id: 2,
        step_instructions: "boil gnocchi until they float"
    },
    {
        step_number: 5,
        recipe_id: 2,
        step_instructions: "toss gnocchi in sauce and enjoy!"
    },
    {
        step_number: 1,
        recipe_id: 1,
        step_instructions: "mix sourdough starter, flour and water to form levain"
    },
    {
        step_number: 3,
        recipe_id: 2,
        step_instructions: "mash potatoes and add flour until dough forms, then shape into little gnocchis"
    },
    {
        step_number: 5,
        recipe_id: 1,
        step_instructions: "shape the dough and ferment for two more hours"
    },
    {
        step_number: 6,
        recipe_id: 1,
        step_instructions: "bake the dough at 475F for 35 minutes with steam, then enjoy!"
    }
]

exports.steps = steps

exports.seed = function(knex){
    return knex('steps').insert(steps);
}