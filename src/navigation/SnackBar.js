import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';


class AppNotFound extends React.Component {

    render() {
        return (
            <Snackbar
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                message={'No meaningful message'}
            >
            </Snackbar>
        );
    }
}

export default AppNotFound;