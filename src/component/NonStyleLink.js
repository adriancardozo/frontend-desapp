import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/NonStyleLink.css'

const NonStyleLink = ({ to, className, onClick, children }) => <Link className={`non-style-link ${className}`} { ...{ to } } { ...(onClick ? { onClick } : {} ) } >{ children }</Link>

export default NonStyleLink