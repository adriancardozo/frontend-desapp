import React from "react"

const ContentCardHeader = ({ className, children }) => {
    return(
        <div className="card-header">
            <div className={`container ${className}`}>
                { children }
            </div>
        </div>
    );
}

export default ContentCardHeader