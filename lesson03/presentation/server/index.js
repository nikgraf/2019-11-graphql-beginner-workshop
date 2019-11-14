// NOTE has to be before the requires to make sure the delay is available there
const delayArgument = parseInt(process.argv[2], 10);
global.delay = isNaN(delayArgument) ? 0 : delayArgument;

const { ApolloServer, gql } = require("apollo-server");
const resolvers = require("./resolvers");

const typeDefs = gql`
  type Recipe {
    id: ID!
    title: String!
    vegetarian: Boolean!
  }

  type Query {
    recipes(vegetarian: Boolean): [Recipe!]
  }
`;

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
