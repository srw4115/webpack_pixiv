import React from "react"
import { connect } from "react-redux"

class UserIcon extends React.Component {

    render() {

        const { data } = this.props;

        return (<img src={data.profile_img} />);
    };
}

export default UserIcon;
