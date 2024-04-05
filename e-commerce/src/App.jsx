import React from 'react'
import Nevigation from './customer/nevigation/Nevigation'
import HomePage from './customer/pages/homePage/HomePage'
import Footer from './customer/components/Footer/Footer'
import Product from './customer/components/Product/Product'
import ProductDetails from './customer/components/ProductDetails/ProductDetails'
import Cart from './customer/components/Cart/Cart'
import Checkout from './customer/components/Checkout/Checkout'

const App = () => {
  return (
    <div>
      <Nevigation></Nevigation>
      <div>
        {/* <HomePage></HomePage> */}
        {/* <Product/> */}
        {/* <ProductDetails/> */}
        {/* <Cart/> */}
        <Checkout/>
      </div>
      <div>
        <Footer/>
      </div>
      
    </div>
  )
}

export default App