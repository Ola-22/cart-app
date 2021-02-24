import React from "react";
import { Product } from "../Products";
import { Details } from "../Details";
import { Cart } from "../Cart";
import { Payment } from "../Payment";
import { Route } from "react-router-dom";

export function Section() {
  return (
    <section>
      <Route path="/product" component={Product} exact />
      <Route path="/product/:id" component={Details} />
      <Route path="/cart" component={Cart} />
      <Route path="/payment" component={Payment} />
    </section>
  );
}
