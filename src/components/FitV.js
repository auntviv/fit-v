import React from "react"
import { Route, Redirect } from "react-router-dom"
import { ApplicationViews } from "./ApplicationViews"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"

export const FitV = () => (
    <>
        <Route render={() => {
            if (localStorage.getItem("lu_token")) {
                return <>
                    <Route>
                        <ApplicationViews />
                    </Route>
                </>
            } else {
                return <Redirect to="/login" />
            }
        }} />

        <Route path="/login">
            <Login />
        </Route>

        <Route path="/register">
            <Register />
        </Route>

    </>
)
