const recipes = [
    {
        recipe_name: "Country Sourdough",
        created_at: "date"
    },
    {
        recipe_name: "Potato Gnocchi in Pesto",
        create_at: "different date"
    }
]

exports.recipes = recipes

exports.seed = function (knex) {
  return knex('recipes').insert(recipes)
}