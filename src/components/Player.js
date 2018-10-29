import React from "react";
import ReactAudioPlayer from "react-audio-player";
import gql from "graphql-tag";
import Paper from "@material-ui/core/Paper/Paper";
import withStyles from "@material-ui/core/styles/withStyles";
import styles from "../styles";
import Query from "./Query";
import Typography from "@material-ui/core/Typography/Typography";

const getSongQuery = gql`
{
  location @client,
  name @client
}
`;

const Player = ({ classes: { playerContainer, player }, src = undefined }) => {
  return (
    <Query query={ getSongQuery }>
      { ({ data: { location, name } }) => (
        <Paper className={ playerContainer }>
          <ReactAudioPlayer
            src={ location }
            autoPlay
            controls
            style={ { width: '100%' } }
          />
          <Typography variant="body1" noWrap>{ name }</Typography>
        </Paper>
      ) }
    </Query>
  )
};

export default withStyles(styles, { withTheme: true })(Player);