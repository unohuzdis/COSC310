/**
 * Created by Julien on 2017-03-04.
 */
import React from 'react';
import Chip from 'material-ui/Chip';
import FontIcon from 'material-ui/FontIcon';
import {red500, deepPurple200, purple400, amberA100, brown300,
        limeA400, deepPurple600, grey400, orange500, lightBlue300,
        green500, yellow500, pink400, lightblue100, indigoA400,
        brown700} from 'material-ui/styles/colors';

const styles = {
    chip: {
        margin: 4,
    },
    wrapper: {
        display: 'flex',
        flexWrap: 'wrap',
    },
};

export default class ChipExampleSimple extends React.Component {

    render(){
        return(
           <div style={styles.wrapper}>
                <Chip
                backgroundColor={red500}
                style={styles.chip}
                >
                    TEST CHIP!
                </Chip>
           </div>
        );
    }



}

const defense = this.props.state.atk;
const attack = this.props.state.def;
var hPower = 4 * attack%4 + defense%4;

var defineHP = React.createClass({

    hpSelect: function (hPower) {
        switch (hPower) {
            case 0 :
                return <Chip
                    backgroundColor={red500}
                    style={styles.chip}
                >
                    Fighting
                </Chip>;
            case 1 :
                return <Chip
                    backgroundColor={deepPurple200}
                    style={styles.chip}
                >
                    Flying
                </Chip>;
            case 2 :
                return <Chip
                    backgroundColor={purple400}
                    style={styles.chip}
                >
                    Poison
                </Chip>;
            case 3 :
                return <Chip
                    backgroundColor={amberA100}
                    style={styles.chip}
                >
                    Ground
                </Chip>;
            case 4 :
                return <Chip
                    backgroundColor={brown300}
                    style={styles.chip}
                >
                    Rock
                </Chip>;
            case 5 :
                return <Chip
                    backgroundColor={limeA400}
                    style={styles.chip}
                >
                    Bug
                </Chip>;
            case 6 :
                return <Chip
                    backgroundColor={deepPurple600}
                    style={styles.chip}
                >
                    Ghost
                </Chip>;
            case 7 :
                return <Chip
                    backgroundColor={grey400}
                    style={styles.chip}
                >
                    Steel
                </Chip>;
            case 8 :
                return <Chip
                    backgroundColor={orange500}
                    style={styles.chip}
                >
                    Fire
                </Chip>;
            case 9 :
                return <Chip
                    backgroundColor={lightBlue300}
                    style={styles.chip}
                >
                    Water
                </Chip>;
            case 10 :
                return <Chip
                    backgroundColor={green500}
                    style={styles.chip}
                >
                    Grass
                </Chip>;
            case 11 :
                return <Chip
                    backgroundColor={yellow500}
                    style={styles.chip}
                >
                    Atomic
                </Chip>;
            case 12 :
                return <Chip
                    backgroundColor={pink400}
                    style={styles.chip}
                >
                    Psychic
                </Chip>;
            case 13 :
                return <Chip
                    backgroundColor={lightBlue100}
                    style={styles.chip}
                >
                    Ice
                </Chip>;
            case 14:
                return <Chip
                    backgroundColor={indigoA400}
                    style={styles.chip}
                >
                    Dragon
                </Chip>;
            case 15 :
                return <Chip
                    backgroundColor={brown700}
                    style={styles.chip}
                >
                    Dark
                </Chip>;
        }
    }
});












