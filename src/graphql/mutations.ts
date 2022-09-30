/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTsubuyaki = /* GraphQL */ `
  mutation CreateTsubuyaki(
    $input: CreateTsubuyakiInput!
    $condition: ModelTsubuyakiConditionInput
  ) {
    createTsubuyaki(input: $input, condition: $condition) {
      id
      year
      content
      owner
      created
    }
  }
`;
export const deleteTsubuyaki = /* GraphQL */ `
  mutation DeleteTsubuyaki(
    $input: DeleteTsubuyakiInput!
    $condition: ModelTsubuyakiConditionInput
  ) {
    deleteTsubuyaki(input: $input, condition: $condition) {
      id
      year
      content
      owner
      created
    }
  }
`;
