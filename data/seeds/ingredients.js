const ingredients = [
    {
        ingredient_name: "water",
        quantity: "100g"
    },
    {
        ingredient_name: "water",
        quantity: "250g"
    },
    {
        ingredient_name: "bread flour",
        quantity: "100g"
    },
    {
        ingredient_name: "bread flour",
        quantity: "400g"
    },
    {
        ingredient_name: "russet potatoes",
        quantity: 4
    },
    {
        ingredient_name: "salt",
        quantity: "5g"
    },
    {
        ingredient_name: "basil",
        quantity: "2 bunches"
    },
    {
        ingredient_name: "parmesan",
        quantity: "3 ounces"
    },
    {
        ingredient_name: "extra virgin olive oil",
        quantity: "2 tablespoons"
    },
    {
        ingredient_name: "garlic",
        quantity: "3 cloves"
    },
    {
        ingredient_name: "pine nuts",
        quantity: "half cup"
    }
]

exports.ingredients = ingredients;

exports.seed = function (knex) {
    return knex('ingredients').insert(ingredients);
};