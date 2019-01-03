import React from "react";
import Routers from "./Routers.js";
import { Header } from "./Header/Header.js";

export class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Routers />
      </div>
    );
  }
}
