import fetch from "isomorphic-fetch"

export function getPixivImage(link) {
    return fetchText("/downLoadImage?link=" + encodeURIComponent(link));
}

export function fetchDetailImage(url,count) {
    url = "/detailImage?link=" + url + "&count=" + count;
    return fetchText(url);
}

export function findPixivList(page) {
    page = page || 1;
    return fetchData("/pixiv?page=" + page);
};



function fetchText(url) {
    return fetch(url)
        .then(
            (response) => {
                return response.text();
            }
        );
}

function fetchJSON(url) {
    return fetch(url)
        .then(
            (response) => {
                return response.json()
            }
        );
}

function fetchData(url) {
    return function (dispatch) {
        return fetchJSON(url).then(
            (json) => {
                return dispatch({ type: "POST_SUCCESS", data: json })
            }
        )
    }
};
