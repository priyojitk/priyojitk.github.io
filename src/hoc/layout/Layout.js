import React, { Component } from "react";

import "./layout.module.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

export default class Layout extends Component {
  state = {
    showNav: false,
  };

  toggleSideNav = (action) => {
    this.setState({
      showNav: action,
    });
  };

  render() {
    return (
      <div id="app">
        <Header
          showNav={this.state.showNav}
          onHideNav={() => {
            this.toggleSideNav(false);
          }}
          onOpenNav={() => {
            this.toggleSideNav(true);
          }}
        />
        <div className="main">{this.props.children}</div>
        <Footer />
      </div>
    );
  }
}
