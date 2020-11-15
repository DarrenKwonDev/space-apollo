require("dotenv").config();

const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");

// 서버 구성. yoga나 apollo server를 wrap한 것이라서 그런지 비슷함
const server = new ApolloServer({ typeDefs });
