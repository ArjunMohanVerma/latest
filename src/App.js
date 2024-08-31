import Home from "./pages/Home/Home"
import Services from "./pages/Services/Services"
import Contact from "./pages/Contact/Contact"
import About from "./pages/About/About"
import Blogs from "./pages/Blog/Blogs"
import Footer from "./pages/Footer/Footer"
import ShopProducts from"./pages/ShopProducts"
import { Route, Routes } from "react-router-dom"
import Nav from "./pages/Navbar//Nav"
import Login from "./pages/Login/Login"
import Signup from "./pages/Login/Signup"
import Details from "./pages/Details/Details"



function App() {
  return (
    <>
      <div className="container">
        <Nav/>
        <Routes>
          <Route exact path="/" element={<Home />} /> 
          <Route exact path="/home" element={<Home/>}/> 
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/blogs" element={<Blogs />} /> 
          {/* <Route path="/ShopProducts" element={<ShopProducts />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/details" element={<Details />} />
        </Routes>
        <Footer/>
      </div>
    </>
  )
}

export default App

