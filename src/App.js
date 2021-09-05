import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Carousel } from "./components/carousel/carousel"
import { Header } from "./components/header/header"
import { Footer } from "./components/footer/footer"
import { Gallery } from './components/gallery/gallery'
import { Productpage } from './components/productPage/productPage'
import { ProductsWithFilter } from './components/productswithfilter/ProductsWithFilter'
import { Cart } from './components/cart/cart'
import { Profile } from './components/profile/profile'
import { Orderspage } from './components/orderspage/orderspage'
import { OrderDetails } from './components/orderdetails/orderDetails'
import { Categories } from "./components/categories/categories";

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact render={() =>
            <>
              <Carousel />
              <Gallery />
              <Categories />
            </>
          } />
          <Route path="/products" exact component={ProductsWithFilter} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/orderpage" exact component={Orderspage} />
          <Route path="/orderdetails" exact component={OrderDetails} />
          <Route exact path="/products/:type/:id" component={Productpage} />
          <Route exact path="/products/:type" component={ProductsWithFilter} />
          <Route exact path="/cart" component={() =>
            <>
              <Cart />
            </>
          } />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
