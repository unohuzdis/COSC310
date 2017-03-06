import React from 'react';
import HeldItem from '../Components/HeldItem';


const styles = {
    BackgroundStyle: {
        height: '100%',
        width: '100%',
        backgroundColor: '#b32d00',
        left: 0,
        top: 0,
        position: 'absolute',
        zIndex: 0
    },
    NavbarStyle: {
        width: '99%',
        height: '10%',
        marginTop: '0.5%',
        marginLeft: '0.5%',
        zIndex: 0
    },
    ProjectDisplayStyle: {
        height: '60%',
        width: '97%',
        marginTop: '1.5%',
        marginLeft: '1.5%',
        zIndex: 1
    },
};

export default class IndexContainer extends React.Component {

    render() {
        return (
            <HeldItem />
        )
    }
}
