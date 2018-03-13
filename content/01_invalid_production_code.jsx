import React from "react"
import PropTypes from "prop-types";

//
//
//
//

const ConnectionStatus = ({isOffline}) =>
    !isOffline
        ? <div className="offlineMessage">No internet…</div>
        : <div>OK</div>;

//
//
//
//

ConnectionStatus.propTypes = {
    isOffline: PropTypes.bool.isRequired,
};

export default ConnectionStatus;