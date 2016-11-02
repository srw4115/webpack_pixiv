import fetch from "isomorphic-fetch"


export function findPixivList() {
    return fetchData("/pixiv");
};

function fetchData(url) {
    return function (dispatch) {
        return fetch(url)
            .then(
                (response) => {
                    return response.json()
                }
            )
            .then(
                (json) => {
                    return dispatch({ type: "POST_SUCCESS", data: json })
                }
            )
    }
};
