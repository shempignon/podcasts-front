import React from 'react';
import List from "@material-ui/core/List/List";
import Typography from "@material-ui/core/Typography/Typography";
import Query from "./Query";
import { GET_BROADCASTS } from "../queries";
import Broadcast from "./Broadcast";

export default () => (
  <Query query={GET_BROADCASTS} fetchPolicy="network-only">
    {({ broadcasts: { edges } }) => (
      <List>
        <Typography color="secondary" variant="h4" gutterBottom>Broadcasts</Typography>
        {edges.map(({ node }) => (<Broadcast key={node.id} node={node}/>))}
      </List>
    )}
  </Query>
);