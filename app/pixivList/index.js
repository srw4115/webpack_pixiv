import React from "react"
import { Provider } from "react-redux"
import ImageBox from "../components/imageBox.js"
import Toolbar from "../components/toolbar.js"

class pixivList extends React.Component {

    componentDidMount() {

        const { dispatchSearchList } = this.props;

        dispatchSearchList();

        this.autoPaging();
    }

    autoPaging() {
        window.onscroll = () => {
            const bodyBounding = document.body.getBoundingClientRect();
            const { dispatchSearchList, list } = this.props;

            if (!list.next) return;

            if ((bodyBounding.height - window.scrollY - window.innerHeight) <= 5) {
                dispatchSearchList(list.next);
            }

        }
    }


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
                <Toolbar data={list}/>
            </div>
        );
    }
};

export default pixivList
