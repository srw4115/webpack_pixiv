const AppReducer = (state = {}, action) => {
    switch (action.type) {
    case "SEARCH_LIST":
        if (state.contents) {
            action.list.contents = state.contents.concat(action.list.contents);
        }

        state = action.list;

        return state
    default:
        return state
    }
};

export default AppReducer
