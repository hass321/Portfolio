import React from 'react';
import '../../App.css';
import {NavLink} from 'react-router-dom';


const styles = {
  navlink: {
    padding: '5px',
    fontSize: '28px',
    textDecoration: 'none',
    color: 'black',
    transition: 'all .5ms'
  },
  activeNav: {
    color: 'yellowgreen'
  }
}

const Header = () => {
    return (
        <div className="header">
          <div className="row__flex">
            <div className="row__flex--1"></div>
            <div className="row__flex--2">
              <NavLink
                to="/" activeStyle={styles.navlink}
                exact
                activeStyle={styles.activeNav}
                style={styles.navlink}
              >Home</NavLink>
              <NavLink
                to="/about" 
                activeStyle={styles.activeNav}
                style={styles.navlink}
              >
              About</NavLink>
              <NavLink
                to="/projects"
                activeStyle={styles.activeNav}
                style={styles.navlink}
              >Projects</NavLink>
            </div>
          </div>
        </div>
    )
}

export default Header;