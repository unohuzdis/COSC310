/**
 * Created by ali-meysammohebbi on 2017-04-09.
 */
import React from 'react';


let NumberOfSteps=[1280, 2560,3840,5120,6400,7680,8960,10240,20480,30720];
// check what pokemon is selected
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

    render(){

        return (
            <div>
                <AutoComplete
                    hintText="Type anything"
                    dataSource={eggType}
                    onUpdateInput={this.handleUpdateInput.bind(this)}
                    floatingLabelText="Egg Group Filter"
                    fullWidth={true}
                />
                <Group removeFilter={this.props.removeFilter} filters={this.props.filters} />
            </div>

        );

    }

}



//clearify the number of steps




//reduce number of steps by factor of 1/2 if the user poses a flame body or magma pokemon





//provide the website for help http://bulbapedia.bulbagarden.net/wiki/Flame_Body_(Ability)