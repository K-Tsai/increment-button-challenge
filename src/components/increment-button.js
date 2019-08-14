import React from 'react';
import AppContext from './AppContext';

export default class IncrementButton extends React.Component {
	static contextType = AppContext;
    render() {
    return <button onClick= {() => this.props.increaseCount(this.props.count)}>Increment</button>;
    }
}
