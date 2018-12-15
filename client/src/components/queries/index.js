import { gql } from 'apollo-boost';

//Recipes queries
export const GET_ALL_RECIPES = gql`
  query{
    getAllRecipes{
      name
      description
      instructions
      category
      likes
      createdDate
    }
  }
`;

//Recipes mutations

//User queries

//User mutations
export const SIGNUP_USER = gql`
  mutation($username: String!, $email: String!, $password: String!){
    signupuser(username: $username, email: $email, password: $password ){
      token
    }
  }
`;

