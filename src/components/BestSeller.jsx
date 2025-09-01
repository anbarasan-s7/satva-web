import React from 'react'
import ProductCart from './ProductCart';
import { useAppContext } from '../context/AppContext';

const BestSeller = () => {
  const {products}=useAppContext();

  return (
    <div id='best-seller' className='mt-16'>
        <p className='text-2x md:text-3xl font-medium'>Best Sellers</p>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-6  lg:grid-cols-4 mt-6 sm:p-0'>
          {products.filter((product)=>product.inStock).slice(0,4).map((product,index)=>(
          <ProductCart key={index} product={product}/>)
          )}
            
        </div>
    </div>
  )
}

export default BestSeller;