import React from 'react'
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Home from '../components/Home/Home'
import Logout from '../components/Logout/Logout'
import Productdetail from '../components/ProductDetails/Productdetail'

function RoutesLayout() {
  return (
   <>
   <Router>
    <Header />
    <Routes>
        <Route path ='/' element={<Home />} />
        <Route path ='/logout' element={<Logout />} />
        <Route path ='/product/:id' element={<Productdetail />} />
        <Route path ='/' element={<Home />} />
        





    </Routes>

<Footer />
   </Router>
   
   </>
  )
}

export default RoutesLayout