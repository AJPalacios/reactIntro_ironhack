import React, { Component } from 'react';
import './App.css';
import Routes from './Routes';
import { NavLink, withRouter } from 'react-router-dom'
import {Button} from 'antd'

class App extends Component {

  logOut = () => {
    localStorage.removeItem('user')
    this.props.history.push('/login')
  }

  render() {
    return (
      <div className="pollollon">

        <nav>
          <NavLink activeClassName="ihatemyboss" exact to="/">Inicio</NavLink>  
          <NavLink activeClassName="ihatemyboss" to="/login">Login</NavLink>  
          <NavLink activeClassName="ihatemyboss" to="/new">Nuevo produto</NavLink> 
          <Button type="dashed" onClick={this.logOut} >Cerrar sesión</Button> 
        </nav> 

        <Routes/>
      </div>
    );
  }
}

export default withRouter(App);
