import React from "react";

import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";

class App extends React.Component { 

	constructor(props) { 
		super(props);
	}

	render() {
		return (
			<div>
				<Header />
				<UserInput />
				<Dashboard />
				<Footer />
			</div>
		);
	}

}

export default App;