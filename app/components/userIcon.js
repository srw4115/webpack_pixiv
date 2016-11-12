import React from "react"
import { connect } from "react-redux"
import { getUserIcon } from "../actions/fetchData.action.js"

class UserIcon extends React.Component {

    componentWillMount() {
        this.imgUrl = null;
    };

    componentDidMount() {

        let { data, iconData, setIcon } = this.props;

        if (!iconData && !this.imgUrl) {
            setIcon(data, (icon) => {
                this.imgUrl = icon;
            });
        }
    };

    render() {
        let img = null;

        if (this.imgUrl) {
            img = (<img src={this.imgUrl} />);
        }

        return img;
    };
}


const mapStateToProps = (state, ownProps) => ({
    iconData: state.userIcon
});

const mapDispatchToProps = (dispatch) => ({
    "setIcon": (data, callback) => {
        dispatch(getUserIcon(data.profile_img)).then((response) => {
            callback(response.data);
            dispatch({
                type: "SET_USER_ICON",
                iconData: { id: data.user_id, icon: response.data }
            });
        });
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(UserIcon);
