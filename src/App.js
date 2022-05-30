import React from "react"
import { Routes, Route } from "react-router-dom"
import "./styles.css"
import Header from "./components/Header"
import Cart from "./pages/Cart"
import Photos from "./pages/Photos"
import Favourites from "./pages/Favourites"

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Photos />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  )
}

export default App
