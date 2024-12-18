import React from 'react';
import Image from 'next/image';

const Cart = () => {
  return (
    <div>
        <div className='lg:w-7/12 mx-auto lg:space-y-12 space-y-8 '>
          {
            Array(12).fill(0).map((item , index) => {
                <div key={index} className='bg-white rounded-lg p-4 shadow-lg border border-gray-200 flex gap-6 '>
                    <Image
                      src="/signup.jpg"
                      width={100}
                      height={80}
                    />
                    <div>
                        <h1 className='text-lg font-semibold capitalize'>My First Product</h1>
                        <div className='space-x-3'>
                            <label>₹9000</label>
                            <del>₹11000</del>
                            <label>{50% off}</label>
                        </div>
                        <button className='bg-blue-600 px-4 py-2 rounded text-white mt-2'>Remove from cart</button>
                    </div>   
                </div>   
            })
          }
          <button className='bg-rose-600 text-white w-full py-3 rounded'>Buy Now</button>
        </div>
    </div>
  )
}

export default Cart;


