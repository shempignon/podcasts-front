import React from 'react';
import List from "@material-ui/core/List/List";
import Query from "./Query";
import Broadcast from "./Broadcast";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import ListItem from "@material-ui/core/ListItem/ListItem";
import gql from "graphql-tag";

export const BroadcastsQuery = gql`
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

export default () => (
  <Query query={ BroadcastsQuery }>
    { ({ data: { broadcasts: { edges } } }) => (
      <List>
        <ListItem>
          <ListItemText primary="Broadcasts" primaryTypographyProps={ { variant: 'h4', color: 'primary' } }/>
        </ListItem>
        { edges.map(({ node }) => (<Broadcast key={ node.id } node={ node }/>)) }
      </List>
    ) }
  </Query>
);