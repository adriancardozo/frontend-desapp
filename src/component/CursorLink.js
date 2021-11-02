import React from 'react'
import '../styles/CursorLink.css'

const CursorLink = ({ className, onClick, children }) => <div {...(onClick ? { onClick } : {})} className={`cursor-link ${className ? className : ""}`}>{children}</div>

export default CursorLink