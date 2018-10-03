import React from 'react'
import {Route, Switch} from 'react-router-dom'
import ProductsContainer from './components/products/ProductsContainer';
import LoginContainer from './components/LoginContainer';
import FormContainer from './components/forms/FormContainer';
import ProductDetail from './components/products/ProductDetail';


const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={ProductsContainer} />
            <Route path="/login" component={LoginContainer} />
            <Route path="/new" component={FormContainer} />
            <Route path="/detail/:id" component={ProductDetail} />
        </Switch>
    )
}

export default Routes