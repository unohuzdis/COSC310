import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import IndexContainer from './Containers/IndexContainer.jsx';
import injectTapEventPlugin from "react-tap-event-plugin";

injectTapEventPlugin();

class App extends React.Component {
    render () {
        return (<MuiThemeProvider>
            <IndexContainer />
        </MuiThemeProvider>);
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));