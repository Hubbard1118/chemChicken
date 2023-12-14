import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;


export const ADD_ELEMENT = gql`
mutation savedElements($elementData: elementData) {
  _id
  username
  email
  password
  elements {
    name
    symbol
    atomicNumber
    atomicMass
    category
    group
    period
    block
    electronConfiguration
    electronegativity
    image
  }
}`;