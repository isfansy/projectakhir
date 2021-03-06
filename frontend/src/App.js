import React, { Component } from "react";
import "./App.css";
import Header from "./component/header";
import Footer from "./component/footer";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import NewArrival from "./pages/newarrival";
import Store from "./pages/store";
import Notfound from "./pages/notfound";
import Howtoorder from "./pages/howtoorder";
import Admin from "./pages/admin";
import AddProduct from "./component/addProduct";
import ProductCoffee from "./pages/productCoffee";
import Cart from "./pages/cart";
import Checkout from "./pages/checkout";

class App extends Component {
  state = {
    loading: true
  };
  componentDidMount() {
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    return (
      <div>
        <Switch>
          <Route exact path={"/"} component={Home} />
          <Route exact path={"/login"} component={Login} />
          <Route exact path={"/register"} component={Register} />
          <Route exact path={"/newarrival"} component={NewArrival} />
          <Route exact path={"/store"} component={Store} />
          <Route exact path={"/notfound"} component={Notfound} />
          <Route exact path={"/howtoorder"} component={Howtoorder} />
          <Route exact path={"/admin"} component={Admin} />
          <Route exact path={"/addproduct"} component={AddProduct} />
          <Route exact path={"/productcoffee"} component={ProductCoffee} />
          <Route exact path={"/cart"} component={Cart} />
          <Route exact path={"/checkout"} component={Checkout} />
        </Switch>
      </div>
    );
  }
}

export default App;
