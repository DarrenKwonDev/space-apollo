require("dotenv").config();

const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");

// 서버 구성. yoga나 apollo server를 wrap한 것이라서 그런지 비슷함

const PORT = 4000; // 따로 설정하지 않으면 4000번이 기본 포트
const server = new ApolloServer({ typeDefs, port: PORT });

server.listen().then(() => {
  console.log(`server on : http://localhost:${PORT}`);
});

/**
 *
 * Introspection is a helpful GraphQL feature that enables you to obtain a server's schema for development purposes.
 * It should be disabled for servers running in production.
 *  Apollo Server disables introspection automatically if the NODE_ENV environment variable is set to production.
 */
