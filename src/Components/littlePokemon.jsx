import React from 'react';
import Paper from 'material-ui/Paper';
import '../Styles/responsive.css'

const style = {
    height: 75,
    width: 75,
    marginLeft: 10,
    marginBottom:20,
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
        }
    }

    // eggGroup(){
    //     if (this.prop.pokemon === "http://www.pkparaiso.com/imagenes/xy/sprites/animados/pikachu-f.gif"){
    //         this.setState({url:"http://www.pkparaiso.com/imagenes/xy/sprites/animados/pikachu-f-5.gif", top:'32px'});
    //     }
    //     else{
    //         this.setState({url:"http://www.pkparaiso.com/imagenes/xy/sprites/animados/pikachu-f.gif", top:'132px'});
    //     }
    //
    // }


    render() {
        console.log(this.props.pokemon.POKEMON.toLowerCase());
        return (
            <div onClick={this.props.addFilter.bind(this, this.props.pokemon["EGG GROUPS"])}>
            <Paper style={style} circle={true} >
                <img className='responsive-img'
                     src={`https://img.pokemondb.net/artwork/${this.props.pokemon.POKEMON.toLowerCase()}.jpg`}/>   src={`https://img.pokemondb.net/artwork/${this.props.pokemon.POKEMON.toLowerCase()}.jpg`} />
                <h5> {this.props.pokemon.POKEMON}</h5>
            </Paper>



           </div>
        )
    }
}