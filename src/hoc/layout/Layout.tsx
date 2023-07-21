import { Component } from "react";

import "./layout.module.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

export default class Layout extends Component<any, any> {
  render() {
    return (
      <div>
        <Header />
        <div className="main">{this.props.children}</div>
        <Footer />
      </div>
    );
  }
}
