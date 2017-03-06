import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

export default class HeldItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 1,
        };
    }
    handleChange(value){
        this.setState({value});
    }

    render() {
        return (
            <div>
                <SelectField
                    floatingLabelText="Held Item"
                    value={this.state.value}
                    onChange={this.handleChange}
                    autoWidth={true}
                >
                    <MenuItem value={1} primaryText="Destiny Knot" />
                    <MenuItem value={2} primaryText="Everstone" />
                    <MenuItem value={3} primaryText="Power Weight (HP)" />
                    <MenuItem value={4} primaryText="Power Bracer (Atk)" />
                    <MenuItem value={5} primaryText="Power Belt (Def)" />
                    <MenuItem value={6} primaryText="Power Lens (SpAtk)" />
                    <MenuItem value={7} primaryText= "Power Band (SpDef)" />
                    <MenuItem value={8} primaryText="Power Anklet (Speed)" />
                </SelectField>
            </div>
        );
    }
}