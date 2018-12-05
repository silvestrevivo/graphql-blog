'user strict'

//const mongoose = require('mongoose');
const User = require('./models/User');
const Recipe = require('./models/Recipe');

exports.resolvers = {
  Query: {
    recipes: async () => {
      const recipes = await Recipe.find({})
      return recipes;
    },
    users: async () => {
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
