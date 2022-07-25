import React from 'react';

const Grid = props => {
    return (
        <div classNameNameName='grid'>
          <nav className="navbar navbar-expand-sm">
  <div className="container">
    <div className="collapse navbar-collapse" id="collapsibleNavbar">
      <ul className="navbar-nav">
        <li className="nav-item">
           
          <a className="nav-link1" href="#"><i className="bi bi-house-door-fill bt-icons"></i>Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link1" href="#"><i class="bi bi-person-rolodex bt-icons"></i>Contact</a>
        </li>
        <li className="nav-item">
          <a className="nav-link1" href="#"><i class="bi bi-geo-alt bt-icons"></i>Location</a>
        </li>    
        <li className="nav-item">
          <a className="nav-link1" href="#"><i class="bi bi-building bt-icons"></i>Address</a>
        </li>    
        <li className="nav-item">
          <a className="nav-link1" href="#"><i class="bi bi-file-person bt-icons"></i>About</a>
        </li>    
      </ul>
      <div>
                    
    <button className="btn-nav">Get Demo</button>
    </div>
    </div>
  </div>
  
</nav>

        </div>
    );
};

export default Grid;