import React from 'react';
import Paper from 'material-ui/Paper';

const style = {
    // height: 200,
    width: "40%",
    textAlign: 'center',
    display: 'inline-block'
};

export default class Pokemon extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: "Pikachu",
            type: "Electric",
            url: "http://www.pkparaiso.com/imagenes/xy/sprites/animados/pikachu-f.gif",
<<<<<<< HEAD
=======
            top: '132px',
            left:'125%'
>>>>>>> parent of d1cf4f9... Created the pokemon onClick to display the selected pokemon.
        }

        // this.updateState = this.updateState.bind(this);
    }

    updateState() {

        if (this.state.url === "http://www.pkparaiso.com/imagenes/xy/sprites/animados/pikachu-f.gif"){
<<<<<<< HEAD
            this.setState({url:"http://www.pkparaiso.com/imagenes/xy/sprites/animados/pikachu-f-5.gif" });
        }
        else{
            this.setState({url:"http://www.pkparaiso.com/imagenes/xy/sprites/animados/pikachu-f.gif" });
=======
            this.setState({url:"http://www.pkparaiso.com/imagenes/xy/sprites/animados/pikachu-f-5.gif", top:'32px'});
        }
        else{
            this.setState({url:"http://www.pkparaiso.com/imagenes/xy/sprites/animados/pikachu-f.gif", top:'132px'});
>>>>>>> parent of d1cf4f9... Created the pokemon onClick to display the selected pokemon.
        }

    }

    render() {

        return (
<<<<<<< HEAD
            <Paper style={style}>
                <img src={this.state.url} onClick={this.updateState.bind(this)}/>
                <h3>{this.state.name}</h3>
                <p>{this.state.type}</p>
            </Paper>

=======
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
>>>>>>> parent of d1cf4f9... Created the pokemon onClick to display the selected pokemon.
        )

    }
}