const db = require('../../data/db-config.js');

async function getRecipeById(recipe_id) {

    const recipe = await db('recipes as r')
         .where('recipe_id', recipe_id)

    return recipe;
}

module.exports = {
    getRecipeById
}