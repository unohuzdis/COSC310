/**
 * Created by ali-meysammohebbi on 2017-03-13.
 */
import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import pokeStore from '../Store/pokeStore';



let eggType = ["Monster", "Water 1", "Water 2", "Water 3", "Bug", "Grass", "Dragon", "Flying", "Field",
    "Fairy", "Ditto", "Human-Like", "Mineral", "Amorphous", "Undiscovered"];
export default class SortedEggGroups extends Component{
    constructor(props){
        super(props);
        this.state = {
            search: ''
        };
    }

    updateSearch(event){
        this.setState({search: event.target.value});
    }


    render(){
        let displayEggType = eggType.map((eggtype, item) => {
            return (<MenuItem key={item}
                              value={item}
                              primaryText={eggtype}/> )
        })

        let filteredEggType = this.props["Egg Groups"].filter((["Egg Groups"]) =>
        {
            return <pokeStore />
        }
        );



        return (
            <div>
                <SelectField
                    floatingLabelText="EggType"
                    value={this.state.value}
                    onChange={this.handleChange.bind(this)}
                    autoWidth={true}
                >
                    {displayEggType}
                </SelectField>
                <ul>
                    {filteredEggType.map(()=>{})}
                </ul>
            </div>
        );
    }
};