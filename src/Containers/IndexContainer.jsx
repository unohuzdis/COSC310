import React from 'react';

import { connect } from 'react-redux';

import { myAction, addFilters} from '../Actions/pokeActions';

import Configure from '../Components/Configure';
import PokeView from '../Components/PokeView';

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
            <Configure />
            <PokeView addFilter={this.props.addFilters} pokemon={this.props.pokedex} />
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state.filters.size);
    return {
        pokedex: state.filters.size > 0 ? state.pokemon.filter((pokemon, id) => {
                    return state.filters.has(pokemon["EGG GROUPS"])
            }) : state.pokemon
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        my_action: () => {
            dispatch(myAction())
        },
        addFilters: (filters) => {
            console.log(filters["EGG GROUPS"])
            dispatch(addFilters([filters["EGG GROUPS"]]))
        }

    }
};

const Index = connect(
    mapStateToProps,
    mapDispatchToProps
)(IndexContainer);

export default Index;

