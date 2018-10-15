import React from "react";
import ListItem from "@material-ui/core/ListItem/ListItem";
import Avatar from "@material-ui/core/Avatar/Avatar";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";

export default ({ node: { id, name, cover } }) => {
  const src = null !== cover.download && null !== cover.download.path ? cover.download.path : cover.url;

  return (
    <ListItem button>
      <Avatar alt={name} src={src}/>
      <ListItemText primary={name}/>
    </ListItem>
  )
};