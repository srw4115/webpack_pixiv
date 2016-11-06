import React from "react"
import { Provider } from "react-redux"
import ImageBox from "../components/imageBox.js"


class pixivList extends React.Component {

    componentDidMount() {

        let { dispatch, dispatchSearchList } = this.props;

        dispatchSearchList();
    }

    render() {

        let { list } = this.props;

        const listNodes = list.map((data) => {
            return (
                <ImageBox data={data} key={data.id}/>
            );
        });

        return (
            <div className="pixivList">
                {listNodes}
            </div>
        );
    }
};

export default pixivList
