/**
 * Created by Julien on 2017-03-04.
 */
import React from 'react';
import Chip from 'material-ui/Chip';


// import {red500, deepPurple200, purple400, amberA100, brown300,
//         limeA400, deepPurple600, grey400, orange500, lightBlue300,
//         green500, yellow500, pink400, lightblue100, indigoA400,
//         brown700} from 'material-ui/styles/colors';

const styles = {
    chip: {
        margin: 4,
        display: 'inline-block',
        fontColor: '#ffffff',
    },
    wrapper: {
        display: 'flex',
        flexWrap: 'wrap',
    },

    labelStyle:{fontSize: 20,
        textShadowOffset: {width: 2, height: 2},
        textShadowRadius: 1,
        textShadowColor: '#00cccc'},

}


export default class HiddenPowers extends React.Component {
    render() {
        let hPower = this.calculateHPower();
        return (
            <div >
                <h4 style={{display: 'inline-block'}}>
                    HIDDEN POWER TYPE:
                </h4>
                {this.hpSelect(hPower)}
            </div>
        )
    }

    calculateHPower(){
        let a = this.props.stats.hp%2;
        let b = this.props.stats.atk%2;
        let c = this.props.stats.def%2;
        let d = this.props.stats.spd%2;
        let e = this.props.stats.spatk%2;
        let f = this.props.stats.spdef%2;
        return Math.floor(((a + 2*b + 4*c + 8*d + 16*e + 32*f) * 15) / 63);
    }
    hpSelect (hPower) {
        switch (hPower) {
            case 0 :
                return <Chip
                    backgroundColor={'#8B0000'}
                    labelColor='#ffffff'
                    labelStyle={styles.labelStyle}
                    style={styles.chip}
                >
                    Fighting
                </Chip>;
            case 1 :
                return <Chip
                    backgroundColor={'#00BFFF'}
                    style={styles.chip}
                >
                    Flying
                </Chip>;
            case 2 :
                return <Chip
                    backgroundColor={'#8B008B'}
                    labelColor='#ffffff'
                    labelStyle={styles.labelStyle}
                >
                    Poison
                </Chip>;
            case 3 :
                return <Chip
                    backgroundColor={'#B8860B'}
                    labelColor='#ffffff'
                    labelStyle={styles.labelStyle}
                    style={styles.chip}
                >
                    Ground
                </Chip>;
            case 4 :
                return <Chip
                    backgroundColor={'#696969'}
                    labelColor='#ffffff'
                    labelStyle={styles.labelStyle}
                    style={styles.chip}
                >
                    Rock
                </Chip>;
            case 5 :
                return <Chip
                    backgroundColor={'#7FFF00'}
                    style={styles.chip}
                >
                    Bug
                </Chip>;
            case 6 :
                return <Chip
                    backgroundColor={'#4B0082'}
                    labelColor='#ffffff'
                    labelStyle={styles.labelStyle}
                    style={styles.chip}
                >
                    Ghost
                </Chip>;
            case 7 :
                return <Chip
                    backgroundColor={'#D3D3D3'}
                    labelStyle={styles.labelStyle}
                    style={styles.chip}
                >
                    Steel
                </Chip>;
            case 8 :
                return <Chip
                    backgroundColor={'#FF4500'}
                    style={styles.chip}
                >
                    Fire
                </Chip>;
            case 9 :
                return <Chip
                    backgroundColor={'#B0E0E6'}
                    style={styles.chip}
                >
                    Water
                </Chip>;
            case 10 :
                return <Chip
                    backgroundColor={'	#228B22'}
                    style={styles.chip}
                >
                    Grass
                </Chip>;
            case 11 :
                return <Chip
                    backgroundColor={'#FFFF00'}
                    style={styles.chip}
                >
                    Electric
                </Chip>;
            case 12 :
                return <Chip
                    backgroundColor={'#FF00FF'}
                    labelColor='#ffffff'
                    labelStyle={styles.labelStyle}
                    style={styles.chip}
                >
                    Psychic
                </Chip>;
            case 13 :
                return <Chip
                    backgroundColor={'#E0FFFF'}
                    style={styles.chip}
                >
                    Ice
                </Chip>;
            case 14:
                return <Chip
                    backgroundColor={'#4B0082'}
                    labelColor='#ffffff'
                    labelStyle={styles.labelStyle}
                    style={styles.chip}
                >
                    Dragon
                </Chip>;
            case 15 :
                return <Chip
                    backgroundColor={'#191970'}
                    labelColor='#ffffff'
                    labelStyle={styles.labelStyle}
                    style={styles.chip}
                >
                    Dark
                </Chip>;
        }
    }
}












