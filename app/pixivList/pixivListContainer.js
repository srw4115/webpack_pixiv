import React from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux"
import { findPixivList } from "../actions/fetchData.action.js"

import pixivList from "./index.js"

const mapStateToProps = (state) => ({
    list: state.pixivList
});

let isSearching = false;

const mapDispatchToProps = (dispatch) => ({
    "dispatchSearchList": (page) => {
        if (isSearching) return;

        isSearching = true;

        dispatch(findPixivList(page)).then((response) => {
            dispatch({ type: "SEARCH_LIST", list: response.data })
            isSearching = false;
        })
    }
});

const content = connect(mapStateToProps, mapDispatchToProps)(pixivList);

export default content
