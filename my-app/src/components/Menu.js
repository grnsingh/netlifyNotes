import React from 'react'
import Note from './Note'

export default function Menu() {
  return (
    <div className="columns">
    <div className="column is-one-fifth is hidden"><aside className="menu">
    <p className="menu-label has-text-centered">
      General
    </p>
    <ul className="menu-list has-text-centered">
      <li><a>Dashboard</a></li>
      <li><a>Customers</a></li>
    </ul>
    </aside>
    
    </div>
    </div>
    
  )
}
