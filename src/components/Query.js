import React from 'react';
import { Query } from 'react-apollo';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from "@material-ui/core/Typography/Typography";

export default ({ children, ...props }) => (
    <Query {...props}>
        {({loading, error, data}) => {
            if (loading) return <CircularProgress color="secondary" />;
            if (error) return <Typography variant="body1" gutterBottom>`Error! ${error.message}`</Typography>;
            return children(data);
        }}
    </Query>
);