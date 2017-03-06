import React from 'react';
import Paper from 'material-ui/Paper';
import Slider from 'material-ui/Slider';
import Pokemon from './Pokemon';

let styles = {
    div: {height: '5%'},
    slider: {width: '70%', height: '80%', marginRight: '2%', display: 'inline-block'},
    display: {width: '5%', height: '100%', display: 'inline-block'},
    header: {width: '5%', height: '100%', display: 'inline-block', marginRight: '5%',}
};

export default class Stat extends React.Component {

    constructor(props) {
        super(props);
    }
    onChange(event, value){
        this.props.onChange(this.props.id, value);
    }
    render() {
        return (
            <div style={styles.div}>
                <h4 style={styles.header}> {this.props.id} </h4>
                <Slider
                        min={0}
                        max={31}
                        step={1}
                        onChange={this.onChange.bind(this)}
                        value={this.props.value}
                        style={styles.slider}/>
                <h5 style={styles.display}> {this.props.value} </h5>
            </div>
        )
    }
}