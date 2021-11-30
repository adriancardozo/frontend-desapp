import React from "react"

const ComponentList = ({ emptyMessage, componentList }) => {
    return(
        !componentList || componentList.length === 0 ? 
        <div className="row justify-content-center">
            <div className="col-md-auto loading-animation-content-col">
                <div className="sr-only text-dark">{emptyMessage}</div>
            </div>
        </div> : 
        componentList
    );
}

export default ComponentList