import React from "react"
import { connect } from "react-redux"
import { getPixivImage } from "../actions/fetchData.action.js"

class UserIcon extends React.Component {

    componentDidMount() {

        let { data, iconData, setIcon } = this.props;

        getPixivImage(data.profile_img).then((data) => {

            const isMounted = this.updater.isMounted(this);

            if (data && isMounted) {
                this.setState({ icon: data });
            }
            
        });
    };

    render() {

        let img = null;

        let icon = this.state && this.state.icon;

        if (icon) {
            img = (<img src={icon} />);
        }

        return img;
    };
}

export default UserIcon;
