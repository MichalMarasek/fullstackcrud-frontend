import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>

<nav className="navbar navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand">Spring Backend + React Frontend Book Library Application</a>
    <Link className='btn btn-success btn-outline-warning' to="/addbook">Add book</Link>
  </div>
</nav>


    </div>
  )
}
