import React from 'react';
import Paper from 'material-ui/Paper';
import Chart from './Chart'
import Stat from './Stat'
import HiddenPower from './HiddenPowers'

let style = {width: '100%', left:'50%'};

export default class Stats extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Paper style={{display: 'inline-block', float: 'left' ,width: '50%',height: '50%', position:'relative'}}>
                        <Stat id='hp' value={this.props.stats.hp} onChange={this.props.onChange}/>
                        <Stat id='atk' value={this.props.stats.atk} onChange={this.props.onChange}/>
                        <Stat id='def' value={this.props.stats.def} onChange={this.props.onChange}/>
                        <Stat id='spatk' value={this.props.stats.spatk} onChange={this.props.onChange}/>
                        <Stat id='spdef' value={this.props.stats.spdef} onChange={this.props.onChange}/>
                        <Stat id='spd' value={this.props.stats.spd} onChange={this.props.onChange}/>
                </Paper>
                <Paper style={{display: 'inline-block', float: 'left' ,height: '50%', width: '50%', position:'relative'}}>
                    <Chart stats={this.props.stats} style={{display: 'block',textAlign:'center', width: '100%', position:'relative'}}/>
                </Paper>
                <HiddenPower stats={this.props.stats}/>

            </div>


    )
    }
}