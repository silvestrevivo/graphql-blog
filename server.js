'use strict'

const express = require('express');
const mongoose = require('mongoose');
const { typeDefs } = require('./schema');
const { resolvers } = require('./resolvers');
require('dotenv').config({ path: 'variables.env' })

// GraphQL-Express SetUp
const { ApolloServer } = require('apollo-server-express');
const server = new ApolloServer({ typeDefs, resolvers });

// Connect to data base
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true })
  .then(() => console.log('connected to DB Atlas'))
  .catch(err => console.error(err))
mongoose.set('useCreateIndex', true)

// Initializes application
const app = express();
server.applyMiddleware({ app });

const PORT = process.env.PORT || 4444;

app.listen(PORT, () => {
  console.log(`Listening port http://localhost:${PORT}${server.graphqlPath}`)
})
