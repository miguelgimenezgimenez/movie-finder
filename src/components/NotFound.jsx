import React from "react";
import Header from "./Header.jsx";

const NotFound = () =>
	<div>
		<Header />
		<div className="notFound">
			<h3>Sorry, that movie does not exist! Make sure you write the title correctly :)</h3>
		</div>
	</div>;

export default NotFound;
