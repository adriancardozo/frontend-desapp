import React from 'react'
import '../styles/ContentCard.css'

const ContentCard = ({ className, onClick, children }) => {
  return(
    <div className={`card content-card ${className}`}  { ...(onClick ? { onClick } : {}) }>
      { children }
    </div>
  );
}

export default ContentCard