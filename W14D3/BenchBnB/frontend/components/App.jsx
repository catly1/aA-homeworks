import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import { Route } from 'react-router-dom';
import LoginFormContainer from "../components/session/login_form_container"
import SignupFormContainer from "../components/session/signup_form_container" 
import SearchContainer from "../components/search/search_container"
import {AuthRoute} from "../util/route_util"
import BenchFormContainer from "./bench/bench_form_container";

const App = () => (
    <div>
        <header>
            <h1>Bench BnB</h1>
            <GreetingContainer />
        </header>

        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
        <Route exact path="/" component={SearchContainer} />
        <Route path="/benches/new" component={BenchFormContainer} />
    </div>
);

export default App;