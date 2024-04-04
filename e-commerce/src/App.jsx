import React from 'react'
import Nevigation from './customer/nevigation/Nevigation'
import HomePage from './customer/pages/homePage/HomePage'
import Footer from './customer/components/Footer/Footer'
import Product from './customer/components/Product/Product'

const App = () => {
  return (
    <div>
      <Nevigation></Nevigation>
      <div>
        {/* <HomePage></HomePage> */}
        <Product/>
      </div>
      <div>
        <Footer/>
      </div>
      
    </div>
  )
}

export default App