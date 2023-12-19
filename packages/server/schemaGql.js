import { gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    users: [User]
    user(_id: ID!): User
    quotes: [QuoteWithName]
    iquote(by: ID!): [Quote]
    myprofile: User
  }

  type User {
    _id: ID!
    firstName: String
    lastName: String
    email: String
    password: String
    quotes: [Quote]
  }

  """
  Here we are defining QuoteWithName as this consists of Name and by which is referencing to IdName whose type is defined below.
  """
  type QuoteWithName {
    name: String
    by: IdName
  }

  """
  Here we are basically creating a new type called IdName having the _id and firstName fields.
  """
  type IdName {
    _id: String
    firstName: String
  }

  type Quote {
    name: String
    by: ID
  }

  type Token {
    token: String
  }

  type Mutation {
    signupUser(userNew: UserInput!): User
    signinUser(userSignin: UserSigninInput!): Token
    createQuote(name: String!): String
    deleteQuote(quoteId: ID!): String
  }

  input UserInput {
    firstName: String!
    lastName: String!
    email: String!
    password: String!
  }

  input UserSigninInput {
    email: String!
    password: String!
  }
`;

export default typeDefs;
