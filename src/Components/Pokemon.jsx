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
    position: 'relative',
};


export default class Pokemon extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: "Pikachu",
            type: "Electric",
            // top: '132px',
            // left:'125%'
        }

        // this.updateState = this.updateState.bind(this);
    }

    render() {
        console.log("POKEMON:" , this);
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