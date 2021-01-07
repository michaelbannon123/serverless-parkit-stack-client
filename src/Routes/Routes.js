import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../containers/Home";
import NotFound from "../containers/NotFound";
import Login from "../containers/Login";
import Signup from "../containers/Signup";
import NewListing from "../containers/NewListing";
import Listings from "../containers/Listings";
import Settings from "../containers/Settings";
import AuthenticatedRoute from "../components/AuthenticatedRoute";
import UnauthenticatedRoute from "../components/UnauthenticatedRoute";

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <UnauthenticatedRoute exact path="/login">
                <Login />
            </UnauthenticatedRoute>
            {/* Finally, catch all unmatched routes */}
            <Route>
            <UnauthenticatedRoute exact path="/signup">
                <Signup />
            </UnauthenticatedRoute>
            <AuthenticatedRoute exact path="/settings">
                <Settings />
            </AuthenticatedRoute>
            <AuthenticatedRoute exact path="/rentals/new">
                <NewListing />
            </AuthenticatedRoute>
            <AuthenticatedRoute exact path="/rentals/:id">
                <Listings />
            </AuthenticatedRoute>
                <NotFound />
            </Route>
        </Switch>
    );
}