import React from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

const style1 = {
    left: '30%',
    height: 'auto',
    width: 'auto',
    textAlign: 'center',
    display: 'inline-block',
    position: 'relative',
};

const style2 = {
    margin: 12,
    float: 'left',
};


export default class Intro extends React.Component {


    render(){
        return (
            <div style={{width: '100%'}}>
                <Paper style={style1} zDepth={5}>
                    <div style={{height: '192px', width:'192px', }} >

                        <h2>Welcome to Hatchr! </h2>
                        <p> This program is designed to guide you through the complex process of Pokemon breeding. <br/>
                            To start, you’ll need to select 2 parent Pokemon of different genders that belong to the same
                            “Egg Group,” keeping in mind that the child will be the same Pokemon species as the mother. <br/>
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
                    <RaisedButton label="Default" primary={true} style={style} />
                </Paper>

            </div>
        )

    }
}