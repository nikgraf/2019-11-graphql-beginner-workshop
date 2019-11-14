const { ApolloServer, gql } = require("apollo-server");
const data = require("./data");

function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
    var r = (Math.random() * 16) | 0,
      v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

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

  type Mutation {
    createPlace(name: String!, phone: String, email: String): Place
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
  },
  Mutation: {
    createPlace: (_, args) => {
      const place = {
        id: uuidv4(),
        name: args.name,
        phone: args.phone,
        email: args.email
      };
      data.places.push(place);
      return place;
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
