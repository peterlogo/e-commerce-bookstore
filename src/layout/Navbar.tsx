import React from "react"
import { NavLink } from "react-router-dom"

const activeStyle: React.CSSProperties = {
  color: "white",
  fontWeight: "bold",
}

const inActiveStyle: React.CSSProperties = {
  color: "white",
  fontWeight: "normal",
  fontSize: "14px",
}

export function Navbar(): JSX.Element {
  return (
    <nav className="bg-blue-600">
      <ul className="container mx-auto p-4 flex justify-start items-center space-x-6">
        <li>
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeStyle : inActiveStyle)}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/products"
            style={({ isActive }) => (isActive ? activeStyle : inActiveStyle)}
          >
            Products
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/cart"
            style={({ isActive }) => (isActive ? activeStyle : inActiveStyle)}
          >
            Cart
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
