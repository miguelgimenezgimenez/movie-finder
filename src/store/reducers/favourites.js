export const favourites = (state = [], action) => {
	switch (action.type) {
		case "ADD_TO_FAVS":
			const duplicated = state.filter(movie => movie.imdbID === action.content.imdbID);
			if (duplicated.length) return state;
			const newState = [...state, action.content];
			return newState;
		default:
			return state;
	}
};
