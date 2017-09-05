import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "./Header.jsx";
import { GridList, GridTile } from "material-ui/GridList";
import IconButton from "material-ui/IconButton";
import Subheader from "material-ui/Subheader";
import StarBorder from "material-ui/svg-icons/toggle/star-border";
import pic from "../images/notFound.jpg";


class Favourites extends Component {
	state = {
		search: ""
	};

	handleChange = event => {
		this.setState({ search: event.target.value });
	};

	movieDetails = movie => {
		this.props.history.push(`/movie/${movie.imdbID}`, movie);
	};

	render() {
		return (
			<div className="root">
				<Header internalSearch imputValue={this.state.search} inputChange={this.handleChange} />
				<div className="gridList">
					<GridList cellHeight={250}>
						<Subheader style={{ fontSize: "20px" }}>My favourites:</Subheader>
						{this.props.favs
							.filter(movie => `${movie.Title}`.toUpperCase().indexOf(this.state.search.toUpperCase()) >= 0)
							.map(movie =>
								<GridTile
									key={movie.imdbID}
									title={movie.Title}
									subtitle={
										<span>
											by <b>{movie.Director}</b>
										</span>
									}
									actionIcon={
										<IconButton>
											<StarBorder color="white" hoverColor="#84FFFF" onClick={() => this.movieDetails(movie)} />
										</IconButton>
									}
								>
									<img src={movie.Poster === "N/A" ? pic : movie.Poster} />
								</GridTile>
							)}
					</GridList>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	favs: state.favourites
});

export default connect(mapStateToProps)(Favourites);
