import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { v4 } from 'uuid'
import validator from 'validator'

import { addNotification } from '../../action/notification'
import { useForm } from '../../hooks/useForm'
import { types } from '../../constant/types'
import { startRegisterWithEmailNamePassword } from '../../action/auth'

export const RegisterScreen = () => {

    const dispatch = useDispatch()

    const [,setalertState] = useState(false)

    const [formvalues, handleInputChange] = useForm({
        registerName: '',
        registerEmail: '',
        registerPassword: '',
        registerConfirmPassword: '',
    })

    const { registerName, registerEmail, registerPassword, registerConfirmPassword } = formvalues

    const handleSubmit = (e) => {
        e.preventDefault()
        if(isFormValid()) {
            dispatch(startRegisterWithEmailNamePassword(registerEmail, registerPassword, registerName))
        }
    }

    const isFormValid = () => {

        if (validator.isEmpty(registerName)) {
            setalertState(true)
            dispatch(addNotification(v4(), 'Invalid name', types.error))
            return false
        } else if (!validator.isEmail(registerEmail)) {
            dispatch(addNotification(v4(), 'Invalid email', types.error))
            setalertState(true)

            return false
        } else if (registerPassword.trim().length <= 5) {
            setalertState(true)
            dispatch(addNotification(v4(), 'Password must be at leat 6 characters', types.error))
            return false
        } else if ((!validator.equals(registerPassword, registerConfirmPassword))) {
            setalertState(true)
            dispatch(addNotification(v4(), 'Passwords does not match', types.error))
            return false
        }
        setalertState(false)

        return true;
    }



    return (
        <div className='auth__form'>
            <h3 className='auth__title'>Register</h3>
            <form
                className='auth__form__content'
                onSubmit={handleSubmit}
            >
                <input
                    type="text"
                    placeholder='name'
                    name='registerName'
                    value={registerName}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    placeholder='email'
                    name='registerEmail'
                    value={registerEmail}
                    onChange={handleInputChange}
                />
                <input
                    type="password"
                    placeholder='password'
                    name='registerPassword'
                    value={registerPassword}
                    onChange={handleInputChange}
                />
                <input
                    type="password"
                    placeholder='confirm 
                    password'
                    name='registerConfirmPassword'
                    value={registerConfirmPassword}
                    onChange={handleInputChange}
                />
                <input type="submit" value="Registrarse" className='auth__btn__submit' />
            </form>
            <Link className="auth__redirect__link" to='/auth/login'>Already registered?</Link>
        </div>
    )
}
