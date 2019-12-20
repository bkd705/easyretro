// Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export type Maybe<T> = T | undefined | null;

export interface Exists {
  board: (where?: BoardWhereInput) => Promise<boolean>;
  item: (where?: ItemWhereInput) => Promise<boolean>;
  team: (where?: TeamWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  board: (where: BoardWhereUniqueInput) => BoardNullablePromise;
  boards: (args?: {
    where?: BoardWhereInput;
    orderBy?: BoardOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Board>;
  boardsConnection: (args?: {
    where?: BoardWhereInput;
    orderBy?: BoardOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => BoardConnectionPromise;
  item: (where: ItemWhereUniqueInput) => ItemNullablePromise;
  items: (args?: {
    where?: ItemWhereInput;
    orderBy?: ItemOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Item>;
  itemsConnection: (args?: {
    where?: ItemWhereInput;
    orderBy?: ItemOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => ItemConnectionPromise;
  team: (where: TeamWhereUniqueInput) => TeamNullablePromise;
  teams: (args?: {
    where?: TeamWhereInput;
    orderBy?: TeamOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Team>;
  teamsConnection: (args?: {
    where?: TeamWhereInput;
    orderBy?: TeamOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => TeamConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createBoard: (data: BoardCreateInput) => BoardPromise;
  updateBoard: (args: {
    data: BoardUpdateInput;
    where: BoardWhereUniqueInput;
  }) => BoardPromise;
  upsertBoard: (args: {
    where: BoardWhereUniqueInput;
    create: BoardCreateInput;
    update: BoardUpdateInput;
  }) => BoardPromise;
  deleteBoard: (where: BoardWhereUniqueInput) => BoardPromise;
  deleteManyBoards: (where?: BoardWhereInput) => BatchPayloadPromise;
  createItem: (data: ItemCreateInput) => ItemPromise;
  updateItem: (args: {
    data: ItemUpdateInput;
    where: ItemWhereUniqueInput;
  }) => ItemPromise;
  updateManyItems: (args: {
    data: ItemUpdateManyMutationInput;
    where?: ItemWhereInput;
  }) => BatchPayloadPromise;
  upsertItem: (args: {
    where: ItemWhereUniqueInput;
    create: ItemCreateInput;
    update: ItemUpdateInput;
  }) => ItemPromise;
  deleteItem: (where: ItemWhereUniqueInput) => ItemPromise;
  deleteManyItems: (where?: ItemWhereInput) => BatchPayloadPromise;
  createTeam: (data: TeamCreateInput) => TeamPromise;
  updateTeam: (args: {
    data: TeamUpdateInput;
    where: TeamWhereUniqueInput;
  }) => TeamPromise;
  updateManyTeams: (args: {
    data: TeamUpdateManyMutationInput;
    where?: TeamWhereInput;
  }) => BatchPayloadPromise;
  upsertTeam: (args: {
    where: TeamWhereUniqueInput;
    create: TeamCreateInput;
    update: TeamUpdateInput;
  }) => TeamPromise;
  deleteTeam: (where: TeamWhereUniqueInput) => TeamPromise;
  deleteManyTeams: (where?: TeamWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  board: (
    where?: BoardSubscriptionWhereInput
  ) => BoardSubscriptionPayloadSubscription;
  item: (
    where?: ItemSubscriptionWhereInput
  ) => ItemSubscriptionPayloadSubscription;
  team: (
    where?: TeamSubscriptionWhereInput
  ) => TeamSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type category = "START" | "STOP" | "CONTINUE" | "ACTION";

export type BoardOrderByInput = "id_ASC" | "id_DESC";

export type ItemOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "text_ASC"
  | "text_DESC"
  | "category_ASC"
  | "category_DESC";

export type TeamOrderByInput = "id_ASC" | "id_DESC" | "name_ASC" | "name_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export interface ItemUpdateManyWithoutBoardInput {
  create?: Maybe<ItemCreateWithoutBoardInput[] | ItemCreateWithoutBoardInput>;
  delete?: Maybe<ItemWhereUniqueInput[] | ItemWhereUniqueInput>;
  connect?: Maybe<ItemWhereUniqueInput[] | ItemWhereUniqueInput>;
  set?: Maybe<ItemWhereUniqueInput[] | ItemWhereUniqueInput>;
  disconnect?: Maybe<ItemWhereUniqueInput[] | ItemWhereUniqueInput>;
  update?: Maybe<
    | ItemUpdateWithWhereUniqueWithoutBoardInput[]
    | ItemUpdateWithWhereUniqueWithoutBoardInput
  >;
  upsert?: Maybe<
    | ItemUpsertWithWhereUniqueWithoutBoardInput[]
    | ItemUpsertWithWhereUniqueWithoutBoardInput
  >;
  deleteMany?: Maybe<ItemScalarWhereInput[] | ItemScalarWhereInput>;
  updateMany?: Maybe<
    ItemUpdateManyWithWhereNestedInput[] | ItemUpdateManyWithWhereNestedInput
  >;
}

export type BoardWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface ItemUpsertWithWhereUniqueWithoutBoardInput {
  where: ItemWhereUniqueInput;
  update: ItemUpdateWithoutBoardDataInput;
  create: ItemCreateWithoutBoardInput;
}

export interface ItemWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  board?: Maybe<BoardWhereInput>;
  text?: Maybe<String>;
  text_not?: Maybe<String>;
  text_in?: Maybe<String[] | String>;
  text_not_in?: Maybe<String[] | String>;
  text_lt?: Maybe<String>;
  text_lte?: Maybe<String>;
  text_gt?: Maybe<String>;
  text_gte?: Maybe<String>;
  text_contains?: Maybe<String>;
  text_not_contains?: Maybe<String>;
  text_starts_with?: Maybe<String>;
  text_not_starts_with?: Maybe<String>;
  text_ends_with?: Maybe<String>;
  text_not_ends_with?: Maybe<String>;
  category?: Maybe<category>;
  category_not?: Maybe<category>;
  category_in?: Maybe<category[] | category>;
  category_not_in?: Maybe<category[] | category>;
  AND?: Maybe<ItemWhereInput[] | ItemWhereInput>;
  OR?: Maybe<ItemWhereInput[] | ItemWhereInput>;
  NOT?: Maybe<ItemWhereInput[] | ItemWhereInput>;
}

export interface ItemScalarWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  text?: Maybe<String>;
  text_not?: Maybe<String>;
  text_in?: Maybe<String[] | String>;
  text_not_in?: Maybe<String[] | String>;
  text_lt?: Maybe<String>;
  text_lte?: Maybe<String>;
  text_gt?: Maybe<String>;
  text_gte?: Maybe<String>;
  text_contains?: Maybe<String>;
  text_not_contains?: Maybe<String>;
  text_starts_with?: Maybe<String>;
  text_not_starts_with?: Maybe<String>;
  text_ends_with?: Maybe<String>;
  text_not_ends_with?: Maybe<String>;
  category?: Maybe<category>;
  category_not?: Maybe<category>;
  category_in?: Maybe<category[] | category>;
  category_not_in?: Maybe<category[] | category>;
  AND?: Maybe<ItemScalarWhereInput[] | ItemScalarWhereInput>;
  OR?: Maybe<ItemScalarWhereInput[] | ItemScalarWhereInput>;
  NOT?: Maybe<ItemScalarWhereInput[] | ItemScalarWhereInput>;
}

export interface BoardWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  team?: Maybe<TeamWhereInput>;
  items_every?: Maybe<ItemWhereInput>;
  items_some?: Maybe<ItemWhereInput>;
  items_none?: Maybe<ItemWhereInput>;
  AND?: Maybe<BoardWhereInput[] | BoardWhereInput>;
  OR?: Maybe<BoardWhereInput[] | BoardWhereInput>;
  NOT?: Maybe<BoardWhereInput[] | BoardWhereInput>;
}

export interface ItemCreateManyWithoutBoardInput {
  create?: Maybe<ItemCreateWithoutBoardInput[] | ItemCreateWithoutBoardInput>;
  connect?: Maybe<ItemWhereUniqueInput[] | ItemWhereUniqueInput>;
}

export interface ItemUpdateInput {
  board?: Maybe<BoardUpdateOneRequiredWithoutItemsInput>;
  text?: Maybe<String>;
  category?: Maybe<category>;
}

export interface ItemCreateWithoutBoardInput {
  id?: Maybe<ID_Input>;
  text: String;
  category: category;
}

export interface ItemUpdateManyWithWhereNestedInput {
  where: ItemScalarWhereInput;
  data: ItemUpdateManyDataInput;
}

export interface BoardUpdateInput {
  team?: Maybe<TeamUpdateOneRequiredWithoutBoardsInput>;
  items?: Maybe<ItemUpdateManyWithoutBoardInput>;
}

export interface ItemSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<ItemWhereInput>;
  AND?: Maybe<ItemSubscriptionWhereInput[] | ItemSubscriptionWhereInput>;
  OR?: Maybe<ItemSubscriptionWhereInput[] | ItemSubscriptionWhereInput>;
  NOT?: Maybe<ItemSubscriptionWhereInput[] | ItemSubscriptionWhereInput>;
}

export interface TeamUpdateOneRequiredWithoutBoardsInput {
  create?: Maybe<TeamCreateWithoutBoardsInput>;
  update?: Maybe<TeamUpdateWithoutBoardsDataInput>;
  upsert?: Maybe<TeamUpsertWithoutBoardsInput>;
  connect?: Maybe<TeamWhereUniqueInput>;
}

export interface TeamUpdateManyMutationInput {
  name?: Maybe<String>;
}

export interface TeamUpdateWithoutBoardsDataInput {
  name?: Maybe<String>;
}

export type ItemWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface TeamUpsertWithoutBoardsInput {
  update: TeamUpdateWithoutBoardsDataInput;
  create: TeamCreateWithoutBoardsInput;
}

export interface BoardUpdateWithoutTeamDataInput {
  items?: Maybe<ItemUpdateManyWithoutBoardInput>;
}

export interface TeamCreateInput {
  id?: Maybe<ID_Input>;
  name: String;
  boards?: Maybe<BoardCreateManyWithoutTeamInput>;
}

export type TeamWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
  name?: Maybe<String>;
}>;

export interface ItemUpdateWithWhereUniqueWithoutBoardInput {
  where: ItemWhereUniqueInput;
  data: ItemUpdateWithoutBoardDataInput;
}

export interface TeamUpdateInput {
  name?: Maybe<String>;
  boards?: Maybe<BoardUpdateManyWithoutTeamInput>;
}

export interface ItemUpdateWithoutBoardDataInput {
  text?: Maybe<String>;
  category?: Maybe<category>;
}

export interface BoardCreateManyWithoutTeamInput {
  create?: Maybe<BoardCreateWithoutTeamInput[] | BoardCreateWithoutTeamInput>;
  connect?: Maybe<BoardWhereUniqueInput[] | BoardWhereUniqueInput>;
}

export interface TeamWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  name?: Maybe<String>;
  name_not?: Maybe<String>;
  name_in?: Maybe<String[] | String>;
  name_not_in?: Maybe<String[] | String>;
  name_lt?: Maybe<String>;
  name_lte?: Maybe<String>;
  name_gt?: Maybe<String>;
  name_gte?: Maybe<String>;
  name_contains?: Maybe<String>;
  name_not_contains?: Maybe<String>;
  name_starts_with?: Maybe<String>;
  name_not_starts_with?: Maybe<String>;
  name_ends_with?: Maybe<String>;
  name_not_ends_with?: Maybe<String>;
  boards_every?: Maybe<BoardWhereInput>;
  boards_some?: Maybe<BoardWhereInput>;
  boards_none?: Maybe<BoardWhereInput>;
  AND?: Maybe<TeamWhereInput[] | TeamWhereInput>;
  OR?: Maybe<TeamWhereInput[] | TeamWhereInput>;
  NOT?: Maybe<TeamWhereInput[] | TeamWhereInput>;
}

export interface BoardCreateInput {
  id?: Maybe<ID_Input>;
  team: TeamCreateOneWithoutBoardsInput;
  items?: Maybe<ItemCreateManyWithoutBoardInput>;
}

export interface ItemUpdateManyMutationInput {
  text?: Maybe<String>;
  category?: Maybe<category>;
}

export interface TeamCreateWithoutBoardsInput {
  id?: Maybe<ID_Input>;
  name: String;
}

export interface BoardUpsertWithoutItemsInput {
  update: BoardUpdateWithoutItemsDataInput;
  create: BoardCreateWithoutItemsInput;
}

export interface BoardSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<BoardWhereInput>;
  AND?: Maybe<BoardSubscriptionWhereInput[] | BoardSubscriptionWhereInput>;
  OR?: Maybe<BoardSubscriptionWhereInput[] | BoardSubscriptionWhereInput>;
  NOT?: Maybe<BoardSubscriptionWhereInput[] | BoardSubscriptionWhereInput>;
}

export interface ItemUpdateManyDataInput {
  text?: Maybe<String>;
  category?: Maybe<category>;
}

export interface BoardUpsertWithWhereUniqueWithoutTeamInput {
  where: BoardWhereUniqueInput;
  update: BoardUpdateWithoutTeamDataInput;
  create: BoardCreateWithoutTeamInput;
}

export interface BoardUpdateWithoutItemsDataInput {
  team?: Maybe<TeamUpdateOneRequiredWithoutBoardsInput>;
}

export interface BoardUpdateManyWithoutTeamInput {
  create?: Maybe<BoardCreateWithoutTeamInput[] | BoardCreateWithoutTeamInput>;
  delete?: Maybe<BoardWhereUniqueInput[] | BoardWhereUniqueInput>;
  connect?: Maybe<BoardWhereUniqueInput[] | BoardWhereUniqueInput>;
  set?: Maybe<BoardWhereUniqueInput[] | BoardWhereUniqueInput>;
  disconnect?: Maybe<BoardWhereUniqueInput[] | BoardWhereUniqueInput>;
  update?: Maybe<
    | BoardUpdateWithWhereUniqueWithoutTeamInput[]
    | BoardUpdateWithWhereUniqueWithoutTeamInput
  >;
  upsert?: Maybe<
    | BoardUpsertWithWhereUniqueWithoutTeamInput[]
    | BoardUpsertWithWhereUniqueWithoutTeamInput
  >;
  deleteMany?: Maybe<BoardScalarWhereInput[] | BoardScalarWhereInput>;
}

export interface BoardCreateWithoutItemsInput {
  id?: Maybe<ID_Input>;
  team: TeamCreateOneWithoutBoardsInput;
}

export interface BoardCreateOneWithoutItemsInput {
  create?: Maybe<BoardCreateWithoutItemsInput>;
  connect?: Maybe<BoardWhereUniqueInput>;
}

export interface ItemCreateInput {
  id?: Maybe<ID_Input>;
  board: BoardCreateOneWithoutItemsInput;
  text: String;
  category: category;
}

export interface BoardUpdateOneRequiredWithoutItemsInput {
  create?: Maybe<BoardCreateWithoutItemsInput>;
  update?: Maybe<BoardUpdateWithoutItemsDataInput>;
  upsert?: Maybe<BoardUpsertWithoutItemsInput>;
  connect?: Maybe<BoardWhereUniqueInput>;
}

export interface TeamCreateOneWithoutBoardsInput {
  create?: Maybe<TeamCreateWithoutBoardsInput>;
  connect?: Maybe<TeamWhereUniqueInput>;
}

export interface BoardCreateWithoutTeamInput {
  id?: Maybe<ID_Input>;
  items?: Maybe<ItemCreateManyWithoutBoardInput>;
}

export interface BoardUpdateWithWhereUniqueWithoutTeamInput {
  where: BoardWhereUniqueInput;
  data: BoardUpdateWithoutTeamDataInput;
}

export interface BoardScalarWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  AND?: Maybe<BoardScalarWhereInput[] | BoardScalarWhereInput>;
  OR?: Maybe<BoardScalarWhereInput[] | BoardScalarWhereInput>;
  NOT?: Maybe<BoardScalarWhereInput[] | BoardScalarWhereInput>;
}

export interface TeamSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<TeamWhereInput>;
  AND?: Maybe<TeamSubscriptionWhereInput[] | TeamSubscriptionWhereInput>;
  OR?: Maybe<TeamSubscriptionWhereInput[] | TeamSubscriptionWhereInput>;
  NOT?: Maybe<TeamSubscriptionWhereInput[] | TeamSubscriptionWhereInput>;
}

export interface NodeNode {
  id: ID_Output;
}

export interface TeamPreviousValues {
  id: ID_Output;
  name: String;
}

export interface TeamPreviousValuesPromise
  extends Promise<TeamPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
}

export interface TeamPreviousValuesSubscription
  extends Promise<AsyncIterator<TeamPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
}

export interface ItemEdge {
  node: Item;
  cursor: String;
}

export interface ItemEdgePromise extends Promise<ItemEdge>, Fragmentable {
  node: <T = ItemPromise>() => T;
  cursor: () => Promise<String>;
}

export interface ItemEdgeSubscription
  extends Promise<AsyncIterator<ItemEdge>>,
    Fragmentable {
  node: <T = ItemSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface ItemSubscriptionPayload {
  mutation: MutationType;
  node: Item;
  updatedFields: String[];
  previousValues: ItemPreviousValues;
}

export interface ItemSubscriptionPayloadPromise
  extends Promise<ItemSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = ItemPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = ItemPreviousValuesPromise>() => T;
}

export interface ItemSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<ItemSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = ItemSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = ItemPreviousValuesSubscription>() => T;
}

export interface ItemConnection {
  pageInfo: PageInfo;
  edges: ItemEdge[];
}

export interface ItemConnectionPromise
  extends Promise<ItemConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<ItemEdge>>() => T;
  aggregate: <T = AggregateItemPromise>() => T;
}

export interface ItemConnectionSubscription
  extends Promise<AsyncIterator<ItemConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<ItemEdgeSubscription>>>() => T;
  aggregate: <T = AggregateItemSubscription>() => T;
}

export interface AggregateBoard {
  count: Int;
}

export interface AggregateBoardPromise
  extends Promise<AggregateBoard>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateBoardSubscription
  extends Promise<AsyncIterator<AggregateBoard>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface TeamSubscriptionPayload {
  mutation: MutationType;
  node: Team;
  updatedFields: String[];
  previousValues: TeamPreviousValues;
}

export interface TeamSubscriptionPayloadPromise
  extends Promise<TeamSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = TeamPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = TeamPreviousValuesPromise>() => T;
}

export interface TeamSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<TeamSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = TeamSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = TeamPreviousValuesSubscription>() => T;
}

export interface BoardEdge {
  node: Board;
  cursor: String;
}

export interface BoardEdgePromise extends Promise<BoardEdge>, Fragmentable {
  node: <T = BoardPromise>() => T;
  cursor: () => Promise<String>;
}

export interface BoardEdgeSubscription
  extends Promise<AsyncIterator<BoardEdge>>,
    Fragmentable {
  node: <T = BoardSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateTeam {
  count: Int;
}

export interface AggregateTeamPromise
  extends Promise<AggregateTeam>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateTeamSubscription
  extends Promise<AsyncIterator<AggregateTeam>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface ItemPreviousValues {
  id: ID_Output;
  text: String;
  category: category;
}

export interface ItemPreviousValuesPromise
  extends Promise<ItemPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  text: () => Promise<String>;
  category: () => Promise<category>;
}

export interface ItemPreviousValuesSubscription
  extends Promise<AsyncIterator<ItemPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  text: () => Promise<AsyncIterator<String>>;
  category: () => Promise<AsyncIterator<category>>;
}

export interface TeamConnection {
  pageInfo: PageInfo;
  edges: TeamEdge[];
}

export interface TeamConnectionPromise
  extends Promise<TeamConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<TeamEdge>>() => T;
  aggregate: <T = AggregateTeamPromise>() => T;
}

export interface TeamConnectionSubscription
  extends Promise<AsyncIterator<TeamConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<TeamEdgeSubscription>>>() => T;
  aggregate: <T = AggregateTeamSubscription>() => T;
}

export interface AggregateItem {
  count: Int;
}

export interface AggregateItemPromise
  extends Promise<AggregateItem>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateItemSubscription
  extends Promise<AsyncIterator<AggregateItem>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface BoardPreviousValues {
  id: ID_Output;
}

export interface BoardPreviousValuesPromise
  extends Promise<BoardPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
}

export interface BoardPreviousValuesSubscription
  extends Promise<AsyncIterator<BoardPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
}

export interface BoardSubscriptionPayload {
  mutation: MutationType;
  node: Board;
  updatedFields: String[];
  previousValues: BoardPreviousValues;
}

export interface BoardSubscriptionPayloadPromise
  extends Promise<BoardSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = BoardPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = BoardPreviousValuesPromise>() => T;
}

export interface BoardSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<BoardSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = BoardSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = BoardPreviousValuesSubscription>() => T;
}

export interface Board {
  id: ID_Output;
}

export interface BoardPromise extends Promise<Board>, Fragmentable {
  id: () => Promise<ID_Output>;
  team: <T = TeamPromise>() => T;
  items: <T = FragmentableArray<Item>>(args?: {
    where?: ItemWhereInput;
    orderBy?: ItemOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface BoardSubscription
  extends Promise<AsyncIterator<Board>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  team: <T = TeamSubscription>() => T;
  items: <T = Promise<AsyncIterator<ItemSubscription>>>(args?: {
    where?: ItemWhereInput;
    orderBy?: ItemOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface BoardNullablePromise
  extends Promise<Board | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  team: <T = TeamPromise>() => T;
  items: <T = FragmentableArray<Item>>(args?: {
    where?: ItemWhereInput;
    orderBy?: ItemOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface Item {
  id: ID_Output;
  text: String;
  category: category;
}

export interface ItemPromise extends Promise<Item>, Fragmentable {
  id: () => Promise<ID_Output>;
  board: <T = BoardPromise>() => T;
  text: () => Promise<String>;
  category: () => Promise<category>;
}

export interface ItemSubscription
  extends Promise<AsyncIterator<Item>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  board: <T = BoardSubscription>() => T;
  text: () => Promise<AsyncIterator<String>>;
  category: () => Promise<AsyncIterator<category>>;
}

export interface ItemNullablePromise
  extends Promise<Item | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  board: <T = BoardPromise>() => T;
  text: () => Promise<String>;
  category: () => Promise<category>;
}

export interface Team {
  id: ID_Output;
  name: String;
}

export interface TeamPromise extends Promise<Team>, Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  boards: <T = FragmentableArray<Board>>(args?: {
    where?: BoardWhereInput;
    orderBy?: BoardOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface TeamSubscription
  extends Promise<AsyncIterator<Team>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  boards: <T = Promise<AsyncIterator<BoardSubscription>>>(args?: {
    where?: BoardWhereInput;
    orderBy?: BoardOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface TeamNullablePromise
  extends Promise<Team | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  boards: <T = FragmentableArray<Board>>(args?: {
    where?: BoardWhereInput;
    orderBy?: BoardOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface TeamEdge {
  node: Team;
  cursor: String;
}

export interface TeamEdgePromise extends Promise<TeamEdge>, Fragmentable {
  node: <T = TeamPromise>() => T;
  cursor: () => Promise<String>;
}

export interface TeamEdgeSubscription
  extends Promise<AsyncIterator<TeamEdge>>,
    Fragmentable {
  node: <T = TeamSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface BoardConnection {
  pageInfo: PageInfo;
  edges: BoardEdge[];
}

export interface BoardConnectionPromise
  extends Promise<BoardConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<BoardEdge>>() => T;
  aggregate: <T = AggregateBoardPromise>() => T;
}

export interface BoardConnectionSubscription
  extends Promise<AsyncIterator<BoardConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<BoardEdgeSubscription>>>() => T;
  aggregate: <T = AggregateBoardSubscription>() => T;
}

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

export type Long = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.
*/
export type Int = number;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "Team",
    embedded: false
  },
  {
    name: "Board",
    embedded: false
  },
  {
    name: "Item",
    embedded: false
  },
  {
    name: "category",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;