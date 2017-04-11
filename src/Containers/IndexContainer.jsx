import React from 'react';

import { connect } from 'react-redux';

import { myAction, addFilters, selectPokemon, getMoves, myShiny, removeFilter, nameFilter} from '../Actions/pokeActions';



import Configure from '../Components/Configure';
import PokeView from '../Components/PokeView';
import ShinyCheck from '../Components/ShinyCheck'
import request from 'superagent';

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

    Alex:{
        marginLeft:'50px',
        marginTop:'50px',
        position:'absolute',
        zIndex:2,
        display:'block',



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
        console.log(this);
        return (
        <div style={{backgroundColor:'#dbdbdb'}}>
            <div style={styles.Alex}> <ShinyCheck shinyCheck={this.props.myShiny} /></div>
            <Configure filterName={this.props.filterByName} steps={this.props.activePokemon["HATCH STEPS"]} pokedex={this.props.pokedex} filters={this.props.filters}  addFilter={this.props.addFilter} removeFilter={this.props.removeFilter} url={this.props.url} moves={this.props.moves} pokemon={this.props.activePokemon}/>
            <PokeView  selectPokemon={this.props.selectPokemon} addFilter={this.props.addFilters} pokemon={this.props.pokedex} />
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        pokedex:
            (state.filters.size > 0 ?
                state.pokemon.filter((pokemon) => {
                return (pokemon["POKEMON"].toLowerCase().match(state.nameString) != null)
            }).filter((pokemon, id) => {
                    return state.filters.has(pokemon["EG 1"].toLowerCase())
            })
            :
                state.pokemon.filter((pokemon) => {
                    return (pokemon["POKEMON"].toLowerCase().match(state.nameString) != null)
                })),
        url: state.url,
        activePokemon: state.activePokemon,
        moves: state.moves,
        filters: state.filters
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
        addFilter: (filter) => {
            dispatch(addFilters([filter]))
        },
        removeFilter: (filter) => {
            console.log(filter, "here");
            dispatch(removeFilter(filter))

        },
        selectPokemon: (pokemon) => {
            dispatch(selectPokemon(pokemon));
            request.get(`http://pokeapi.co/api/v2/pokemon/${pokemon.DEX}/`)
                .end((err, res) => {
                    dispatch(getMoves(res.body.moves.map((move) => {
                        return move.move.name
                    })))
                })
        },
        addFilter: (filter) => {
            dispatch(addFilters([filter]))
        },
        removeFilter: (filter) => {
            dispatch(removeFilter(filter))
        },
        filterByName: (name) => {
            dispatch(nameFilter(name))
        }
    }
};

const Index = connect(
    mapStateToProps,
    mapDispatchToProps
)(IndexContainer);

export default Index;

