import React from 'react'

const ContentCardBody = ({ className, children }) => {
  return(
    <div className="card-body content-card-body">
      <div className={`container ${className}`}>
        { children }
      </div>
    </div>
  );
}

export default ContentCardBody