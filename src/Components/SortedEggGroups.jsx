/**
 * Created by ali-meysammohebbi on 2017-03-13.
 */
import React, {Component} from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import Group from './DisplayFilter';



let eggType = ["monster", "water 1", "water 2", "water 3", "bug", "grass", "dragon", "flying", "field",
    "fairy", "ditto", "human-like", "mineral", "amorphous", "undiscovered"];
export default class SortedEggGroups extends Component{
    constructor(props){
        super(props);
        this.state = {
            value: 1
        };
    }

    handleUpdateInput(value) {
        if (eggType.includes(value)){
            this.props.addFilter(value);
        }
    }
    nameFilter(event){
        if (event.keyCode == 13){
            this.props.filterName(event.target.value);
        }
    }

    render() {
        return (
            <div>
                <AutoComplete
                    hintText="Type anything"
                    dataSource={eggType}
                    onUpdateInput={this.handleUpdateInput.bind(this)}
                    floatingLabelText="Egg Group Filter"
                    fullWidth={true}
                    onKeyDown={this.nameFilter.bind(this)}
                />
                <Group removeFilter={this.props.removeFilter} filters={this.props.filters} />
            </div>

        );
    }
};