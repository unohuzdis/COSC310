import React from 'react';
import Paper from 'material-ui/Paper';
import Slider from 'material-ui/Slider';
import Pokemon from './Pokemon';
import Stat from './Stat'

let style = {width: '40%'}

export default class Stats extends React.Component {

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
        return (
            <Paper style={style}>
                <Stat id='hp' value={this.state.hp} onChange={this.onChange.bind(this)}/>
                <Stat id='atk' value={this.state.atk} onChange={this.onChange.bind(this)}/>
                <Stat id='def' value={this.state.def} onChange={this.onChange.bind(this)}/>
                <Stat id='spatk' value={this.state.spatk} onChange={this.onChange.bind(this)}/>
                <Stat id='spdef' value={this.state.spdef} onChange={this.onChange.bind(this)}/>
                <Stat id='spd' value={this.state.spd} onChange={this.onChange.bind(this)}/>
            </Paper>
        )
    }
}