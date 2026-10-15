import React from 'react'
import { useActionState } from "react"
import { NavLink, useNavigate } from 'react-router-dom';

async function loginAction(_,formData) {
    const json = Object.fromEntries(formData);
    const res = await fetch('http://127.0.0.1:8000/login', {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(json)
    })

    const data = await res.json();

    if (res.ok){
        localStorage.setItem("userId",data.user_id);
        localStorage.setItem("username",data.username);

    }
    return data.message || "Login Failed"
}

export default function LoginPage() {

  const [message, formAction, isPending] = useActionState(loginAction, "", {withPending : true});  

  const navigate = useNavigate();
  if(message == "Login Successful"){
    navigate("/products")
  }
  return (
    <div className="bg-gray-50 text-gray-800">

    <header classNameName="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="text-2xl font-bold text-blue-700">
                SportsEzone
            </div>

            <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
                <a href="#" className="hover:text-blue-700">Shop</a>
                <a href="#" className="hover:text-blue-700">Brands</a>
                <a href="#" className="hover:text-blue-700">Offers</a>
                <a href="#" className="hover:text-blue-700">Register</a>
            </nav>
        </div>
    </header>

    <main className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-10">
        <section className="hidden md:block">
            <h1 className="text-3xl font-bold leading-snug">
                Welcome back, champ
            </h1>

            <p className="mt-4 text-gray-600 max-w-md">
                Log in to SportsEzone to pick up where you left off.
                Check your orders, revisit your wishlist and grab the latest deals on sports gear.
            </p>

            <ul className="mt-6 space-y-3 text-sm text-gray-700">
                <li>✔ Track your orders in one place</li>
                <li>✔ Saved cart and wishlist across devices</li>
                <li>✔ Member-only offers on top sports brands</li>
            </ul>
        </section>
        <section className="hidden md:block">

<h1 className="text-2xl font-bold text-blue-700 text-center">
    SportsEzone
</h1>
<p className="text-sm text-gray-500 text-center mt-1">
    Login to your account
</p>

<form action={formAction} className="mt-6 space-y-4">

    <div>
        <label className="block text-sm font-medium text-gray-700">
            Username
        </label>
        <input name="username" type="text" placeholder="Enter your username" className="mt-1 w-full rounded border border-gray-300 px-3 py-2
                focus:border-blue-600 focus:ring-1 focus:ring-blue-200
                outline-none" />
    </div>

    <div>
        <label className="block text-sm font-medium text-gray-700">
            Password
        </label>
        <input name="password" type="password" placeholder="Enter your password" className="mt-1 w-full rounded border border-gray-300 px-3 py-2
                focus:border-blue-600 focus:ring-1 focus:ring-blue-200
                outline-none" />
    </div>

    <div className="text-right">
        <a href="#" className="text-sm text-blue-700 hover:underline">
            Forgot Password?
        </a>
    </div>

    <button disabled={isPending} type="submit" className="w-full bg-blue-700 hover:bg-blue-800
                text-white font-semibold py-2.5 rounded transition">
        {isPending ? 'Logging in....' : 'Login'}
    </button>
    
    <p className='text-center text-sm text-gray-600'>{message}</p>


    <p className="text-sm text-center text-gray-600">
        New to SportsEzone? 
        <NavLink to={"/register"} className="text-blue-700 font-medium hover:underline">
            Register
        </NavLink>
    </p>
</form>
</section>

    </main>

    <footer className="border-t bg-white">
        <div className="max-w-7xl mx-auto px-6 py-6 text-sm text-gray-500 text-center">
            © 2026 SportsEzone | All rights reserved
        </div>
    </footer>

</div>
  )
}
