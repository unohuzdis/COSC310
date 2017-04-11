/**
 * Created by ali-meysammohebbi on 2017-04-09.
 */
import React from 'react';

export default class HatchTime extends React.Components{

    constructor(props){
        super(props);
        this.state = {
            value: 1
        };
    }
    handleUpdateInput(value) {
        if (NumberOfSteps.includes(value)){
            console.log(this);
            this.props.display(value);
        }
    };
    handleChange(event, value){
        this.setState({value: value});
    }

    render(){
        return(
        <div>
            <p>The number of steps to hatch the egg is {this.props.value}</p><br/>
            <p>The number of steps with either "Flame Body" or "Magma Armor" reduces to {(this.props.value)/2}</p>
            </div>
        );
    }

}



//clearify the number of steps




//reduce number of steps by factor of 1/2 if the user poses a flame body or magma pokemon





//provide the website for help http://bulbapedia.bulbagarden.net/wiki/Flame_Body_(Ability)