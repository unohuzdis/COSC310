import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import pokeStore from './Store/pokeStore';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import IndexContainer from './Containers/IndexContainer.jsx';
import injectTapEventPlugin from "react-tap-event-plugin";

injectTapEventPlugin();
let store = createStore(pokeStore);

class App extends React.Component {
    render () {
        return (
            <MuiThemeProvider>
                <Provider store={store}>
                    <IndexContainer />
                </Provider>
        </MuiThemeProvider>)
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));
