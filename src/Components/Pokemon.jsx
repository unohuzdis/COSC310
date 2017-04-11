import React from 'react';
import Paper from 'material-ui/Paper';
import HeldItem from './HeldItem';
import Types from './Types';
import Abilities from './Abilities'
import '../Styles/responsive.css'
const style = {
    left: '37%',
    height: 'auto',
    width: "25%",
    textAlign: 'center',
    display: 'inline-block',
    position: 'relative'
};


export default class Pokemon extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: "Pikachu",
            type: "Electric",
            url: "http://www.pkparaiso.com/imagenes/xy/sprites/animados/pikachu-f.gif",
            top: '132px',
            left:'125%'
        }

        // this.updateState = this.updateState.bind(this);
    }

    updateState() {

        if (this.state.url === "http://www.pkparaiso.com/imagenes/xy/sprites/animados/pikachu-f.gif"){
            this.setState({url:"http://www.pkparaiso.com/imagenes/xy/sprites/animados/pikachu-f-5.gif", top:'32px'});
        }
        else{
            this.setState({url:"http://www.pkparaiso.com/imagenes/xy/sprites/animados/pikachu-f.gif", top:'132px'});
        }

    }

    render() {
        return (
            <div style={{width: '100%'}} className="space">
                <Paper style={style}>
                    <figure style={{clear: 'both', marginLeft:'70px'}}>
                       <img  style={{height:'100px', width:'100px', position:'relative', clear:'both', display:'inline-block'}} src={this.props.url}/>
                    </figure>

                    <article style={{clear: 'both', marginTop:'2em', zIndex:'6'}}>
                        <h3 style={{position:'relative'}}>{this.props.pokemon.POKEMON || ""}</h3>
                        <div style={{marginRight:'44px'}}><Types type={this.props.pokemon["TYPE 1"] || "Electric"} /></div>
                    </article>



                </Paper>


            </div>
        )

    }
}