'user strict'

const User = require('./models/User');
const Recipe = require('./models/Recipe');

exports.resolvers = {
  Query: {
    getAllRecipes: async () => {
      const recipes = await Recipe.find({})
      return recipes;
    },
    getAllUsers: async () => {
      const users = await User.find({})
      return users;
    }
  },

  Mutation: {
    addRecipe: async (root, { name, description, category, instructions, username }) => {
      const newRecipe = await new Recipe({
        name, description, category, instructions, username
      }).save()
      return newRecipe
    }
  }
}
