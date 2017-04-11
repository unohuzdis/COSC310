import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper'
import LittlePokemon from './littlePokemon';

const style = {
    height: 'auto',
    width: '75%',
    display: 'inline-block',
    position: 'absolute',
    zIndex: '5'
}



export default class Want extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            active: false,
            mons: []
        }
    }
    onClick(){
        this.setState({active: true,
            mons: this.props.pokedex.filter((pokemon) => {
            return (pokemon["EG 1"] == this.props.selected["EG 1"])
            })})
    }
    close(){
        this.setState({active: false,
            mons: []})
    }
    render(){
        let displayMons;
        this.state.active ? displayMons = (

            <Paper style={style} zDepth={4} >
                <h2>
                    {"Mother: "}
                </h2> <br />
                <LittlePokemon selectPokemon={() => {}} addFilter={() => {}} pokemon={this.props.selected} />
                <br /><br /><br /><br /><br />

                <h2>
                    {"Potential Fathers: "}
                </h2> <br />
                {this.state.mons.map((pokemon, id) => {
                    return (<LittlePokemon selectPokemon={() => {}} addFilter={() => {}} key={id} pokemon={pokemon} />)
                    }
                )}

                <RaisedButton style={{width: '100%'}} label="Close" onClick={this.close.bind(this)} />
            </Paper>
        ) : displayMons = false;
        return (
            <div>
                {displayMons}
                <RaisedButton style={{width: '100%'}} label="Gimme Dis" onClick={this.onClick.bind(this)} />
            </div>
        )
    }

}