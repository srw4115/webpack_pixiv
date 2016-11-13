import React from "react"
import { connect } from "react-redux"
import { findPixivList } from "../actions/fetchData.action.js"

class Toolbar extends React.Component {
	
    render() {
        const { data } = this.props;

        const content = (
            <div className="pixiv-list-toolbar">
        		<div className="toolbar_switch"></div>
        		<div className="toolbar_content">
        			<span>page: {data.page}</span>
        		</div>
        	</div>
        );

        return content;
    }
}

export default connect()(Toolbar);
