import React from 'react'

function Breadcrumb() {
  return (
    

<nav aria-label="breadcrumb">
<div className="h5 text-danger border-bottom border-danger">
  <ol className="breadcrumb">
    <li className="breadcrumb-item"><a href="#">Dashboards</a></li>
    <li className="breadcrumb-item active" aria-current="page">
      Dashboard
    </li>
  </ol>
</div>
</nav>
  )
}

export default Breadcrumb