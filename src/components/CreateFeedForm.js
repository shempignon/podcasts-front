import React, { Component } from "react";
import Typography from "@material-ui/core/Typography/Typography";
import FormControl from "@material-ui/core/FormControl/FormControl";
import InputLabel from "@material-ui/core/InputLabel/InputLabel";
import Input from "@material-ui/core/Input/Input";
import Button from "@material-ui/core/Button/Button";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = theme => ({
  form: {
    width: '100%', // Fix IE11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});

class CreateFeedForm extends Component {
  constructor(props) {
    super(props);

    this.state = { url: '' };
  }

  render() {
    const { error, form, submit, createFeed } = this.props;

    return (
      <form className={form} onSubmit={() => createFeed(this.state.url)}>
        {error &&
          <Typography variant="body1" color="error" gutterBottom>`Error! ${error.message}`</Typography>
        }
        <FormControl margin="normal" required fullWidth>
          <InputLabel htmlFor="feed">Broadcast RSS</InputLabel>
          <Input
            id="url"
            name="url"
            autoComplete="url"
            onChange={e => this.setState({ url: e.target.value })}
            autoFocus/>
        </FormControl>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={submit}
        >
          Add new broadcast
        </Button>
      </form>
    )
  }
}

export default withStyles(styles, { withTheme: true })(CreateFeedForm);
