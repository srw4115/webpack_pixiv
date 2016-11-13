import React from "react"
import { Provider } from "react-redux"
import ImageBox from "../components/imageBox.js"

class pixivList extends React.Component {

    render() {

        let { list } = this.props;

        if (!list.contents) return null;

        const listNodes = list.contents.map((data) => {
            return (
                <ImageBox data={data} key={data.illust_id}/>
            );
        });

        return (
            <div>
                <div className="pixivList">
                    {listNodes}
                </div>
            </div>
        );
    }
};

export default pixivList
