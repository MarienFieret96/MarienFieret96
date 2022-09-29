import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Sidebar, Footer } from "./components";
import { Home, Error } from "./pages";

function App() {
	return (
		<Router>
			<Sidebar />
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="*">
					<Error />
				</Route>
			</Switch>
			<Footer />
		</Router>
	);
}

export default App;
