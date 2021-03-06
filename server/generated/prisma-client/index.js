"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
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
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://us1.prisma.sh/brennen-denomme-8a0eec/easyretro/dev`
});
exports.prisma = new exports.Prisma();
