/**
 * Created by ali-meysammohebbi on 2017-03-06.
 */
import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import LittlePokemon from './LittlePokemon';

export default class pokeView extends Component{
    constructor(props){
        super(props);
        this.state = {value: 1};
    }

    render(){
        let displayPokemons = this.props.pokemon.map((pokemon, id) => {
            return (
                <LittlePokemon selectPokemon={this.props.selectPokemon} addFilter={this.props.addFilter.bind(this, pokemon)} key={id} pokemon={pokemon} />)
        });

        return (
            <div>
                {displayPokemons}
            </div>

        );
    }
}