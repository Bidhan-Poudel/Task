import React from 'react'

export const ProductCard = ({product}) => {
  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow-sm ">
      <a href="#">
        <img className="rounded-t-lg w-full h-52" src={product.image} width={"100%"} alt="product image" />
      </a>
      <div className="px-5 py-5">
        <a href="#">
          <h5 className="text-sm font-semibold tracking-tight text-gray-900 ">{product.name}</h5>
        </a>
        <div className="flex items-center justify-between ">
          <span className="text-lg font-bold text-gray-900 ">$599</span>
          <div className="flex items-center ">
            <div className="flex items-center space-x-1 rtl:space-x-reverse">
              <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>

            </div>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm ">5.0</span>
          </div>
        </div>

      </div>
    </div>
  )
}
