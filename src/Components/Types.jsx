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
        marginBottom: 4,
        left: '45%'
    },
    wrapper: {
        display: 'flex',
        flexWrap: 'wrap',
    },
}
export default class HiddenPowers extends React.Component {
    render() {
        return this.hpSelect(this.props.type);
    }
    hpSelect (hPower) {
        switch (hPower) {
            case 'Fighting' :
                return <Chip
                    backgroundColor={'#8B0000'}
                    style={styles.chip}
                >
                    Fighting
                </Chip>;
            case 'Flying' :
                return <Chip
                    backgroundColor={'#00BFFF'}
                    style={styles.chip}
                >
                    Flying
                </Chip>;
            case 'Poison' :
                return <Chip
                    backgroundColor={'#8B008B'}
                    style={styles.chip}
                >
                    Poison
                </Chip>;
            case 'Ground' :
                return <Chip
                    backgroundColor={'#B8860B'}
                    style={styles.chip}
                >
                    Ground
                </Chip>;
            case 'Rock' :
                return <Chip
                    backgroundColor={'#696969'}
                    style={styles.chip}
                >
                    Rock
                </Chip>;
            case 'Bug' :
                return <Chip
                    backgroundColor={'#7FFF00'}
                    style={styles.chip}
                >
                    Bug
                </Chip>;
            case 'Ghost' :
                return <Chip
                    backgroundColor={'#4B0082'}
                    style={styles.chip}
                >
                    Ghost
                </Chip>;
            case 'Steel' :
                return <Chip
                    backgroundColor={'#D3D3D3'}
                    style={styles.chip}
                >
                    Steel
                </Chip>;
            case 'Fire' :
                return <Chip
                    backgroundColor={'#FF4500'}
                    style={styles.chip}
                >
                    Fire
                </Chip>;
            case 'Water' :
                return <Chip
                    backgroundColor={'#B0E0E6'}
                    style={styles.chip}
                >
                    Water
                </Chip>;
            case 'Grass' :
                return <Chip
                    backgroundColor={'	#228B22'}
                    style={styles.chip}
                >
                    Grass
                </Chip>;
            case 'Electric' :
                return <Chip
                    backgroundColor={'#FFFF00'}
                    style={styles.chip}
                >
                    Electric
                </Chip>;
            case 'Psychic' :
                return <Chip
                    backgroundColor={'#FF00FF'}
                    style={styles.chip}
                >
                    Psychic
                </Chip>;
            case 'Ice' :
                return <Chip
                    backgroundColor={'#E0FFFF'}
                    style={styles.chip}
                >
                    Ice
                </Chip>;
            case 'Dragon':
                return <Chip
                    backgroundColor={'#4B0082'}
                    style={styles.chip}
                >
                    Dragon
                </Chip>;
            case 'Dark' :
                return <Chip
                    backgroundColor={'#191970'}
                    style={styles.chip}
                >
                    Dark
                </Chip>;
        }
    }
}












