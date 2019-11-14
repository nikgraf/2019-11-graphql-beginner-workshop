const { ApolloServer, gql } = require("apollo-server");

const dbRecipes = [
  {
    id: "123",
    title: "Schnitzel",
    vegetarian: false,
  },
  {
    id: "234",
    title: "Tomato Salad",
    vegetarian: true,
  }
];

const typeDefs = gql`
  type Recipe {
    id: ID!
    title: String!
    vegetarian: Boolean!
  }

  type Query {
    recipes: [Recipe!]!
    recipe(id: ID!): Recipe!
  }
`;

const resolvers = {
  Query: {
    recipes: () => {
      return dbRecipes;
    },
    recipe: (_, args) => {
      return dbRecipes.find(item => item.id === args.id);
    }
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
