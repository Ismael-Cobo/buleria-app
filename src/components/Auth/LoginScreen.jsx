import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { startLogin, startLoginWithGoogle } from "../../action/auth"
import { useForm } from "../../hooks/useForm"

export const LoginScreen = () => {

    const dispatch = useDispatch()
    
    const { loading } = useSelector( state => state.ui)
    

    const [ formValues, handleInputChange ] = useForm({
        loginEmail: 'i@i2.com',
        loginPassword: '123456'
    })

    const { loginEmail, loginPassword } = formValues

    const handleSubmit = (e) => {
        e.preventDefault()

        dispatch(startLogin(loginEmail, loginPassword))
    }

    const handleLoginWithGoogle = () => {
        dispatch(startLoginWithGoogle())
    }

    return (
        <div className='auth__form'>
            <h3 className='auth__title'>Login</h3>
            <form 
                className='auth__form__content'
                onSubmit={handleSubmit}
            >

                <input 
                    type="text" 
                    placeholder='email' 
                    name='loginEmail'
                    value={loginEmail}
                    onChange={handleInputChange}
                />


                <input 
                    type="password" 
                    placeholder='password' 
                    name='loginPassword' 
                    value={loginPassword}
                    onChange={handleInputChange}
                />


                <input type="submit" disabled={loading} value="Entrar" className='auth__btn__submit' />
                <div>
                    <div
                        className="google-btn"
                        onClick={handleLoginWithGoogle}
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>
            </form>
            <Link className="auth__redirect__link" to='/auth/register'>Create new account</Link>
        </div>
    )
}
