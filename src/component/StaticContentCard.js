import React from 'react'
import ContentCard from './ContentCard.js'
import '../styles/StaticContentCard.css'
import ContentCardBody from './ContentCardBody.js'

const StaticContentCard = ({ className, children }) => {
  return (
    <ContentCard className={`static-content-card ${className}`}>
      <ContentCardBody>
        <div className="row justify-content-md-center">
          { children }
        </div>
      </ContentCardBody>
    </ContentCard>
  );
}

export default StaticContentCard