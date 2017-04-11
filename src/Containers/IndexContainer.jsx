import React from 'react';

import { connect } from 'react-redux';

import { myAction, addFilters, selectPokemon, getMoves, myShiny} from '../Actions/pokeActions';

import Configure from '../Components/Configure';
import PokeView from '../Components/PokeView';
import request from 'superagent';
import ShinyCheck from '../Components/ShinyCheck';
import Intro from '../Components/Intro';

const styles = {
    BackgroundStyle: {
        height: '100%',
        width: '100%',
        backgroundColor: '#b32d00',
        left: 0,
        top: 0,
        position: 'absolute',
        zIndex: 0
    },
    NavbarStyle: {
        width: '99%',
        height: '10%',
        marginTop: '0.5%',
        marginLeft: '0.5%',
        zIndex: 0
    },
    ProjectDisplayStyle: {
        height: '60%',
        width: '97%',
        marginTop: '1.5%',
        marginLeft: '1.5%',
        zIndex: 1
    },
};

class IndexContainer extends React.Component {
    render() {
        console.log(this.props.pokemon);
        return (
        <div>
            <Intro />
            <Configure url={this.props.url} moves={this.props.moves} pokemon={this.props.activePokemon}/>
            <ShinyCheck shinyCheck={this.props.myShiny}/>
            <PokeView selectPokemon={this.props.selectPokemon} addFilter={this.props.addFilters} pokemon={this.props.pokedex} />
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        pokedex: state.filters.size > 0 ? state.pokemon.filter((pokemon, id) => {
                    return state.filters.has(pokemon["EGG GROUPS"])
            }) : state.pokemon,
        url: state.url,
        activePokemon: state.activePokemon,
        moves: state.moves
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        my_action: () => {
            dispatch(myAction())
        },
        addFilters: (filters) => {
            dispatch(addFilters([filters["EGG GROUPS"]]))
        },
        myShiny: (bool) => {
            dispatch(myShiny(bool))
        },
        selectPokemon: (pokemon) => {
            dispatch(selectPokemon(pokemon));
            request.get(`http://pokeapi.co/api/v2/pokemon/${pokemon.DEX}/`)
                .end((err, res) => {
                   dispatch(getMoves(res.body.moves.map((move) => {return move.move.name})))
                })


        }




    }
};

const Index = connect(
    mapStateToProps,
    mapDispatchToProps
)(IndexContainer);

export default Index;

