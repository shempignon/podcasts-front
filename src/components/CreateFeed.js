import React from "react";
import Mutation from "react-apollo/Mutation";
import Paper from "@material-ui/core/Paper/Paper";
import withStyles from "@material-ui/core/styles/withStyles";
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";
import CreateFeedForm from "./CreateFeedForm";
import gql from "graphql-tag";
import { BroadcastsQuery } from "./BroadcastList";

const styles = theme => ({
  layout: {
    width: 'auto',
    display: 'block', // Fix IE11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  form: {
    width: '100%', // Fix IE11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});

export const NEW_FEED = gql`
mutation NewFeed($input: createFeedInput) {
  createFeed(input: $input) {
    url
  }
}
`;

const CreateFeed = ({classes: {paper, form, submit, layout}}) => (
  <Mutation mutation={ NEW_FEED } refetchQueries={ [{query: BroadcastsQuery}] }>
    { (createFeed, {loading, error}) => (
      <div className={ layout }>
        <Paper className={ paper }>
          { loading &&
          <CircularProgress color="secondary"/>
          }
          { !loading &&
          <CreateFeedForm
            error={ error }
            createFeed={ url => createFeed({variables: {input: {url, clientMutationId: '1'}}}) }
          />
          }
        </Paper>
      </div>
    ) }
  </Mutation>
);

export default withStyles(styles, {withTheme: true})(CreateFeed);