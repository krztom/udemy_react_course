import React from "react";

const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>Username: {props.userName}</p>
        </div>
    );
};

export default userOutput;

