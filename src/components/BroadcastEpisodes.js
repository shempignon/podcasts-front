import React from 'react';
import { withRouter } from "react-router-dom";
import { compose } from "react-apollo";
import gql from "graphql-tag";
import Query from "./Query";
import EpisodeList from "./EpisodeList";

export const BroadcastEpisodesQuery = gql`
query getBroadcastEpisodes($id: ID, $cursor: String) {
  broadcast(id: $id) {
  	id
    name
    cover {
      url
      download {
        path
      }
    }
    episodes(first: 30, after: $cursor) {
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        cursor
        node {
          id
          name
          url
          broadcastedOn
          download {
            path
          }
        }
      }
    }
  }
}
`;

const BroadcastEpisodes = ({ match: { params: { uuid } } }) => {
  const id = `/broadcasts/${uuid}`;

  return (
    <Query query={BroadcastEpisodesQuery} variables={{ id }}>
      {({ data: { broadcast: { name, episodes: { edges, pageInfo }, cover: { download, url } } }, fetchMore }) => {
        const src = null != download && null != download.path ? download.path : url;
        const cursor = edges[edges.length - 1].cursor;

        return (
          <EpisodeList
            src={src}
            name={name}
            episodes={edges}
            fetchMore={() => fetchMore({
              variables: { cursor },
              updateQuery: (previousResult, { fetchMoreResult }) => {
                const newEdges = fetchMoreResult.broadcast.episodes.edges;
                const pageInfo = fetchMoreResult.broadcast.episodes.pageInfo;

                return newEdges.length
                  ? {
                    ...fetchMoreResult,
                    broadcast: {
                      ...fetchMoreResult.broadcast,
                      episodes: {
                        __typename: previousResult.broadcast.episodes.__typename,
                        edges: [...previousResult.broadcast.episodes.edges, ...newEdges],
                        pageInfo
                      },
                    },
                  }
                  : previousResult;
              }
            })}
          />
        );
      }}
    </Query>
  )
};

export default compose(
  withRouter,
)(BroadcastEpisodes);