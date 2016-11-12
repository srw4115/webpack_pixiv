import React from "react"
import UserIcon from "./userIcon.js"

const Image = ({ data }) => {
    return (
        <div className="pixiv-list-item">
    		<div className="imageContainer">
    			<img src={data.url} />
    			<p>{data.title}</p>
    		</div>
    		<hr/>
    		<div className="itemInfo">
	    		<UserIcon className="icon" data={data}/>
	    		<span className="userName">{data.user_name}</span>
    		</div>
    	</div>
    )
};

export default Image
