const router = require('express').Router();
const Recipes = require('./recipes-model.js');


router.get('/:recipe_id', (req, res) => {
    const {recipe_id} = req.params

    Recipes.getRecipeById(recipe_id)
           .then(recipe => {
               res.status(200).json(recipe)
           })
           .catch(err => {
               res.status(500).json({message: "an error occurred fetching that recipe"})
           })
})


module.exports = router;