import React from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux"
import { findPixivList } from "../actions/fetchData.action.js"

import pixivList from "./index.js"

const mapStateToProps = (state) => ({
    list: state.pixivList
});

const mapDispatchToProps = (dispatch) => ({
    "dispatchSearchList": () => {
        dispatch(findPixivList()).then((response) => {
            dispatch({ type: "SEARCH_LIST", list: response.data })
        })
    }
});

const content = connect(mapStateToProps, mapDispatchToProps)(pixivList);

export default content
