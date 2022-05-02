import { useEffect, useState } from "react";
import {
    BrowserRouter as Router,
    Switch
} from "react-router-dom";
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useDispatch } from "react-redux";

import { JournalScreen } from "../JournalScreen";
import { LoadingScreen } from "../components/loadingScreen/LoadingScreen";
import { AuthRouter } from "./AuthRouter";
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";

import { login } from "../action/auth";
import { startLoadAllNotes } from "../action/notes";

export const AppRouter = () => {

    const dispatch = useDispatch()

    const [isLoading, setIsLoading] = useState(true)

    const [isAuthenticated, setIsAuthenticated] = useState(false)

    useEffect(() => {
        
        const auth = getAuth()
        onAuthStateChanged( auth, (user) => {

            if(user?.uid) {
                const { displayName, uid } = user
                dispatch(login(uid, displayName)) 
                dispatch(startLoadAllNotes())
                setIsAuthenticated(true) 
            } else {
                setIsAuthenticated(false)
            }

            setIsLoading(false)

        })

    }, [])


    if( isLoading ) {
        return <LoadingScreen />
    }
    


    return (
        <Router>
            <Switch>
                <PublicRoutes path='/auth' component={AuthRouter} islogedIn={isAuthenticated} />
                <PrivateRoutes path='/' component={JournalScreen} exact islogedIn={isAuthenticated} />
            </Switch>
        </Router>
    )
}
