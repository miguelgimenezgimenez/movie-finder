import React, { Component } from "react";
import { connect } from "react-redux";
import { add } from "../store/actionCreators/add";
import Header from "./Header.jsx";
import Video from "./Video.jsx";
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from "material-ui/Card";
import RaisedButton from "material-ui/RaisedButton";
import Snackbar from "material-ui/Snackbar";
import pic from "../images/notFound.jpg";

class Movie extends Component {
  state = {
    videoOpen: false,
    snackbarOpen: false
  };

  handleOpen = () => {
    this.setState({ videoOpen: true, snackbarOpen: false });
  };

  handleClose = () => {
    this.setState({ videoOpen: false });
  };

  addToFavs = movie => {
    this.props.dispatch(add(movie));
    this.setState({ snackbarOpen: true });
  };

  render() {
    const movie = this.props.location.state;
    return (
      <div>
        <Header />
        <Video open={this.state.videoOpen} close={this.handleClose} movie={movie} />
        <div className="movie-details">
          <Card>
            <CardHeader title={movie.Title} subtitle={movie.Genre} />
            <CardActions>
              <RaisedButton primary={true} label="Add to favourites" onClick={() => this.addToFavs(movie)} />
              {movie.trailer ? <RaisedButton primary={true} label="Watch Trailer" onClick={this.handleOpen} /> : null}
            </CardActions>
            <CardMedia overlay={<CardTitle title={movie.Director} subtitle={movie.imdbRating} />}>
              <img
                src={movie.Poster === "N/A" ? pic : movie.Poster}
                alt={`Poster for ${movie.Title}`}
                style={{
                  height: "600px"
                }}
              />
            </CardMedia>
            <CardTitle title="Actors" subtitle={movie.Actors} />
            <CardText>
              Plot: {movie.Plot}
            </CardText>
          </Card>
        </div>
        <Snackbar open={this.state.snackbarOpen} message="Movie added to favourites!" autoHideDuration={2000} />
      </div>
    );
  }
}

export default connect()(Movie);
