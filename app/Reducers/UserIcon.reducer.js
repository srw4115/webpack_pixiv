const AppReducer = (state = null, action) => {
    switch (action.type) {
    case "SET_USER_ICON":
    	console.log(action.iconData);
        return state = action.iconData
    default:
        return state
    }
};

export default AppReducer
