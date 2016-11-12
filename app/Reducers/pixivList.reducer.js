const AppReducer = (state = {}, action) => {
    switch (action.type) {
        case "SEARCH_LIST":
            return state = action.list
        default:
            return state
    }
};

export default AppReducer