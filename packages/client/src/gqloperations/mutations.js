import { gql } from "@apollo/client";

export const SIGNUP_USERS = gql`
  mutation SignupUser($userNew: UserInput!) {
    user: signupUser(userNew: $userNew) {
      firstName
    }
  }
`;
