import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { AppLayout } from "../layout";
import { Cart, Home, Item, Products } from "../pages";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<AppLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/product/:id" element={<Item />} />
      <Route path="/cart" element={<Cart />} />
    </Route>
  )
);
