import React from 'react'
import { useActionState } from 'react';
import { NavLink, useParams } from 'react-router-dom';



export default function PlaceOrderPage() {

  const [result, formAction, isPending] = useActionState(placeOrderAction, null, {withPending : true});  
  const {orderId} = useParams();
  const userId = localStorage.getItem("userId");
  async function placeOrderAction(_,formData) {
    const res = await fetch('http://127.0.0.1:8000/order', {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({
                applicant : userId,
                order : orderId
        })
    });
    const data = await res.json();

    if(res.ok){
        return { message : data.message, success : true}
    }
    
        return { message : data.message, success : false}
    
}

  return (
      <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col">

  <header className="border-b bg-white">
    <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
      <h1 className="text-xl font-bold text-green-700">SportsEzone</h1>

      <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
        <NavLink to={"/products"} className="hover:text-green-700">Products</NavLink>
        <a href="#" className="hover:text-green-700">Brands</a>
        <a href="#" className="hover:text-green-700">My Orders</a>
      </nav>

      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-600">Hello, Linga</span>
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-700 text-sm font-semibold text-white">
          L
        </div>
      </div>
    </div>
  </header>

  <main className="flex-1 px-4">

    <div className="max-w-7xl mx-auto pt-6">
      <a
        href="/products"
        className="inline-flex items-center gap-2 mb-4
               text-sm font-medium text-green-600
               hover:text-green-700 hover:underline"
      >
      </a>
    </div>

    <div className="flex items-center justify-center py-10">
      <div className="w-full max-w-md rounded-lg border bg-white p-6">

        {/* <h2 className="text-lg font-semibold text-gray-900">Place your order</h2>
        <p className="mt-1 text-sm text-gray-500">Review the product and confirm your order</p>

        <div className="mt-5 rounded-lg bg-gray-50 p-4">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="font-semibold text-green-700">Soccer Cleats</h3>
              <p className="text-sm text-gray-600">Adidas Unisex Adult Goletto</p>
              <p className="mt-1 text-xs text-gray-500">📍 Ships from Michigan</p>
            </div>
            <span className="font-bold text-gray-900">$49.32</span>
          </div>
        </div> */}

        <form action={formAction} className="mt-5 space-y-4">

          {/* <div>
            <label for="quantity" className="block text-sm font-medium text-gray-700">Quantity</label>
            <input
              id="quantity"
              type="number"
              min="1"
              value="1"
              className="mt-1 w-full rounded-lg border px-3 py-2 text-sm
                     focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div> */}

          {/* <div className="flex justify-between border-t pt-4 text-sm">
            <span className="font-medium text-gray-700">Total</span>
            <span className="font-bold text-gray-900">$49.32</span>
          </div> */}

          <button
            type="submit"
            className="w-full rounded-lg bg-green-700 py-2.5
                   font-semibold text-white
                   hover:bg-green-800
                   focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            {isPending ? "Processing your order" : "Place Order" }
          </button>

        {result && (
  <p className={`text-center text-sm ${result.success ? "text-green-600" : "text-red-600"}`}>
    {result.message}
  </p>
)}

        </form>
      </div>
    </div>

  </main>

  <footer className="border-t bg-white">
    <div className="mx-auto max-w-7xl px-4 py-6 text-center text-sm text-gray-500">
      © 2026 SportsEzone | All rights reserved
    </div>
  </footer>

</div>
    
  )
}
