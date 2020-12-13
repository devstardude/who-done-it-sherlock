import React from 'react';
import { NavLink } from 'react-router-dom';
import'./Navigation.css';

const Navigation = (props)=>{
    return (
      <nav className="navbar navbar-expand-lg navbar-dark Navbar" id="mainNav">
      <div className="container">
        <NavLink className="navbar-brand" to="/">Who Done It</NavLink>
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          Menu
          <i className="fa fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink className="nav-link mr-4" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/game">Game</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    );
};

export default Navigation ;