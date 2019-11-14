const { ApolloServer, gql } = require("apollo-server");
const data = require("./data");

// Query:
// {
//   places {
//     id
//     name
//     description
//     email
//     phone
//     location {
//       lat
//       long
//     }
//     images {
//       url
//       banner
//     }
//   }
// }

const typeDefs = gql`
  type Location {
    lat: Float!
    long: Float!
  }

  type Image {
    url: String!
    banner: Boolean
  }

  type Place {
    id: ID!
    name: String!
    description: String
    email: String
    phone: String
    location: Location
    images: [Image!]
  }

  type Query {
    places: [Place!]
    place(id: ID!): Place!
  }
`;

const resolvers = {
  Query: {
    places: () => {
      return data.places;
    },
    place: (_, args) => {
      return data.places.find(item => item.id === args.id);
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
