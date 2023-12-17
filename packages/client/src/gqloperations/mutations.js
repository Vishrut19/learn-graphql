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
