import React from 'react'
import { Redirect, Route } from 'react-router'
import PropTypes from 'prop-types'


export const PublicRoutes = ({
    islogedIn,
    component: Component,
    rest
}) => {
    return (
        <Route 
            { ...rest }
            component={ (props) =>(
                (!islogedIn)
                ? ( <Component { ...props } /> )
                : (<Redirect to='/' />)     
            )}
        
        />
    )
}

PublicRoutes.propTypes = {
    islogedIn:    PropTypes.bool.isRequired,
    component:          PropTypes.func.isRequired
}
