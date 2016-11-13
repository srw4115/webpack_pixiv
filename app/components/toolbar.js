import React from "react"
import { connect } from "react-redux"
import { findPixivList } from "../actions/fetchData.action.js"


class Toolbar extends React.Component {

    componentDidMount() {

        const { dispatchSearchList } = this.props;

        dispatchSearchList();

        this.autoPaging();
    }

    autoPaging() {
        window.onscroll = () => {
            const bodyBounding = document.body.getBoundingClientRect();
            const { dispatchSearchList, data } = this.props;

            if (!data.next) return;

            if ((bodyBounding.height - window.scrollY - window.innerHeight) <= 5) {
                dispatchSearchList(data.next);
            }

        }
    }

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


let isFetching = false;
const mapDispatchToProps = (dispatch) => ({
    "dispatchSearchList": (page) => {
        if (isFetching) return;
        isFetching = true;
        dispatch(findPixivList(page)).then((response) => {
            dispatch({ type: "SEARCH_LIST", list: response.data })
            isFetching = false;
        })
    }
});

const mapStateToProps = (state) => ({
    data: state.pixivList
});

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);
