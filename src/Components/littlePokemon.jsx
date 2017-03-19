import React from 'react';
import Paper from 'material-ui/Paper';
import '../Styles/responsive.css'

const style = {
    height: 100,
    width: 100,
    margin: '5%',
    textAlign: 'center',
    float: 'left',
    display: 'inline-block'
};



export default class littlePokemon extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: "Pikachu",
            type: "Electric",
            url: "http://www.pkparaiso.com/imagenes/xy/sprites/animados/pikachu-f.gif",
            // top: '132px',
            // left: '125%'
        }
    }


    render() {
        console.log(this.props.pokemon.POKEMON.toLowerCase());
        return (
            <div>
            <Paper style={style} circle={true} >
                <img className='responsive-img'
                     src={`https://img.pokemondb.net/artwork/${this.props.pokemon.POKEMON.toLowerCase()}.jpg`}/>
                <h3> {this.props.pokemon.POKEMON}</h3>
            </Paper>



           </div>
        )
    }
}