import React from "react"
import UserIcon from "./userIcon.js"

const Image = ({ data }) => {
    return (
        <div className="pixiv-list-item">
    		<img src={data.url} />
    		<p>{data.user_name}</p>
    		<UserIcon data={data}/>
    	</div>
    )
};

export default Image
