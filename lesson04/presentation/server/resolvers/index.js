const { getRecipes, addRecipe } = require("../models/Recipe");
const sleep = require("../utils/sleep");

module.exports = {
  Query: {
    recipes: async (_, args) => {
      await sleep(global.delay);
      return getRecipes(args);
    }
  },
};
