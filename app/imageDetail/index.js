import React from "react"
import ReactDOM from "react-dom"
import { getPixivImage, fetchDetailImage } from "../actions/fetchData.action.js"
import { Router, Route, Link } from 'react-router'

class ImageDetail extends React.Component {
    componentDidMount() {

        var params = this.props.router.params;

        fetchDetailImage(params.url, params.count)
            .then((data) => {
            	if(data){
            		this.setState({ img: data });
            	}
            })
    }

    render() {

        return (
            <div>
				{this.state && this.state.img &&
					<img src={this.state.img} />
				}
        		<Link to="/">back</Link>
        	</div>
        );
    }
}

export default ImageDetail
