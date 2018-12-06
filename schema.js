const { gql } = require('apollo-server-express');

exports.typeDefs = gql`
  type Query {
    getAllRecipes: [Recipe]!
    getAllUsers: [User]!
  }

  type Recipe{
    _id: ID!
    name: String!
    category: String!
    description: String!
    instructions: String!
    createdDate: String
    likes: Int
    username: String
  }

  type User{
    _id: ID!
    username: String!
    password: String!
    email: String!
    joinDate: String
    favorites: [Recipe]
  }

  type Mutation{
    addRecipe(name: String!, description: String!, category: String!, instructions:String!, username: String): Recipe
  }
`;
