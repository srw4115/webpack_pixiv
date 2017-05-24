import React from "react"
import ReactDOM from "react-dom"
import { Router, Route, Link } from 'react-router'
import { connect } from "react-redux"

class ImageDetail extends React.Component {
    componentWillMount() {
        const params = this.props.router.params;
        const illustId = params.illustId;
        const illustList = this.props.list;
        const illust = illustList.contents.filter(function (item) {
            return item.illust_id == illustId;
        });

        this.setState({ illust: illust[0]});
    }

    render() {
        const illust = this.state.illust;
        
        if(!illust) return null;

        return (
            <div>
                <img src={illust.url_path} />
                <Link to="/">back</Link>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    list: state.pixivList
});

const content = connect(mapStateToProps)(ImageDetail);

export default content
