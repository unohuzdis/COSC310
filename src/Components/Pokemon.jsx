import React from 'react';
import Paper from 'material-ui/Paper';
import HeldItem from './HeldItem';
import Types from './Types';
import Abilities from './Abilities';
const style = {
    left: '30%',
    height: '30%',
    width: "40%",
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
            <div style={{width: '100%'}}>
                <Paper style={style}>
                    <div style={{height: '192px', width:'192px', left:'100%'}} >
                        <img  style={{position: 'relative', top: this.state.top, left:this.state.left}} src={this.state.url} onClick={this.updateState.bind(this)}/>
                    </div>
                    <h3>{this.state.name}</h3>
                    <Types type="Electric" />
                </Paper>
                <HeldItem />
                <Abilities />
            </div>
        )

    }
}