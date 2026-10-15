import React from 'react'
import { useEffect,useState } from 'react'
import { NavLink } from 'react-router-dom';

export default function ProductListPage() {

const [products, setProducts] = useState([]);
const username = localStorage.getItem("username");

useEffect(() => {
    fetch("http://127.0.0.1:8000/products")
    .then(res => res.json())
    .then(setProducts)
    .catch(err => console.error("Failed to fetch products",err))
},[])
  return (

      <div className="min-h-screen flex flex-col">
    
  <header className="border-b bg-white">
    <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
      <h1 className="text-xl font-bold text-blue-700">SportsEzone</h1>

      <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
        <a href="#" className="hover:text-blue-700">Shop</a>
        <a href="#" className="hover:text-blue-700">Brands</a>
        <a href="#" className="hover:text-blue-700">My Orders</a>
      </nav>

      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-600">Hello,{username}</span>
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-700 text-sm font-semibold text-white">
          L
        </div>
      </div>
    </div>
  </header>

    <main className="mx-auto w-full max-w-7xl px-6 py-8 flex-1">
      <div className="mb-6">
        <h2 className="text-2xl font-bold">Recommended Products</h2>
        <p className="mt-1 text-sm text-gray-500">Sports gear picked for your game and preferences</p>
      </div>

      <div className="space-y-4">

        {/* product Card */ }

        {products.length == 0 ? (
            <p className='text-gray-500'>No Products Found</p> )
            :  products.map(product => ( 
        
        <div className="rounded-lg border bg-white p-5 transition hover:shadow-md">
          <h3 className="text-lg font-semibold text-blue-700">{product.name}</h3>
          <p className="mt-1 text-sm text-gray-700">{product.description}</p>
          <p className="text-gray-700 text-xs ">{new Date(product.created_at).toLocaleDateString("en-Us",{month:"short",day:"numeric",year:"numeric"})}</p>
          <div className="mt-3 flex flex-wrap gap-3 text-sm text-gray-600">
            <span className="rounded bg-gray-100 px-2 py-1">{product.brand}</span>
            <span className="rounded bg-gray-100 px-2 py-1">${product.price}</span>
            <span className="rounded bg-gray-100 px-2 py-1">{product.location}</span>
          </div>
          <div className="mt-4 flex justify-end">
            <NavLink to={`/order/${product.id}`} className="text-sm font-medium text-blue-700 hover:underline">View Details →</NavLink>
          </div>
        </div> 
            )
        )
        }

      </div>
    </main>

    <footer className="border-t bg-white">
      <div className="mx-auto max-w-7xl px-6 py-6 text-center text-sm text-gray-500">
        © 2026 SportsEzone | All rights reserved
      </div>
    </footer>
    </div>
  )
}
