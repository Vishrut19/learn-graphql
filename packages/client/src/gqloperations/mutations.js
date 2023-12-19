import { gql } from "@apollo/client";

export const SIGNUP_USERS = gql`
  mutation SignupUser($userNew: UserInput!) {
    user: signupUser(userNew: $userNew) {
      firstName
    }
  }
`;

export const LOGIN_USER = gql`
  mutation SigninUser($userSignin: UserSigninInput!) {
    user: signinUser(userSignin: $userSignin) {
      token
    }
  }
`;

export const CREATE_QUOTE = gql`
  mutation CreateQuote($name: String!) {
    quote: createQuote(name: $name)
  }
`;

export const DELETE_QUOTE = gql`
  mutation CreateQuote($quoteId: ID!) {
    deleteQuote(quoteId: $quoteId)
  }
`;
