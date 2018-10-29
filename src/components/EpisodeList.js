import React, { Component } from "react";
import { ApolloConsumer } from "react-apollo";
import List from "@material-ui/core/List/List";
import ListItem from "@material-ui/core/ListItem/ListItem";
import Avatar from "@material-ui/core/Avatar/Avatar";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";

const debounce = (fn, time) => {
  let timeout;

  return function () {
    const functionCall = () => fn.apply(this, arguments);

    clearTimeout(timeout);
    timeout = setTimeout(functionCall, time);
  }
};

class EpisodeList extends Component {
  id = "episode-list";

  isBottom = (el) => el.getBoundingClientRect().bottom <= window.innerHeight;

  componentDidMount() {
    document.addEventListener('scroll', this.trackScrolling);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.trackScrolling);
  }

  trackScrolling = debounce(() => {
    if (this.isBottom(document.getElementById(this.id))) {

      return this.props.fetchMore();
    }
  }, 500);

  render() {
    const { name, src, episodes } = this.props;

    return (
      <ApolloConsumer>
        { client =>
          <div id={ this.id }>
            <List>
              <ListItem>
                <Avatar src={ src }/>
                <ListItemText primary={ name } primaryTypographyProps={ { variant: 'h4', color: 'primary' } }/>
              </ListItem>
              { episodes.map(({ node: { id, name, broadcastedOn, url, download } }) => {
                const location = null != download && null != download.path ? download.path : url;

                return (
                  <ListItem
                    key={ id }
                    button={ true }
                    onClick={ () => client.writeData({ data: { location: location, name: name } }) }
                  >
                    <ListItemText primary={ name } secondary={ new Date(broadcastedOn).toLocaleDateString('fr-FR') }/>
                  </ListItem>)
              }) }
            </List>
          </div>
        }
      </ApolloConsumer>
    );
  }
}

export default EpisodeList;