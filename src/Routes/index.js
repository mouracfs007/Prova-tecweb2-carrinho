import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//
//	Pages
//
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Home from '../Pages/Home';
const Routes = () => {
	return(
		<div className="App">
			<BrowserRouter>
				<Header />
				<Switch>
					<Route exact path='/' component={Home} />
				</Switch>
				<Footer />
			</BrowserRouter>
		</div>
	)
};

export default Routes;
