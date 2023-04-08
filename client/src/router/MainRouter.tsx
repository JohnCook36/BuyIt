import {Route, Routes} from "react-router-dom";
import {DefaultPage, NotFoundPage, SignUpPage} from "../pages";
import React from "react";
import {ROUTES} from "./routes";
import SignInPage from "../pages/signIn";


export function MainRouter() {

    return (
        <Routes>
            <Route path={ROUTES.public.root} element={<DefaultPage />}/>
            <Route path={ROUTES.public.signIn} element={<SignInPage />}/>
            <Route path={ROUTES.public.signUp} element={<SignUpPage />}/>
            <Route path='*' element={<NotFoundPage />}/> 
        </Routes>
    )
}