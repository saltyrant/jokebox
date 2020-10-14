/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getJoke = /* GraphQL */ `
  query GetJoke($id: ID!) {
    getJoke(id: $id) {
      id
      question
      answer
      createdAt
      updatedAt
    }
  }
`;
export const listJokes = /* GraphQL */ `
  query ListJokes(
    $filter: ModelJokeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listJokes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        question
        answer
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getNewOne = /* GraphQL */ `
  query GetNewOne($id: ID!) {
    getNewOne(id: $id) {
      id
      testing
      workflow
      createdAt
      updatedAt
    }
  }
`;
export const listNewOnes = /* GraphQL */ `
  query ListNewOnes(
    $filter: ModelNewOneFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNewOnes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        testing
        workflow
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
