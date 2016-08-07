import React, { Component } from 'react';
import Header from './components/elements/Header';
import Home from './components/pages/Home';
import '../css/App.css';

class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<Home />
			</div>
		);
	}
}

export default App;
