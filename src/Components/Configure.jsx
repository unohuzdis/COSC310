import React from 'react';
import Pokemon from './Pokemon';
import Stats from './Stats'
import {Tabs, Tab} from 'material-ui/Tabs';
import Moves from './Moves';



import Abilities from './Abilities'


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
    } onChange(name, value){
        let newState = {};
        newState[name] = value;
        this.setState(newState);

    }
    render() {
        return(
            <div>
                <Pokemon  pokemon={this.props.pokemon}  url={this.props.url} />
                <Tabs>
                    <Tab label="stats" >
                        <Stats stats={this.state} onChange={this.onChange.bind(this)}/>
                    </Tab>
                    <Tab label="moves" >
                       <Moves moves={this.props.moves}/>
                    </Tab>
                </Tabs>
                <Pokemon /><br/>
                <Stats stats={this.state} onChange={this.onChange.bind(this)}/>

                <SortedEggGroups removeFilter={this.props.removeFilter} filters={this.props.filters} addFilter={this.props.addFilter} /><br/>
                <Abilities />
            </div>
        )
    }
}