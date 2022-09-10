import type { SelectionSetNode, DocumentNode } from "graphql";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  /** The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID. */
  ID: string;
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: string;
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: boolean;
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: number;
  /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
  Float: number;
};

export type Query = {
  __typename?: "Query";
  scenes: Array<Scene>;
  scenesAggregate: SceneAggregateSelection;
  scenesConnection: ScenesConnection;
  automaticProgressions: Array<AutomaticProgression>;
  automaticProgressionsAggregate: AutomaticProgressionAggregateSelection;
  automaticProgressionsConnection: AutomaticProgressionsConnection;
};

export type QueryScenesArgs = {
  where?: InputMaybe<SceneWhere>;
  options?: InputMaybe<SceneOptions>;
};

export type QueryScenesAggregateArgs = {
  where?: InputMaybe<SceneWhere>;
};

export type QueryScenesConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  after?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<SceneWhere>;
  sort?: InputMaybe<Array<InputMaybe<SceneSort>>>;
};

export type QueryAutomaticProgressionsArgs = {
  where?: InputMaybe<AutomaticProgressionWhere>;
  options?: InputMaybe<AutomaticProgressionOptions>;
};

export type QueryAutomaticProgressionsAggregateArgs = {
  where?: InputMaybe<AutomaticProgressionWhere>;
};

export type QueryAutomaticProgressionsConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  after?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<AutomaticProgressionWhere>;
  sort?: InputMaybe<Array<InputMaybe<AutomaticProgressionSort>>>;
};

export type Mutation = {
  __typename?: "Mutation";
  createScenes: CreateScenesMutationResponse;
  deleteScenes: DeleteInfo;
  updateScenes: UpdateScenesMutationResponse;
  createAutomaticProgressions: CreateAutomaticProgressionsMutationResponse;
  deleteAutomaticProgressions: DeleteInfo;
  updateAutomaticProgressions: UpdateAutomaticProgressionsMutationResponse;
};

export type MutationCreateScenesArgs = {
  input: Array<SceneCreateInput>;
};

export type MutationDeleteScenesArgs = {
  where?: InputMaybe<SceneWhere>;
  delete?: InputMaybe<SceneDeleteInput>;
};

export type MutationUpdateScenesArgs = {
  where?: InputMaybe<SceneWhere>;
  update?: InputMaybe<SceneUpdateInput>;
  connect?: InputMaybe<SceneConnectInput>;
  disconnect?: InputMaybe<SceneDisconnectInput>;
  create?: InputMaybe<SceneRelationInput>;
  delete?: InputMaybe<SceneDeleteInput>;
  connectOrCreate?: InputMaybe<SceneConnectOrCreateInput>;
};

export type MutationCreateAutomaticProgressionsArgs = {
  input: Array<AutomaticProgressionCreateInput>;
};

export type MutationDeleteAutomaticProgressionsArgs = {
  where?: InputMaybe<AutomaticProgressionWhere>;
  delete?: InputMaybe<AutomaticProgressionDeleteInput>;
};

export type MutationUpdateAutomaticProgressionsArgs = {
  where?: InputMaybe<AutomaticProgressionWhere>;
  update?: InputMaybe<AutomaticProgressionUpdateInput>;
  connect?: InputMaybe<AutomaticProgressionConnectInput>;
  disconnect?: InputMaybe<AutomaticProgressionDisconnectInput>;
  create?: InputMaybe<AutomaticProgressionRelationInput>;
  delete?: InputMaybe<AutomaticProgressionDeleteInput>;
  connectOrCreate?: InputMaybe<AutomaticProgressionConnectOrCreateInput>;
};

export enum SortDirection {
  /** Sort by field values in ascending order. */
  Asc = "ASC",
  /** Sort by field values in descending order. */
  Desc = "DESC",
}

export type AutomaticProgression = {
  __typename?: "AutomaticProgression";
  id: Scalars["ID"];
  progression_delay_in_ms: Scalars["Int"];
  scene: Scene;
  sceneAggregate?: Maybe<AutomaticProgressionSceneSceneAggregationSelection>;
  sceneConnection: AutomaticProgressionSceneConnection;
};

export type AutomaticProgressionSceneArgs = {
  where?: InputMaybe<SceneWhere>;
  options?: InputMaybe<SceneOptions>;
  directed?: InputMaybe<Scalars["Boolean"]>;
};

export type AutomaticProgressionSceneAggregateArgs = {
  where?: InputMaybe<SceneWhere>;
  directed?: InputMaybe<Scalars["Boolean"]>;
};

export type AutomaticProgressionSceneConnectionArgs = {
  where?: InputMaybe<AutomaticProgressionSceneConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]>;
  after?: InputMaybe<Scalars["String"]>;
  directed?: InputMaybe<Scalars["Boolean"]>;
  sort?: InputMaybe<Array<AutomaticProgressionSceneConnectionSort>>;
};

export type AutomaticProgressionAggregateSelection = {
  __typename?: "AutomaticProgressionAggregateSelection";
  count: Scalars["Int"];
  id: IdAggregateSelectionNonNullable;
  progression_delay_in_ms: IntAggregateSelectionNonNullable;
};

export type AutomaticProgressionEdge = {
  __typename?: "AutomaticProgressionEdge";
  cursor: Scalars["String"];
  node: AutomaticProgression;
};

export type AutomaticProgressionSceneConnection = {
  __typename?: "AutomaticProgressionSceneConnection";
  edges: Array<AutomaticProgressionSceneRelationship>;
  totalCount: Scalars["Int"];
  pageInfo: PageInfo;
};

export type AutomaticProgressionSceneRelationship = {
  __typename?: "AutomaticProgressionSceneRelationship";
  cursor: Scalars["String"];
  node: Scene;
};

export type AutomaticProgressionSceneSceneAggregationSelection = {
  __typename?: "AutomaticProgressionSceneSceneAggregationSelection";
  count: Scalars["Int"];
  node?: Maybe<AutomaticProgressionSceneSceneNodeAggregateSelection>;
};

export type AutomaticProgressionSceneSceneNodeAggregateSelection = {
  __typename?: "AutomaticProgressionSceneSceneNodeAggregateSelection";
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  title: StringAggregateSelectionNullable;
  description: StringAggregateSelectionNullable;
};

export type AutomaticProgressionsConnection = {
  __typename?: "AutomaticProgressionsConnection";
  totalCount: Scalars["Int"];
  pageInfo: PageInfo;
  edges: Array<AutomaticProgressionEdge>;
};

export type CreateAutomaticProgressionsMutationResponse = {
  __typename?: "CreateAutomaticProgressionsMutationResponse";
  info: CreateInfo;
  automaticProgressions: Array<AutomaticProgression>;
};

export type CreateInfo = {
  __typename?: "CreateInfo";
  bookmark?: Maybe<Scalars["String"]>;
  nodesCreated: Scalars["Int"];
  relationshipsCreated: Scalars["Int"];
};

export type CreateScenesMutationResponse = {
  __typename?: "CreateScenesMutationResponse";
  info: CreateInfo;
  scenes: Array<Scene>;
};

export type DeleteInfo = {
  __typename?: "DeleteInfo";
  bookmark?: Maybe<Scalars["String"]>;
  nodesDeleted: Scalars["Int"];
  relationshipsDeleted: Scalars["Int"];
};

export type IdAggregateSelectionNonNullable = {
  __typename?: "IDAggregateSelectionNonNullable";
  shortest: Scalars["ID"];
  longest: Scalars["ID"];
};

export type IntAggregateSelectionNonNullable = {
  __typename?: "IntAggregateSelectionNonNullable";
  max: Scalars["Int"];
  min: Scalars["Int"];
  average: Scalars["Float"];
  sum: Scalars["Int"];
};

/** Pagination information (Relay) */
export type PageInfo = {
  __typename?: "PageInfo";
  hasNextPage: Scalars["Boolean"];
  hasPreviousPage: Scalars["Boolean"];
  startCursor?: Maybe<Scalars["String"]>;
  endCursor?: Maybe<Scalars["String"]>;
};

export type Scene = {
  __typename?: "Scene";
  id: Scalars["ID"];
  name: Scalars["String"];
  title?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  automaticProgression?: Maybe<AutomaticProgression>;
  automaticProgressionAggregate?: Maybe<SceneAutomaticProgressionAutomaticProgressionAggregationSelection>;
  automaticProgressionConnection: SceneAutomaticProgressionConnection;
};

export type SceneAutomaticProgressionArgs = {
  where?: InputMaybe<AutomaticProgressionWhere>;
  options?: InputMaybe<AutomaticProgressionOptions>;
  directed?: InputMaybe<Scalars["Boolean"]>;
};

export type SceneAutomaticProgressionAggregateArgs = {
  where?: InputMaybe<AutomaticProgressionWhere>;
  directed?: InputMaybe<Scalars["Boolean"]>;
};

export type SceneAutomaticProgressionConnectionArgs = {
  where?: InputMaybe<SceneAutomaticProgressionConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]>;
  after?: InputMaybe<Scalars["String"]>;
  directed?: InputMaybe<Scalars["Boolean"]>;
  sort?: InputMaybe<Array<SceneAutomaticProgressionConnectionSort>>;
};

export type SceneAggregateSelection = {
  __typename?: "SceneAggregateSelection";
  count: Scalars["Int"];
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  title: StringAggregateSelectionNullable;
  description: StringAggregateSelectionNullable;
};

export type SceneAutomaticProgressionAutomaticProgressionAggregationSelection =
  {
    __typename?: "SceneAutomaticProgressionAutomaticProgressionAggregationSelection";
    count: Scalars["Int"];
    node?: Maybe<SceneAutomaticProgressionAutomaticProgressionNodeAggregateSelection>;
  };

export type SceneAutomaticProgressionAutomaticProgressionNodeAggregateSelection =
  {
    __typename?: "SceneAutomaticProgressionAutomaticProgressionNodeAggregateSelection";
    id: IdAggregateSelectionNonNullable;
    progression_delay_in_ms: IntAggregateSelectionNonNullable;
  };

export type SceneAutomaticProgressionConnection = {
  __typename?: "SceneAutomaticProgressionConnection";
  edges: Array<SceneAutomaticProgressionRelationship>;
  totalCount: Scalars["Int"];
  pageInfo: PageInfo;
};

export type SceneAutomaticProgressionRelationship = {
  __typename?: "SceneAutomaticProgressionRelationship";
  cursor: Scalars["String"];
  node: AutomaticProgression;
};

export type SceneEdge = {
  __typename?: "SceneEdge";
  cursor: Scalars["String"];
  node: Scene;
};

export type ScenesConnection = {
  __typename?: "ScenesConnection";
  totalCount: Scalars["Int"];
  pageInfo: PageInfo;
  edges: Array<SceneEdge>;
};

export type StringAggregateSelectionNonNullable = {
  __typename?: "StringAggregateSelectionNonNullable";
  shortest: Scalars["String"];
  longest: Scalars["String"];
};

export type StringAggregateSelectionNullable = {
  __typename?: "StringAggregateSelectionNullable";
  shortest?: Maybe<Scalars["String"]>;
  longest?: Maybe<Scalars["String"]>;
};

export type UpdateAutomaticProgressionsMutationResponse = {
  __typename?: "UpdateAutomaticProgressionsMutationResponse";
  info: UpdateInfo;
  automaticProgressions: Array<AutomaticProgression>;
};

export type UpdateInfo = {
  __typename?: "UpdateInfo";
  bookmark?: Maybe<Scalars["String"]>;
  nodesCreated: Scalars["Int"];
  nodesDeleted: Scalars["Int"];
  relationshipsCreated: Scalars["Int"];
  relationshipsDeleted: Scalars["Int"];
};

export type UpdateScenesMutationResponse = {
  __typename?: "UpdateScenesMutationResponse";
  info: UpdateInfo;
  scenes: Array<Scene>;
};

export type AutomaticProgressionConnectInput = {
  scene?: InputMaybe<AutomaticProgressionSceneConnectFieldInput>;
};

export type AutomaticProgressionConnectOrCreateInput = {
  scene?: InputMaybe<AutomaticProgressionSceneConnectOrCreateFieldInput>;
};

export type AutomaticProgressionConnectOrCreateWhere = {
  node: AutomaticProgressionUniqueWhere;
};

export type AutomaticProgressionConnectWhere = {
  node: AutomaticProgressionWhere;
};

export type AutomaticProgressionCreateInput = {
  progression_delay_in_ms: Scalars["Int"];
  scene?: InputMaybe<AutomaticProgressionSceneFieldInput>;
};

export type AutomaticProgressionDeleteInput = {
  scene?: InputMaybe<AutomaticProgressionSceneDeleteFieldInput>;
};

export type AutomaticProgressionDisconnectInput = {
  scene?: InputMaybe<AutomaticProgressionSceneDisconnectFieldInput>;
};

export type AutomaticProgressionOnCreateInput = {
  progression_delay_in_ms: Scalars["Int"];
};

export type AutomaticProgressionOptions = {
  /** Specify one or more AutomaticProgressionSort objects to sort AutomaticProgressions by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<AutomaticProgressionSort>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
};

export type AutomaticProgressionRelationInput = {
  scene?: InputMaybe<AutomaticProgressionSceneCreateFieldInput>;
};

export type AutomaticProgressionSceneAggregateInput = {
  count?: InputMaybe<Scalars["Int"]>;
  count_LT?: InputMaybe<Scalars["Int"]>;
  count_LTE?: InputMaybe<Scalars["Int"]>;
  count_GT?: InputMaybe<Scalars["Int"]>;
  count_GTE?: InputMaybe<Scalars["Int"]>;
  AND?: InputMaybe<Array<AutomaticProgressionSceneAggregateInput>>;
  OR?: InputMaybe<Array<AutomaticProgressionSceneAggregateInput>>;
  node?: InputMaybe<AutomaticProgressionSceneNodeAggregationWhereInput>;
};

export type AutomaticProgressionSceneConnectFieldInput = {
  where?: InputMaybe<SceneConnectWhere>;
  connect?: InputMaybe<SceneConnectInput>;
};

export type AutomaticProgressionSceneConnectionSort = {
  node?: InputMaybe<SceneSort>;
};

export type AutomaticProgressionSceneConnectionWhere = {
  AND?: InputMaybe<Array<AutomaticProgressionSceneConnectionWhere>>;
  OR?: InputMaybe<Array<AutomaticProgressionSceneConnectionWhere>>;
  node?: InputMaybe<SceneWhere>;
  node_NOT?: InputMaybe<SceneWhere>;
};

export type AutomaticProgressionSceneConnectOrCreateFieldInput = {
  where: SceneConnectOrCreateWhere;
  onCreate: AutomaticProgressionSceneConnectOrCreateFieldInputOnCreate;
};

export type AutomaticProgressionSceneConnectOrCreateFieldInputOnCreate = {
  node: SceneOnCreateInput;
};

export type AutomaticProgressionSceneCreateFieldInput = {
  node: SceneCreateInput;
};

export type AutomaticProgressionSceneDeleteFieldInput = {
  where?: InputMaybe<AutomaticProgressionSceneConnectionWhere>;
  delete?: InputMaybe<SceneDeleteInput>;
};

export type AutomaticProgressionSceneDisconnectFieldInput = {
  where?: InputMaybe<AutomaticProgressionSceneConnectionWhere>;
  disconnect?: InputMaybe<SceneDisconnectInput>;
};

export type AutomaticProgressionSceneFieldInput = {
  create?: InputMaybe<AutomaticProgressionSceneCreateFieldInput>;
  connect?: InputMaybe<AutomaticProgressionSceneConnectFieldInput>;
  connectOrCreate?: InputMaybe<AutomaticProgressionSceneConnectOrCreateFieldInput>;
};

export type AutomaticProgressionSceneNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<AutomaticProgressionSceneNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<AutomaticProgressionSceneNodeAggregationWhereInput>>;
  id_EQUAL?: InputMaybe<Scalars["ID"]>;
  name_EQUAL?: InputMaybe<Scalars["String"]>;
  name_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  name_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  name_GT?: InputMaybe<Scalars["Int"]>;
  name_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  name_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  name_GTE?: InputMaybe<Scalars["Int"]>;
  name_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  name_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  name_LT?: InputMaybe<Scalars["Int"]>;
  name_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  name_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  name_LTE?: InputMaybe<Scalars["Int"]>;
  name_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  name_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  name_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  title_EQUAL?: InputMaybe<Scalars["String"]>;
  title_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  title_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  title_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  title_GT?: InputMaybe<Scalars["Int"]>;
  title_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  title_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  title_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  title_GTE?: InputMaybe<Scalars["Int"]>;
  title_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  title_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  title_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  title_LT?: InputMaybe<Scalars["Int"]>;
  title_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  title_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  title_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  title_LTE?: InputMaybe<Scalars["Int"]>;
  title_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  title_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  title_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
  description_EQUAL?: InputMaybe<Scalars["String"]>;
  description_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  description_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  description_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]>;
  description_GT?: InputMaybe<Scalars["Int"]>;
  description_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  description_LONGEST_GT?: InputMaybe<Scalars["Int"]>;
  description_SHORTEST_GT?: InputMaybe<Scalars["Int"]>;
  description_GTE?: InputMaybe<Scalars["Int"]>;
  description_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  description_LONGEST_GTE?: InputMaybe<Scalars["Int"]>;
  description_SHORTEST_GTE?: InputMaybe<Scalars["Int"]>;
  description_LT?: InputMaybe<Scalars["Int"]>;
  description_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  description_LONGEST_LT?: InputMaybe<Scalars["Int"]>;
  description_SHORTEST_LT?: InputMaybe<Scalars["Int"]>;
  description_LTE?: InputMaybe<Scalars["Int"]>;
  description_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  description_LONGEST_LTE?: InputMaybe<Scalars["Int"]>;
  description_SHORTEST_LTE?: InputMaybe<Scalars["Int"]>;
};

export type AutomaticProgressionSceneUpdateConnectionInput = {
  node?: InputMaybe<SceneUpdateInput>;
};

export type AutomaticProgressionSceneUpdateFieldInput = {
  where?: InputMaybe<AutomaticProgressionSceneConnectionWhere>;
  update?: InputMaybe<AutomaticProgressionSceneUpdateConnectionInput>;
  connect?: InputMaybe<AutomaticProgressionSceneConnectFieldInput>;
  disconnect?: InputMaybe<AutomaticProgressionSceneDisconnectFieldInput>;
  create?: InputMaybe<AutomaticProgressionSceneCreateFieldInput>;
  delete?: InputMaybe<AutomaticProgressionSceneDeleteFieldInput>;
  connectOrCreate?: InputMaybe<AutomaticProgressionSceneConnectOrCreateFieldInput>;
};

/** Fields to sort AutomaticProgressions by. The order in which sorts are applied is not guaranteed when specifying many fields in one AutomaticProgressionSort object. */
export type AutomaticProgressionSort = {
  id?: InputMaybe<SortDirection>;
  progression_delay_in_ms?: InputMaybe<SortDirection>;
};

export type AutomaticProgressionUniqueWhere = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type AutomaticProgressionUpdateInput = {
  progression_delay_in_ms?: InputMaybe<Scalars["Int"]>;
  progression_delay_in_ms_INCREMENT?: InputMaybe<Scalars["Int"]>;
  progression_delay_in_ms_DECREMENT?: InputMaybe<Scalars["Int"]>;
  scene?: InputMaybe<AutomaticProgressionSceneUpdateFieldInput>;
};

export type AutomaticProgressionWhere = {
  OR?: InputMaybe<Array<AutomaticProgressionWhere>>;
  AND?: InputMaybe<Array<AutomaticProgressionWhere>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_NOT?: InputMaybe<Scalars["ID"]>;
  id_IN?: InputMaybe<Array<Scalars["ID"]>>;
  id_NOT_IN?: InputMaybe<Array<Scalars["ID"]>>;
  id_CONTAINS?: InputMaybe<Scalars["ID"]>;
  id_NOT_CONTAINS?: InputMaybe<Scalars["ID"]>;
  id_STARTS_WITH?: InputMaybe<Scalars["ID"]>;
  id_NOT_STARTS_WITH?: InputMaybe<Scalars["ID"]>;
  id_ENDS_WITH?: InputMaybe<Scalars["ID"]>;
  id_NOT_ENDS_WITH?: InputMaybe<Scalars["ID"]>;
  progression_delay_in_ms?: InputMaybe<Scalars["Int"]>;
  progression_delay_in_ms_NOT?: InputMaybe<Scalars["Int"]>;
  progression_delay_in_ms_IN?: InputMaybe<Array<Scalars["Int"]>>;
  progression_delay_in_ms_NOT_IN?: InputMaybe<Array<Scalars["Int"]>>;
  progression_delay_in_ms_LT?: InputMaybe<Scalars["Int"]>;
  progression_delay_in_ms_LTE?: InputMaybe<Scalars["Int"]>;
  progression_delay_in_ms_GT?: InputMaybe<Scalars["Int"]>;
  progression_delay_in_ms_GTE?: InputMaybe<Scalars["Int"]>;
  scene?: InputMaybe<SceneWhere>;
  scene_NOT?: InputMaybe<SceneWhere>;
  sceneAggregate?: InputMaybe<AutomaticProgressionSceneAggregateInput>;
  sceneConnection?: InputMaybe<AutomaticProgressionSceneConnectionWhere>;
  sceneConnection_NOT?: InputMaybe<AutomaticProgressionSceneConnectionWhere>;
};

export type SceneAutomaticProgressionAggregateInput = {
  count?: InputMaybe<Scalars["Int"]>;
  count_LT?: InputMaybe<Scalars["Int"]>;
  count_LTE?: InputMaybe<Scalars["Int"]>;
  count_GT?: InputMaybe<Scalars["Int"]>;
  count_GTE?: InputMaybe<Scalars["Int"]>;
  AND?: InputMaybe<Array<SceneAutomaticProgressionAggregateInput>>;
  OR?: InputMaybe<Array<SceneAutomaticProgressionAggregateInput>>;
  node?: InputMaybe<SceneAutomaticProgressionNodeAggregationWhereInput>;
};

export type SceneAutomaticProgressionConnectFieldInput = {
  where?: InputMaybe<AutomaticProgressionConnectWhere>;
  connect?: InputMaybe<AutomaticProgressionConnectInput>;
};

export type SceneAutomaticProgressionConnectionSort = {
  node?: InputMaybe<AutomaticProgressionSort>;
};

export type SceneAutomaticProgressionConnectionWhere = {
  AND?: InputMaybe<Array<SceneAutomaticProgressionConnectionWhere>>;
  OR?: InputMaybe<Array<SceneAutomaticProgressionConnectionWhere>>;
  node?: InputMaybe<AutomaticProgressionWhere>;
  node_NOT?: InputMaybe<AutomaticProgressionWhere>;
};

export type SceneAutomaticProgressionConnectOrCreateFieldInput = {
  where: AutomaticProgressionConnectOrCreateWhere;
  onCreate: SceneAutomaticProgressionConnectOrCreateFieldInputOnCreate;
};

export type SceneAutomaticProgressionConnectOrCreateFieldInputOnCreate = {
  node: AutomaticProgressionOnCreateInput;
};

export type SceneAutomaticProgressionCreateFieldInput = {
  node: AutomaticProgressionCreateInput;
};

export type SceneAutomaticProgressionDeleteFieldInput = {
  where?: InputMaybe<SceneAutomaticProgressionConnectionWhere>;
  delete?: InputMaybe<AutomaticProgressionDeleteInput>;
};

export type SceneAutomaticProgressionDisconnectFieldInput = {
  where?: InputMaybe<SceneAutomaticProgressionConnectionWhere>;
  disconnect?: InputMaybe<AutomaticProgressionDisconnectInput>;
};

export type SceneAutomaticProgressionFieldInput = {
  create?: InputMaybe<SceneAutomaticProgressionCreateFieldInput>;
  connect?: InputMaybe<SceneAutomaticProgressionConnectFieldInput>;
  connectOrCreate?: InputMaybe<SceneAutomaticProgressionConnectOrCreateFieldInput>;
};

export type SceneAutomaticProgressionNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<SceneAutomaticProgressionNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<SceneAutomaticProgressionNodeAggregationWhereInput>>;
  id_EQUAL?: InputMaybe<Scalars["ID"]>;
  progression_delay_in_ms_EQUAL?: InputMaybe<Scalars["Int"]>;
  progression_delay_in_ms_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]>;
  progression_delay_in_ms_MIN_EQUAL?: InputMaybe<Scalars["Int"]>;
  progression_delay_in_ms_MAX_EQUAL?: InputMaybe<Scalars["Int"]>;
  progression_delay_in_ms_SUM_EQUAL?: InputMaybe<Scalars["Int"]>;
  progression_delay_in_ms_GT?: InputMaybe<Scalars["Int"]>;
  progression_delay_in_ms_AVERAGE_GT?: InputMaybe<Scalars["Float"]>;
  progression_delay_in_ms_MIN_GT?: InputMaybe<Scalars["Int"]>;
  progression_delay_in_ms_MAX_GT?: InputMaybe<Scalars["Int"]>;
  progression_delay_in_ms_SUM_GT?: InputMaybe<Scalars["Int"]>;
  progression_delay_in_ms_GTE?: InputMaybe<Scalars["Int"]>;
  progression_delay_in_ms_AVERAGE_GTE?: InputMaybe<Scalars["Float"]>;
  progression_delay_in_ms_MIN_GTE?: InputMaybe<Scalars["Int"]>;
  progression_delay_in_ms_MAX_GTE?: InputMaybe<Scalars["Int"]>;
  progression_delay_in_ms_SUM_GTE?: InputMaybe<Scalars["Int"]>;
  progression_delay_in_ms_LT?: InputMaybe<Scalars["Int"]>;
  progression_delay_in_ms_AVERAGE_LT?: InputMaybe<Scalars["Float"]>;
  progression_delay_in_ms_MIN_LT?: InputMaybe<Scalars["Int"]>;
  progression_delay_in_ms_MAX_LT?: InputMaybe<Scalars["Int"]>;
  progression_delay_in_ms_SUM_LT?: InputMaybe<Scalars["Int"]>;
  progression_delay_in_ms_LTE?: InputMaybe<Scalars["Int"]>;
  progression_delay_in_ms_AVERAGE_LTE?: InputMaybe<Scalars["Float"]>;
  progression_delay_in_ms_MIN_LTE?: InputMaybe<Scalars["Int"]>;
  progression_delay_in_ms_MAX_LTE?: InputMaybe<Scalars["Int"]>;
  progression_delay_in_ms_SUM_LTE?: InputMaybe<Scalars["Int"]>;
};

export type SceneAutomaticProgressionUpdateConnectionInput = {
  node?: InputMaybe<AutomaticProgressionUpdateInput>;
};

export type SceneAutomaticProgressionUpdateFieldInput = {
  where?: InputMaybe<SceneAutomaticProgressionConnectionWhere>;
  update?: InputMaybe<SceneAutomaticProgressionUpdateConnectionInput>;
  connect?: InputMaybe<SceneAutomaticProgressionConnectFieldInput>;
  disconnect?: InputMaybe<SceneAutomaticProgressionDisconnectFieldInput>;
  create?: InputMaybe<SceneAutomaticProgressionCreateFieldInput>;
  delete?: InputMaybe<SceneAutomaticProgressionDeleteFieldInput>;
  connectOrCreate?: InputMaybe<SceneAutomaticProgressionConnectOrCreateFieldInput>;
};

export type SceneConnectInput = {
  automaticProgression?: InputMaybe<SceneAutomaticProgressionConnectFieldInput>;
};

export type SceneConnectOrCreateInput = {
  automaticProgression?: InputMaybe<SceneAutomaticProgressionConnectOrCreateFieldInput>;
};

export type SceneConnectOrCreateWhere = {
  node: SceneUniqueWhere;
};

export type SceneConnectWhere = {
  node: SceneWhere;
};

export type SceneCreateInput = {
  name: Scalars["String"];
  title?: InputMaybe<Scalars["String"]>;
  description?: InputMaybe<Scalars["String"]>;
  automaticProgression?: InputMaybe<SceneAutomaticProgressionFieldInput>;
};

export type SceneDeleteInput = {
  automaticProgression?: InputMaybe<SceneAutomaticProgressionDeleteFieldInput>;
};

export type SceneDisconnectInput = {
  automaticProgression?: InputMaybe<SceneAutomaticProgressionDisconnectFieldInput>;
};

export type SceneOnCreateInput = {
  name: Scalars["String"];
  title?: InputMaybe<Scalars["String"]>;
  description?: InputMaybe<Scalars["String"]>;
};

export type SceneOptions = {
  /** Specify one or more SceneSort objects to sort Scenes by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<SceneSort>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
};

export type SceneRelationInput = {
  automaticProgression?: InputMaybe<SceneAutomaticProgressionCreateFieldInput>;
};

/** Fields to sort Scenes by. The order in which sorts are applied is not guaranteed when specifying many fields in one SceneSort object. */
export type SceneSort = {
  id?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
  title?: InputMaybe<SortDirection>;
  description?: InputMaybe<SortDirection>;
};

export type SceneUniqueWhere = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type SceneUpdateInput = {
  name?: InputMaybe<Scalars["String"]>;
  title?: InputMaybe<Scalars["String"]>;
  description?: InputMaybe<Scalars["String"]>;
  automaticProgression?: InputMaybe<SceneAutomaticProgressionUpdateFieldInput>;
};

export type SceneWhere = {
  OR?: InputMaybe<Array<SceneWhere>>;
  AND?: InputMaybe<Array<SceneWhere>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_NOT?: InputMaybe<Scalars["ID"]>;
  id_IN?: InputMaybe<Array<Scalars["ID"]>>;
  id_NOT_IN?: InputMaybe<Array<Scalars["ID"]>>;
  id_CONTAINS?: InputMaybe<Scalars["ID"]>;
  id_NOT_CONTAINS?: InputMaybe<Scalars["ID"]>;
  id_STARTS_WITH?: InputMaybe<Scalars["ID"]>;
  id_NOT_STARTS_WITH?: InputMaybe<Scalars["ID"]>;
  id_ENDS_WITH?: InputMaybe<Scalars["ID"]>;
  id_NOT_ENDS_WITH?: InputMaybe<Scalars["ID"]>;
  name?: InputMaybe<Scalars["String"]>;
  name_NOT?: InputMaybe<Scalars["String"]>;
  name_IN?: InputMaybe<Array<Scalars["String"]>>;
  name_NOT_IN?: InputMaybe<Array<Scalars["String"]>>;
  name_CONTAINS?: InputMaybe<Scalars["String"]>;
  name_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  name_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  name_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  name_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  name_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  title?: InputMaybe<Scalars["String"]>;
  title_NOT?: InputMaybe<Scalars["String"]>;
  title_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  title_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  title_CONTAINS?: InputMaybe<Scalars["String"]>;
  title_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  title_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  title_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  title_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  title_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  description?: InputMaybe<Scalars["String"]>;
  description_NOT?: InputMaybe<Scalars["String"]>;
  description_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  description_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  description_CONTAINS?: InputMaybe<Scalars["String"]>;
  description_NOT_CONTAINS?: InputMaybe<Scalars["String"]>;
  description_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  description_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]>;
  description_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  description_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]>;
  automaticProgression?: InputMaybe<AutomaticProgressionWhere>;
  automaticProgression_NOT?: InputMaybe<AutomaticProgressionWhere>;
  automaticProgressionAggregate?: InputMaybe<SceneAutomaticProgressionAggregateInput>;
  automaticProgressionConnection?: InputMaybe<SceneAutomaticProgressionConnectionWhere>;
  automaticProgressionConnection_NOT?: InputMaybe<SceneAutomaticProgressionConnectionWhere>;
};

export interface IdAggregateInputNonNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface StringAggregateInputNonNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface StringAggregateInputNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface SceneAggregateSelectionInput {
  count?: boolean;
  id?: IdAggregateInputNonNullable;
  name?: StringAggregateInputNonNullable;
  title?: StringAggregateInputNullable;
  description?: StringAggregateInputNullable;
}

export declare class SceneModel {
  public find(args?: {
    where?: SceneWhere;

    options?: SceneOptions;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<Scene[]>;
  public create(args: {
    input: SceneCreateInput[];
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CreateScenesMutationResponse>;
  public update(args: {
    where?: SceneWhere;
    update?: SceneUpdateInput;
    connect?: SceneConnectInput;
    disconnect?: SceneDisconnectInput;
    create?: SceneCreateInput;
    connectOrCreate?: SceneConnectOrCreateInput;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdateScenesMutationResponse>;
  public delete(args: {
    where?: SceneWhere;
    delete?: SceneDeleteInput;
    context?: any;
    rootValue?: any;
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>;
  public aggregate(args: {
    where?: SceneWhere;

    aggregate: SceneAggregateSelectionInput;
    context?: any;
    rootValue?: any;
  }): Promise<SceneAggregateSelection>;
}

export interface IdAggregateInputNonNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface StringAggregateInputNonNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface StringAggregateInputNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface IntAggregateInputNonNullable {
  max?: boolean;
  min?: boolean;
  average?: boolean;
  sum?: boolean;
}
export interface AutomaticProgressionAggregateSelectionInput {
  count?: boolean;
  id?: IdAggregateInputNonNullable;
  progression_delay_in_ms?: IntAggregateInputNonNullable;
}

export declare class AutomaticProgressionModel {
  public find(args?: {
    where?: AutomaticProgressionWhere;

    options?: AutomaticProgressionOptions;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<AutomaticProgression[]>;
  public create(args: {
    input: AutomaticProgressionCreateInput[];
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CreateAutomaticProgressionsMutationResponse>;
  public update(args: {
    where?: AutomaticProgressionWhere;
    update?: AutomaticProgressionUpdateInput;
    connect?: AutomaticProgressionConnectInput;
    disconnect?: AutomaticProgressionDisconnectInput;
    create?: AutomaticProgressionCreateInput;
    connectOrCreate?: AutomaticProgressionConnectOrCreateInput;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdateAutomaticProgressionsMutationResponse>;
  public delete(args: {
    where?: AutomaticProgressionWhere;
    delete?: AutomaticProgressionDeleteInput;
    context?: any;
    rootValue?: any;
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>;
  public aggregate(args: {
    where?: AutomaticProgressionWhere;

    aggregate: AutomaticProgressionAggregateSelectionInput;
    context?: any;
    rootValue?: any;
  }): Promise<AutomaticProgressionAggregateSelection>;
}

export interface ModelMap {
  Scene: SceneModel;
  AutomaticProgression: AutomaticProgressionModel;
}
