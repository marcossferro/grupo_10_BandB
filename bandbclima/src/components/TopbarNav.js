import React, { Component } from 'react';

class TopbarNav extends Component {

  render(){
	  return (
	<ul className="navbar-nav ml-auto">
		<li className="nav-item dropdown no-arrow mx-1">
			<a className="nav-link dropdown-toggle" href="/" id="alertsDropdown">
    			<i className="fas fa-bell fa-fw"></i>
	    		<span className="badge badge-danger badge-counter">3+</span>
			</a>
		</li>
		<li className="nav-item dropdown no-arrow mx-1">
			<a className="nav-link dropdown-toggle" href="/" id="messagesDropdown">
		    	<i className="fas fa-envelope fa-fw"></i>
				<span className="badge badge-danger badge-counter">7</span>
			</a>
		</li>

		<div className="topbar-divider d-none d-sm-block"></div>

			<li className="nav-item dropdown no-arrow">
				<a className="nav-link dropdown-toggle" href="/" id="userDropdown">
					<span className="mr-2 d-none d-lg-inline text-gray-600 small">Welcome Admin</span>
				</a>
			</li>

	</ul>
  );
}

}

export default TopbarNav;