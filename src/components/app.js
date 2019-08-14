import React from 'react';
import IncrementButton from './increment-button';
import AppContext from './AppContext';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

		increaseCount (count) { 
			this.setState({
			count: count + 1
			})
		}

    render() {
			let contextValue = {
				count : this.state.count
			}
        return (
					<AppContext.Provider value = {contextValue}>
            <div className="parent">
                <div className="count">
                    Number of clicks: {this.state.count}
                </div>
                <IncrementButton />
									count ={this.state.count} 
								{/* increaseCount={(count) => this.increaseCount(count)} */}
            </div>
					</AppContext.Provider>
        );
    }
}
