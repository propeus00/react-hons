import React from "react";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import Layout from "./hoc/Layout/Layout";
import { Home } from "./containers/Home/Home";
import { SignUp } from "./containers/SignUp/SignUp";
import { AddProject } from "./containers/AddProject/AddProject";
import { UserProfile } from "./containers/UserProfile/UserProfile";
import { UserSettings } from "./containers/UserSettings/UserSettings";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Layout>
        <Route path="/" exact component={Home}></Route>
        <Route path="/sign-up" exact component={SignUp}></Route>
        <Route path="/add-project" exact component={AddProject}></Route>
        <Route path="/user-profile" exact component={UserProfile}></Route>
        <Route path="/user-settings" exact component={UserSettings}></Route>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
