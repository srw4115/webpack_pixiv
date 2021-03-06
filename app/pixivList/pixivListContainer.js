import React from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux"

import pixivList from "./index.js"

const mapStateToProps = (state) => ({
    list: state.pixivList
});

const content = connect(mapStateToProps)(pixivList);

export default content
