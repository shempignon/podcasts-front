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

export const NEW_FEED = gql`
mutation NewFeed($input: createFeedInput) {
  createFeed(input: $input) {
    url
  }
}
`;