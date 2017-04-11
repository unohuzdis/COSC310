import React from 'react';
import AutoComplete from 'material-ui/AutoComplete'


export default class Stats extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <AutoComplete
                    hintText="Move 1"
                    dataSource={this.props.moves}
                    onUpdateInput={this.handleUpdateInput}
                /> <br />
                <AutoComplete
                    hintText="Move 2"
                    dataSource={this.props.moves}
                    onUpdateInput={this.handleUpdateInput}
                /> <br />
                <AutoComplete
                    hintText="Move 3"
                    dataSource={this.props.moves}
                    onUpdateInput={this.handleUpdateInput}
                /> <br />
                <AutoComplete
                    hintText="Move 4"
                    dataSource={this.props.moves}
                    onUpdateInput={this.handleUpdateInput}
                />
            </div>
        )
    }
}