/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateTsubuyakiInput = {
  id?: string | null,
  year: string,
  content: string,
  owner?: string | null,
  created?: string | null,
};

export type ModelTsubuyakiConditionInput = {
  year?: ModelStringInput | null,
  content?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  created?: ModelStringInput | null,
  and?: Array< ModelTsubuyakiConditionInput | null > | null,
  or?: Array< ModelTsubuyakiConditionInput | null > | null,
  not?: ModelTsubuyakiConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Tsubuyaki = {
  __typename: "Tsubuyaki",
  id: string,
  year: string,
  content: string,
  owner?: string | null,
  created: string,
};

export type DeleteTsubuyakiInput = {
  id: string,
};

export type ModelTsubuyakiFilterInput = {
  id?: ModelIDInput | null,
  year?: ModelStringInput | null,
  content?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  created?: ModelStringInput | null,
  and?: Array< ModelTsubuyakiFilterInput | null > | null,
  or?: Array< ModelTsubuyakiFilterInput | null > | null,
  not?: ModelTsubuyakiFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelTsubuyakiConnection = {
  __typename: "ModelTsubuyakiConnection",
  items:  Array<Tsubuyaki | null >,
  nextToken?: string | null,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type CreateTsubuyakiMutationVariables = {
  input: CreateTsubuyakiInput,
  condition?: ModelTsubuyakiConditionInput | null,
};

export type CreateTsubuyakiMutation = {
  createTsubuyaki?:  {
    __typename: "Tsubuyaki",
    id: string,
    year: string,
    content: string,
    owner?: string | null,
    created: string,
  } | null,
};

export type DeleteTsubuyakiMutationVariables = {
  input: DeleteTsubuyakiInput,
  condition?: ModelTsubuyakiConditionInput | null,
};

export type DeleteTsubuyakiMutation = {
  deleteTsubuyaki?:  {
    __typename: "Tsubuyaki",
    id: string,
    year: string,
    content: string,
    owner?: string | null,
    created: string,
  } | null,
};

export type GetTsubuyakiQueryVariables = {
  id: string,
};

export type GetTsubuyakiQuery = {
  getTsubuyaki?:  {
    __typename: "Tsubuyaki",
    id: string,
    year: string,
    content: string,
    owner?: string | null,
    created: string,
  } | null,
};

export type ListTsubuyakisQueryVariables = {
  filter?: ModelTsubuyakiFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTsubuyakisQuery = {
  listTsubuyakis?:  {
    __typename: "ModelTsubuyakiConnection",
    items:  Array< {
      __typename: "Tsubuyaki",
      id: string,
      year: string,
      content: string,
      owner?: string | null,
      created: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type TimelineTsubuyakiQueryVariables = {
  year: string,
  created?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelTsubuyakiFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type TimelineTsubuyakiQuery = {
  timelineTsubuyaki?:  {
    __typename: "ModelTsubuyakiConnection",
    items:  Array< {
      __typename: "Tsubuyaki",
      id: string,
      year: string,
      content: string,
      owner?: string | null,
      created: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateTsubuyakiSubscription = {
  onCreateTsubuyaki?:  {
    __typename: "Tsubuyaki",
    id: string,
    year: string,
    content: string,
    owner?: string | null,
    created: string,
  } | null,
};
