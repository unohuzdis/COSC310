import React from 'react';
import Pokemon from './Pokemon';
import Stats from './Stats'

let style = {width: '40%'}

export default class Configure extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
                <Pokemon />
                <Stats />
            </div>
        )
    }
}