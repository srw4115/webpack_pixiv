import React from "react"
import UserIcon from "./userIcon.js"

const Image = ({ data }) => {
    return (
        <div className="pixiv-list-item">
    		<img src={data.url} />
    		<p>{data.user.userName}</p>
    		<UserIcon data={data.user}/>
    	</div>
    )
};

export default Image
