import React from 'react';
import Pokemon from './Pokemon';
import Stats from './Stats';
import {Tabs, Tab} from 'material-ui/Tabs';
import Moves from './Moves';
import SortedEggGroups from './SortedEggGroups';
import Want from './Want';
import Abilities from './Abilities'
import HatchTime from './HatchTime';


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
        const stats = {
            hp: this.props.pokemon["HEALTH POINTS"],
            atk: this.props.pokemon["ATTACK"],
            def: this.props.pokemon["DEFENSE"],
            spatk: this.props.pokemon["SPECIAL ATTACK"],
            spdef: this.props.pokemon["SPECIAL DEFENSE"],
            spd: this.props.pokemon["SPEED"],

        }
        return(
            <div>
                <Pokemon  pokemon={this.props.pokemon}  url={this.props.url} />
                <Tabs>
                    <Tab label="stats" >
                        <Stats base={stats} stats={this.state} onChange={this.onChange.bind(this)}/>
                    </Tab>
                    <Tab label="moves" >
                       <Moves moves={this.props.moves}/>
                    </Tab>
                    <Tab label="steps" >
                        <HatchTime steps={this.props.steps} />
                    </Tab>
                </Tabs>
                <SortedEggGroups removeFilter={this.props.removeFilter} filters={this.props.filters} addFilter={this.props.addFilter} /><br/>
                <Want selected={this.props.pokemon} pokedex={this.props.pokedex} />
            </div>
        )
    }
}