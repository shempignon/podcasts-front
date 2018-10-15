import React from 'react';
import {Query} from 'react-apollo';
import gql from 'graphql-tag';

const GET_BROADCASTS = gql`
{
  broadcasts {
    edges {
      node {
        name
        cover {
          url
          download {
            path
          }
        }
      }
    }
  }
}
`;

const App = () => (
  <Query query={GET_BROADCASTS}>
    {({loading, error, data}) => {
      if (loading) return 'Loading...';
      if (error) return `Error! ${error.message}`;

      return (
        <ul>
          {data.broadcasts.edges.map(broadcast => (
            <li key={broadcast.node.name}>{broadcast.node.name}</li>
          ))}
        </ul>
      );
    }}
  </Query>
);

export default App;
