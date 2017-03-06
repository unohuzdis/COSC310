import React from 'react';
import Paper from 'material-ui/Paper';

export default class Pokemon extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Paper >
                <img src="http://www.smogon.com/dex/media/sprites/xy/pikachu.gif" />
            </Paper>
        )
    }
}