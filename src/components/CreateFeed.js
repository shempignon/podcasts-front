import React from "react";
import Mutation from "react-apollo/Mutation";
import Paper from "@material-ui/core/Paper/Paper";
import withStyles from "@material-ui/core/styles/withStyles";
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";
import CreateFeedForm from "./CreateFeedForm";
import gql from "graphql-tag";
import { BroadcastsQuery } from "./BroadcastList";
import styles from "../styles";

export const NEW_FEED = gql`
mutation NewFeed($input: createFeedInput) {
  createFeed(input: $input) {
    url
  }
}
`;

const CreateFeed = ({ classes: { paper, form, submit, layout } }) => (
  <Mutation mutation={ NEW_FEED } refetchQueries={ [{ query: BroadcastsQuery }] }>
    { (createFeed, { loading, error }) => (
      <div className={ layout }>
        <Paper className={ paper }>
          { loading &&
            <CircularProgress color="secondary"/>
          }
          { !loading &&
            <CreateFeedForm
              error={ error }
              createFeed={ url => createFeed({ variables: { input: { url, clientMutationId: '1' } } }) }
            />
          }
        </Paper>
      </div>
    ) }
  </Mutation>
);

export default withStyles(styles, { withTheme: true })(CreateFeed);