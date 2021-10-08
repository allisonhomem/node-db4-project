const recipes = [
    {
        recipe_name: "Country Sourdough",
        created_at: "January 10, 2020"
    },
    {
        recipe_name: "Potato Gnocchi in Pesto",
        created_at: "July 23, 2021"
    }
]

exports.recipes = recipes

exports.seed = function (knex) {
  return knex('recipes').insert(recipes)
}