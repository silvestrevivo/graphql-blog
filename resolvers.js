'user strict'

const User = require('./models/User');
const Recipe = require('./models/Recipe');
const jwt = require('jsonwebtoken');

const createToken = (user, secret, expiresIn) => {
  const { username, email } = user;
  return jwt.sign({ username, email }, secret, { expiresIn });
}

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
    },
    signupuser: async (root, { username, email, password }) => {
      const user = await User.findOne({ username })
      if (user) {
        throw new Error('User already exists')
      }
      const newUser = await new User({ username, email, password }).save();
      return { token: createToken(newUser, process.env.SECRET, '1hr') }
    }
  }
}
