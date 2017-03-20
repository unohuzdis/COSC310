import React from 'react';
import Paper from 'material-ui/Paper';
import Chart from './Chart'
import Stat from './Stat'

let style = {width: '100%'};

export default class Stats extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Paper style={style}>
                <div style={{display: 'inline-block', float: 'left' ,width: '40%', position:'relative'}}>
                    <Stat id='hp' value={this.props.stats.hp} onChange={this.props.onChange}/>
                    <Stat id='atk' value={this.props.stats.atk} onChange={this.props.onChange}/>
                    <Stat id='def' value={this.props.stats.def} onChange={this.props.onChange}/>
                    <Stat id='spatk' value={this.props.stats.spatk} onChange={this.props.onChange}/>
                    <Stat id='spdef' value={this.props.stats.spdef} onChange={this.props.onChange}/>
                    <Stat id='spd' value={this.props.stats.spd} onChange={this.props.onChange}/>
                </div>
                <Chart stats={this.props.stats} style={{display: 'inline-block', float: 'right' ,width: '50%', position:'relative', bottom: '10%'}}/>
            </Paper>
        )
    }
}