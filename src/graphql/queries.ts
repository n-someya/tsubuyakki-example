/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTsubuyaki = /* GraphQL */ `
  query GetTsubuyaki($id: ID!) {
    getTsubuyaki(id: $id) {
      id
      year
      content
      owner
      created
    }
  }
`;
export const listTsubuyakis = /* GraphQL */ `
  query ListTsubuyakis(
    $filter: ModelTsubuyakiFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTsubuyakis(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        year
        content
        owner
        created
      }
      nextToken
    }
  }
`;
export const timelineTsubuyaki = /* GraphQL */ `
  query TimelineTsubuyaki(
    $year: String!
    $created: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelTsubuyakiFilterInput
    $limit: Int
    $nextToken: String
  ) {
    timelineTsubuyaki(
      year: $year
      created: $created
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        year
        content
        owner
        created
      }
      nextToken
    }
  }
`;
