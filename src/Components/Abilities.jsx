/**
 * Created by ali-meysammohebbi on 2017-03-06.
 */
import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
let abilities = ["Static", "Lightning Rod"];
export default class Abilities extends Component{
    constructor(props){
        super(props);
        this.state = {value: 1};
    }



    handleChange(event, value){
        this.setState({value: value});
    }

    render(){
        let displayAbilities = abilities.map((ability, id) => {
            return (<MenuItem key={id}
                              value={id}
                              primaryText={ability}/> )
        })
        return (
            <SelectField
                floatingLabelText="Ability"
                value={this.state.value}
                onChange={this.handleChange.bind(this)}
                autoWidth={true}
            >
                {displayAbilities}
            </SelectField>

        );
    }
}