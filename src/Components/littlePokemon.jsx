import React from 'react';
import Paper from 'material-ui/Paper';

const style = {
    height: 100,
    width: 100,
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
};

const PaperExampleCircle = () => (
    <div>
        <Paper style = {style} zDepth={2} circle={true} />
    </div>
);

export default PaperExampleCircle;

export default class littlePokemon extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            name: "Pikachu",
            type: "Electric",
            url: "http://www.pkparaiso.com/imagenes/xy/sprites/animados/pikachu-f.gif",
            top: '132px',
            left:'125%'
        }
    }


    render() {
        return (
           <div>
            <Paper style={style}>
                <img url:"http://www.pkparaiso.com/imagenes/xy/sprites/animados/pikachu-f.gif"/>
            </Paper>
               <h3> {this.state.name}</h3>
           </div>
        )
    }
}