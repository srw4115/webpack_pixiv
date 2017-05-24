const AppReducer = (state = {}, action) => {
    switch (action.type) {
    case "SEARCH_LIST":

        if (state.contents) {

            let list = [];

            action.list.contents.forEach((elem) => {

                var check = state.contents.filter((e) => {
                    return e.illust_id == elem.illust_id
                });

                if (!check.length) {
                    list.push(elem);
                }
            });

            action.list.contents = state.contents.concat(list);
        }

        action.list.contents.map((elem) => {
            elem.profile_img = elem.profile_img.replace(/https.*?\w\//g, '/userIcon/');
            elem.url_path = elem.url.replace(/https.*?\w\//g, '/detailImage/');
            return elem;
        });

        state = action.list;

        return state
    default:
        return state
    }
};

export default AppReducer
