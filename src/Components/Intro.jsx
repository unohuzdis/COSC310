import React from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
    height: 'auto',
    width: '75%',
    display: 'inline-block',
    position: 'absolute',
    zIndex: '5',
    borderRadius: '20px',
    borderColor: 'rgb(0, 188, 212)',
    borderWidth: '5px'

};

const style2 = {
    margin: 12,
    float: 'left',
};
let isOn = true;


export default class Intro extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            isOn: true
        }
    }
    handleClick(){
        this.setState({isOn: false});
    }
    render(){
        if(this.state.isOn == true){
        return (
            <div style={{width: 'auto', marginLeft: '10em' }}>
                <Paper style={style} zDepth={5}>
                    <div style={{height: 'auto', width:'auto', padding: '20px' }} >

                        <h2 style = {{textAlign: 'center'}}>Welcome to Hatchr! </h2>
                        <p style = {{textAlign: 'left'}}> This program is designed to guide you through the complex process of Pokemon breeding. <br/><br/>
                            To start, you’ll need to select 2 parent Pokemon of different genders that belong to the same
                            “Egg Group,” keeping in mind that the child will be the same Pokemon species as the mother. <br/><br/>
                            Now that you know which Pokemon you want, it’s time to look at the Stats. Every Pokemon has the
                            following six stats: Health, Attack, Defense, Special Defense, Special Attack and Speed, each
                            represented by a value from 0 to 31. Pokemon also have abilities, natures, and moves.
                            During the breeding process, many of these attributes are chosen by the game at random.
                            However, it is possible to reduce random factors and eventually obtain exactly the Pokemon that
                            you desire. Hatchr was created to help you navigate the maze of random variables in Pokemon
                            breeding and create a Pokemon team that suits your play style. The choices you make in Hatchr
                            will affect which of these many stats, abilities, natures, and moves can be passed down from
                            the parents to a child. </p>


                    </div>
                    <RaisedButton label="Continue" primary={true} style={{float: 'right', marginBottom: '2em', marginRight: '2em'}} onClick={this.handleClick.bind(this)} />
                </Paper>

            </div>
        )}
        else{
            return(null)
        }

    }


}