import React from "react";

const SingleUser = ({ user }) => {
    const { fullName } = user;
    return (
        <div className="profile">
            <h3 class="name">{fullName}</h3>
        </div>
    );
};

export default SingleUser;
