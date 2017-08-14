import React, { Component } from "react";
import { Link } from "react-router-dom";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

const Header = props => {
	const buttons = (
		<div>
			<TextField
				type="text"
				inputStyle={{ color: "white" }}
				placeholder="Search in your own collection ..."
				onChange={props.inputChange}
				value={props.inputValue}
			/>
		</div>
	);

	const links = (
		<Link to="/favourites">
			<RaisedButton label="Favourite Movies" primary={true} fullWidth={true} />
		</Link>
	);

	const renderButtons = props.internalSearch ? buttons : links;

	return (
		<AppBar
			title={
				<Link to="/" style={{ textDecoration: "none", color: "white" }}>
					HOME
				</Link>
			}
			showMenuIconButton={false}
			iconElementRight={renderButtons}
		/>
	);
};

export default Header;
