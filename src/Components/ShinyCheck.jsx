import React from 'react';
import Checkbox from 'material-ui/Checkbox';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

styles = {
    block: {
        maxWidth: 250,
    },
    checkbox: {
        marginBottom: 16,
    },
    paper: {
        width: 550,
        height: 100,

    },
    selectField: {
        width: 550,

    }
};

export default class ShinyCheck extends Component {

    constructor(props) {
        super(props);
        this.state = {
            checked: false
        }
    }
    handleChange(e, value){
        this.setState({value});
    }

    handleCheck(e) {
        this.setState({checked: !this.state.checked})
    }

    render(){
        const myconst = (
            <Paper style={styles.paper}>
                <SelectField
                    floatingLabelText="Choose your Shiny Method."
                    value={this.state.value}
                    onChange={this.handleChange.bind(this)}
                    style={styles.selectField}
                >
                    <MenuItem value={0} primaryText="None  =>  Shiny odds are 1/4096. Good luck."/>
                    <MenuItem value={1} primaryText="Masuda Method  =>  Shiny odds are 6/4096 which is 1/683."/>
                    <MenuItem value={2} primaryText="Shiny Charm  =>  Shiny odds are  3/4096 which is 1/1365."/>
                    <MenuItem value={3} primaryText="Both  =>  Shiny odds are  9/4096  which is 1/455. These are the best possible odds!"/>
                </SelectField>
            </Paper>
        );
        const displayText = this.state.checked ? myconst : false
        return (
            <div style={styles.block}>
                <Checkbox
                    checked={this.state.checked}
                    label="Shiny"
                    labelPosition="left"
                    onCheck={this.handleCheck.bind(this)}
                    style={styles.checkbox}
                />
                {displayText}
            </div>
        )
    }

}

