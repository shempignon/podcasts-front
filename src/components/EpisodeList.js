import React from 'react';
import List from "@material-ui/core/List/List";
import Query from "./Query";
import { GET_BROADCAST } from "../queries";
import { withRouter } from "react-router-dom";
import { compose } from "react-apollo";
import Avatar from "@material-ui/core/Avatar/Avatar";
import ListItem from "@material-ui/core/ListItem/ListItem";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";

const EpisodeList = ({ match: { params: { uuid } } }) => {
  const id = `/broadcasts/${uuid}`;

  return (
    <Query query={GET_BROADCAST} variables={{ id }}>
      {({ broadcast: { name, episodes: { edges }, cover: { download, url } } }) => {
        const src = null != download && null != download.path ? download.path : url;

        return (
          <List>
            <ListItem>
              <Avatar src={src}/>
              <ListItemText primary={name} primaryTypographyProps={{ variant: 'h4', color: 'primary' }}/>
            </ListItem>
            {edges.map(({ node: { id, name, broadcastedOn, url, download } }) => {
              const audio = null != download && null != download.path ? download.path : url;
              const audioEl = new Audio(audio);

              return (
                <ListItem key={id} button={true} onClick={() => audioEl.play()}>
                  <ListItemText primary={name} secondary={new Date(broadcastedOn).toLocaleDateString('fr-FR')}/>
                </ListItem>)
            })}
          </List>
        )
      }}
    </Query>
  )
};

export default compose(
  withRouter,
)(EpisodeList);