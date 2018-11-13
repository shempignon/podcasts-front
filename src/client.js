import ApolloClient from "apollo-boost";

const backendHost = process.env.REACT_APP_BACKEND_HOST;
const uri = `${backendHost}/graphql`

const defaults = {
  location: null,
  name: null,
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