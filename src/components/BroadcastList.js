import React from 'react';
import List from "@material-ui/core/List/List";
import Query from "./Query";
import { GET_BROADCASTS } from "../queries";
import Broadcast from "./Broadcast";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import ListItem from "@material-ui/core/ListItem/ListItem";

export default () => (
  <Query query={GET_BROADCASTS}>
    {({ broadcasts: { edges } }) => (
      <List>
        <ListItem>
          <ListItemText primary="Broadcasts" primaryTypographyProps={{ variant: 'h4', color: 'primary' }}/>
        </ListItem>
        {edges.map(({ node }) => (<Broadcast key={node.id} node={node}/>))}
      </List>
    )}
  </Query>
);