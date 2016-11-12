import fetch from "isomorphic-fetch"

export function getUserIcon(link) {
    return fetchData("/userIcon?link=" + encodeURIComponent(link));
}

export function findPixivList() {
    return fetchData("/pixiv?page=1");
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
