import ApolloClient from "apollo-boost";

const uri = process.env.REACT_APP_GRAPHQL_URI;

const defaults = {
  location: undefined,
  name: undefined,
};

const resolvers = [];

const client = new ApolloClient({
  uri,
  clientState: {
    defaults,
    resolvers,
  }
});

export default client;