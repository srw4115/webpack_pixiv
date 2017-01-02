import React from "react"
import UserIcon from "./userIcon.js"
import { browserHistory, Link } from 'react-router'


class Image extends React.Component {

    showDetail() {
        browserHistory.push('/imageDetail');
    }

    render() {

        const { data } = this.props;
        const url = "/imageDetail/" +  encodeURIComponent(data.url) + "/count/" + data.illust_page_count;

        return (
            <div className="pixiv-list-item" data-id={data.illust_id} data-count={data.illust_page_count}>
                <div className="imageContainer">
                    <Link  name={data.illust_id} to={url}>
                        <img src={data.url}/>
                    </Link>
                    <p>{data.title}</p>
                </div>
                <hr/>
                <div className="itemInfo">
                    <UserIcon className="icon" data={data}/>
                    <span className="userName">{data.user_name}</span>
                </div>
            </div>
        )
    }
};

export default Image
