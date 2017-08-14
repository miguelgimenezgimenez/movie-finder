import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Home.jsx";
import Movie from "./Movie.jsx";
import NotFound from "./NotFound.jsx";
import Favourites from "./Favourites.jsx";

const App = () =>
	<BrowserRouter>
		<div>
			<Route exact path="/" component={Home} />
			<Route path="/movie/:id" component={Movie} />
			<Route path="/notfound" component={NotFound} />
			<Route path="/favourites" component={Favourites} />
		</div>
	</BrowserRouter>;

export default App;
