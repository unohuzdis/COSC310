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
        }

        // this.updateState = this.updateState.bind(this);
    }

    updateState() {

        if (this.state.url === "http://www.pkparaiso.com/imagenes/xy/sprites/animados/pikachu-f.gif"){
            this.setState({url:"http://www.pkparaiso.com/imagenes/xy/sprites/animados/pikachu-f-5.gif" });
        }
        else{
            this.setState({url:"http://www.pkparaiso.com/imagenes/xy/sprites/animados/pikachu-f.gif" });
        }

    }

    render() {
        return (
            <Paper style={style}>
                <img src={this.state.url} onClick={this.updateState.bind(this)}/>
                <h3>{this.state.name}</h3>
                <p>{this.state.type}</p>
            </Paper>

        )

    }
}