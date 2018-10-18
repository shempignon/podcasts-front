import gql from "graphql-tag";

export const GET_BROADCASTS = gql`
{
  broadcasts {
    edges {
      node {
        id
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

export const GET_BROADCAST = gql`
query getBroadcast($id: ID) 
{
  broadcast (id: $id) {
    name
    cover {
      url
      download {
        path
      }
    }
    episodes {
      edges {
        node {
          id
          name
          broadcastedOn
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

export const NEW_FEED = gql`
mutation NewFeed($input: createFeedInput) {
  createFeed(input: $input) {
    url
  }
}
`;