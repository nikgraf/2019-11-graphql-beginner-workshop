const { getRecipes, addRecipe } = require("../models/Recipe");
const sleep = require("../utils/sleep");

module.exports = {
  Recipe: {
  },
  Query: {
    recipes: async (_, args) => {
      await sleep(global.delay);
      return getRecipes(args);
    }
  },
  Mutation: {
    addRecipe: async (_, { title, vegetarian }) => {
      await sleep(global.delay);
      return addRecipe({title, vegetarian});
    }
  }
};
