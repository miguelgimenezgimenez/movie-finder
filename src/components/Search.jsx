import React, { Component } from "react";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import axios from "axios";
import { withRouter } from "react-router-dom";

class Search extends Component {
	state = {
		search: ""
	};

	handleSubmit = event => {
		event.preventDefault();
		axios.get(`http://www.omdbapi.com/?t=${this.state.search}&apikey=a922c771`).then(response => {
			response.data.Response === "True" ? this.goToDetails(response.data) : this.props.history.push(`/notfound`);
		});
	};

	handleChange = event => {
		this.setState({ search: event.target.value });
	};

	getRandom = () => {
		const random = "tt01" + (Math.floor(Math.random() * 90000) + 10000);
		axios.get(`http://www.omdbapi.com/?i=${random}&apikey=a922c771`).then(response => {
			response.data.Response === "True"
				? this.props.history.push(`/movie/${response.data.imdbID}`, response.data)
				: this.props.history.push(`/notfound`);
		});
	};

	goToDetails = movie => {
		axios
			.get(
				`http://api.themoviedb.org/3/find/${movie.imdbID}?api_key=bd7f06e8aaf8aa4533843303ea6f299b&external_source=imdb_id`
			)
			.then(response => {
				if (!response.data.movie_results.length) {
					this.props.history.push(`/notfound`);
					return;
				}
				const movieId = response.data.movie_results[0].id;
				axios
					.get(
						`https://api.themoviedb.org/3/movie/${movieId}?api_key=bd7f06e8aaf8aa4533843303ea6f299b&append_to_response=videos`
					)
					.then(response => {
						if (!response.data.videos.results.length) {
							this.props.history.push(`/movie/${movie.imdbID}`, movie);
							return;
						}
						const trailer = response.data.videos.results[0].key;
						movie.trailer = trailer;
						this.props.history.push(`/movie/${movie.imdbID}`, movie);
					});
			});
	};

	render() {
		return (
			<div className="search-body">
				<div className="page-title">
					<form onSubmit={this.handleSubmit}>
						<TextField
							name="searchText"
							fullWidth={true}
							onChange={this.handleChange}
							value={this.state.search}
							type="text"
							placeholder="Search a movie by title ..."
						/>
					</form>
					<div>
						<RaisedButton
							fullWidth={true}
							primary={true}
							label="Or choose a random one!"
							onClick={() => this.getRandom()}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default withRouter(Search);
