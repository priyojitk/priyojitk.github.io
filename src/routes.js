import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./hoc/layout/Layout";

//COMPONENTS
import Home from "./components/home";
import Uuid from "./components/Uuid";
import NotFound from "./components/NotFound";

export default class Routes extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/uuid" exact component={Uuid} />
          <Route path="*" exact component={NotFound} />
        </Switch>
      </Layout>
    );
  }
}
