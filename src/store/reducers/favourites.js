export const favourites = (state = [], action) => {
	switch (action.type) {
		case "ADD_TO_FAVS":
			const newState = [...state, action.content];
			return newState;
		default:
			return state;
	}
};
