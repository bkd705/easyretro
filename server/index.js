const { GraphQLServer } = require('graphql-yoga')
const { prisma } = require('./generated/prisma-client')

// Type Definition
const typeDefs = `
type Query {
  team(name: String!): Team!
  teams: [Team!]!
  boards: [Board!]!
  items: [Item!]!
}

type Team {
  id: ID!
  name: String!
  boards: [Board!]
}

type Board {
  id: ID!
  team: Team!
  items: [Item!]!
}

type Item {
  id: ID!
  board: Board!
  text: String!
  category: category!
}

enum category {
  START,
  STOP,
  CONTINUE,
  ACTION
}

type Mutation {
  createTeam(name: String!): Team!
  createBoard(teamId: String!): Board!
  createItem(boardId: String!, text: String!, category: category!): Item!
}
`

// Resolvers
const resolvers = {
  Query: {
    team: (root, args, context, info) => {
      return context.prisma.team({ name: args.name })
    },
    teams: (root, args, context, info) => {
      return context.prisma.teams()
    },
    boards: (root, args, context, info) => {
      return context.prisma.boards()
    },
  },
  Team: {
    boards(root, args, context) {
      return context.prisma.team({ id: root.id }).boards()
    },
  },
  Board: {
    team(root, args, context) {
      return context.prisma.board({ id: root.id }).team()
    },
    items(root, args, context) {
      return context.prisma.board({ id: root.id }).items()
    },
  },
  Item: {
    board(root, args, context) {
      return context.prisma.item({ id: root.id }).board()
    },
  },
  Mutation: {
    createTeam(root, args, context) {
      return context.prisma.createTeam({
        name: args.name,
      })
    },
    createBoard(root, args, context) {
      return context.prisma.createBoard({
        team: {
          connect: {
            id: args.teamId,
          },
        },
      })
    },
    createItem(root, args, context) {
      return context.prisma.createItem({
        text: args.text,
        category: args.category,
        board: {
          connect: {
            id: args.boardId,
          },
        },
      })
    },
  },
}

// Server
const server = new GraphQLServer({
  typeDefs,
  resolvers,
  context: { prisma },
})

const opts = {
  port: 4000,
  cors: {
    credentials: true,
    origin: ['http://localhost:3000'],
  },
}

server.start(opts, () =>
  console.log(`Server is running on http://localhost:4000`)
)
