import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layaut from "@containers/Layaut";
import Login from "@pages/Login";
import RecoveryPassword from "@pages/RecoveryPassword";
import Home from "@pages/Home";
import NotFound from "@pages/NotFound";
import SendEmail from "@pages/SendEmail";
import NewPassword from "@pages/NewPassword";
import MyAccount from "@pages/MyAccount";
import CreateAccount from "@pages/CreateAccount";
import Checkout from "@pages/Checkout";
import Orders from "@pages/Orders";
import AppContext from "@context/AppContext";
import useInitialState from "@hooks/useInitialState";
import '@styles/global.css';

const App = () => {
    const initialState = useInitialState();

    return (
        <AppContext.Provider value={initialState}>
            <BrowserRouter>
                <Layaut>
                    <Routes>
                            <Route exact path="/" element={<Home />} />
                            <Route exact path="/login" element={<Login />} />
                            <Route exact path="/recovery-password" element={<RecoveryPassword />} />
                            <Route exact path="/send-email" component={SendEmail} />
                            <Route exact path="/new-password" component={NewPassword} />
                            <Route exact path="/account" component={MyAccount} />
                            <Route exact path="/signup" component={CreateAccount} />
                            <Route exact path="/checkout" component={Checkout} />
                            <Route exact path="/orders" component={Orders} />
                            <Route path="*" element={<NotFound />} />
                    </Routes>
                </Layaut>
            </BrowserRouter>
        </AppContext.Provider>
    );
}

export {App};