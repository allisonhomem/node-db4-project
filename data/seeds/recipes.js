const recipes = [
    {
        recipe_name: "Country Sourdough",
        created_at: Date.now()
    },
    {
        recipe_name: "Potato Gnocchi in Pesto",
        create_at: Date.now()
    }
]

exports.recipes = recipes

exports.seed = function (knex) {
  return knex('recipes').insert(recipes)
}