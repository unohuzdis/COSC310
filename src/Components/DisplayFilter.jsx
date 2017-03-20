import React from 'react';
import Paper from 'material-ui/Paper';
import Chip from 'material-ui/Chip';

let tests = ["monster", "water 1"]
const style = {
    height: 40,
    width: '100%',
    margin: 10,
    textAlign: 'center',
    display: 'inline-block'
};

const chipStyle={
    margin: 5,
    float: 'left',
    display: 'inline-block'
};

class Group extends React.Component{
    constructor(props){
        super(props);
    }
    render() {
        const filters = Array.from(this.props.filters).map((filter, id) => {
            console.log(this);
            return (<Chip style={chipStyle} key={id} onClick={this.props.removeFilter.bind(this, filter)}> {filter} </Chip>)
        });
        console.log(filters);
        return(
            <Paper style={style} zDepth={1} rounded={true} >
                {filters}
            </Paper>

        )
    }
}
export default Group;