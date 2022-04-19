import React, { useContext, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { MainPage, LoginPage, RegisterPage } from './page';
import AuthAdmin from './context/AuthAdmin';
const Routes = () => {
    const { loggedIn, getLoggedIn } = useContext(AuthAdmin);
    useEffect(() => {
        getLoggedIn();

    }, [])

    return (
        <Router>


            <>
                <Switch>
                    <Route path="/register">
                        <RegisterPage />
                    </Route>
                    <Route path="/login">
                        <LoginPage />
                    </Route>
                </Switch>
            </>
            {loggedIn === true && (

                <>
                    <Switch>
                        <Route path="/dashboard">
                            <MainPage />
                        </Route>
                        <Route path="/tugasManagement">
                            <MainPage />
                        </Route>
                        <Route path="/create_tugas">
                            <MainPage />
                        </Route>
                        <Route path="/editTugas/:id">
                            <MainPage />
                        </Route>
                        <Route path="/pendapatan">
                            <MainPage />
                        </Route>
                        <Route path="/topup-user">
                            <MainPage />
                        </Route>

                    </Switch>
                </>
            )}
            <Redirect from='*' to={loggedIn === true ? '/dashboard' : '/login'} />
        </Router>
    )
}

export default Routes
