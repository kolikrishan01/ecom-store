import React, { useState } from 'react'
import Bannner from '../Bannner'
import Header from '../Header_Footer/Header'
import Cart from '../Cart'
import Product from '../Product'
import SingleProduct from '../SingleProduct'

const Home = () => {
  const [open, setOpen] = useState(false)
  return (
    <div>
    <Header setOpen={setOpen}/>
      <Bannner />
      <Cart setOpen={setOpen} open={open}/>
      <Product />
      <SingleProduct />
    </div>
  )
}

export default Home
