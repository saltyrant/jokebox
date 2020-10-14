/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createJoke = /* GraphQL */ `
  mutation CreateJoke(
    $input: CreateJokeInput!
    $condition: ModelJokeConditionInput
  ) {
    createJoke(input: $input, condition: $condition) {
      id
      question
      answer
      createdAt
      updatedAt
    }
  }
`;
export const updateJoke = /* GraphQL */ `
  mutation UpdateJoke(
    $input: UpdateJokeInput!
    $condition: ModelJokeConditionInput
  ) {
    updateJoke(input: $input, condition: $condition) {
      id
      question
      answer
      createdAt
      updatedAt
    }
  }
`;
export const deleteJoke = /* GraphQL */ `
  mutation DeleteJoke(
    $input: DeleteJokeInput!
    $condition: ModelJokeConditionInput
  ) {
    deleteJoke(input: $input, condition: $condition) {
      id
      question
      answer
      createdAt
      updatedAt
    }
  }
`;
export const createNewOne = /* GraphQL */ `
  mutation CreateNewOne(
    $input: CreateNewOneInput!
    $condition: ModelNewOneConditionInput
  ) {
    createNewOne(input: $input, condition: $condition) {
      id
      testing
      workflow
      createdAt
      updatedAt
    }
  }
`;
export const updateNewOne = /* GraphQL */ `
  mutation UpdateNewOne(
    $input: UpdateNewOneInput!
    $condition: ModelNewOneConditionInput
  ) {
    updateNewOne(input: $input, condition: $condition) {
      id
      testing
      workflow
      createdAt
      updatedAt
    }
  }
`;
export const deleteNewOne = /* GraphQL */ `
  mutation DeleteNewOne(
    $input: DeleteNewOneInput!
    $condition: ModelNewOneConditionInput
  ) {
    deleteNewOne(input: $input, condition: $condition) {
      id
      testing
      workflow
      createdAt
      updatedAt
    }
  }
`;
