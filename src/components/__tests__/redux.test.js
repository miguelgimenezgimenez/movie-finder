import * as actions from "../../store/actionCreators/add";
import * as reducer from "../../store/reducers/favourites";

const movie = {
	Actors: "Mark Hamill, Harrison Ford, Carrie Fisher, Peter Cushing",
	Director: "George Lucas",
	Genre: "Action, Adventure, Fantasy",
	Plot:
		"Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a wookiee and two droids to save the galaxy from the Empire's world-destroying battle-station, while also attempting to rescue Princess Leia from the evil Darth Vader.",
	Poster:
		"https://images-na.ssl-images-amazon.com/images/M/MV5BYzQ2OTk4N2QtOGQwNy00MmI3LWEwNmEtOTk0OTY3NDk2MGJkL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg",
	Title: "Star Wars: Episode IV - A New Hope",
	imdbID: "tt0076759",
	trailer: "vZ734NWnAHA"
};

const movie2 = {
	Actors: "Tim Roth, Amanda Plummer, Laura Lovelace, John Travolta",
	Director: "Quentin Tarantino",
	Genre: "Crime, Drama",
	Plot:
		"The lives of two mob hit men, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
	Poster:
		"https://images-na.ssl-images-amazon.com/images/M/MV5BMTkxMTA5OTAzMl5BMl5BanBnXkFtZTgwNjA5MDc3NjE@._V1_SX300.jpg",
	Title: "Pulp Fiction",
	imdbID: "tt0110912",
	trailer: "s7EdQ4FqbhY"
};

describe("actions", () => {
	it("should create an action to add a movie at favs", () => {
		const expectedAction = {
			type: "ADD_TO_FAVS",
			content: movie
		};
		expect(actions.add(movie)).toEqual(expectedAction);
	});
});

describe("favourites reducer", () => {
	it("should return the initial state", () => {
		expect(reducer.favourites(undefined, {})).toEqual([]);
	});
	it("should handle a movie", () => {
		expect(reducer.favourites([], { type: "ADD_TO_FAVS", content: movie })).toEqual([movie]);
	});
	it("should handle a second movie", () => {
		expect(reducer.favourites([movie], { type: "ADD_TO_FAVS", content: movie2 })).toEqual([movie, movie2]);
	});
});
