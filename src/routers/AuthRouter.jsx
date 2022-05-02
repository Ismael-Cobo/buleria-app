import { Route, Switch, Redirect } from 'react-router-dom'

import { LoginScreen } from '../components/Auth/LoginScreen'
import { RegisterScreen } from '../components/Auth/RegisterScreen'

export const AuthRouter = () => {
  return (
    <div className='auth__main'>
      <div className='auth__content'>
        <Switch>
          <Route path='/auth/login' component={LoginScreen} exact />
          <Route path='/auth/register' component={RegisterScreen} exact />
          <Redirect to='/auth/login' />
        </Switch>
      </div>
    </div>
  )
}
