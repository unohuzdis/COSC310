import React from 'react';
import Pokemon from './Pokemon';
import Stats from './Stats'


let style = {width: '40%'}

export default class Configure extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            hp: 0,
            atk: 0,
            def: 0,
            spatk: 0,
            spdef: 0,
            spd: 0,
        }
    }
    onChange(name, value){
        let newState = {};
        newState[name] = value;
        this.setState(newState);

    }
    render() {
        return(
            <div>
                <Pokemon />
                <Stats stats={this.state} onChange={this.onChange.bind(this)}/>

            </div>
        )
    }
}