import React from 'react'
import { useActionState } from "react"


async function registerAction(_,formData) {
    const json = Object.fromEntries(formData);
    const res = await fetch('http://127.0.0.1:8000/register', {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(json)
    })

    const data = await res.json();
    return data.message || "Registration Failed"
}

export default function RegisterPage() {

  const [message, formAction, isPending] = useActionState(registerAction, "", {withPending : true});
  return (
    <div classNameName="bg-gray-50 text-gray-800">

    <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="text-2xl font-bold text-blue-700">
                SportsEzone
            </div>

            <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
                <a href="#" className="hover:text-blue-700">Shop</a>
                <a href="#" className="hover:text-blue-700">Brands</a>
                <a href="#" className="hover:text-blue-700">Offers</a>
                <a href="#" className="hover:text-blue-700">Login</a>
            </nav>
        </div>
    </header>

    <main className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-10">

        <section className="hidden md:block">
            <h1 className="text-3xl font-bold leading-snug">
                Gear up for your game
            </h1>

            <p className="mt-4 text-gray-600 max-w-md">
                Register with SportsEzone and shop the best sports 
                equipment, apparel and footwear. Create your account to 
                track orders, save favorites and get exclusive deals.
            </p>

            <ul className="mt-6 space-y-3 text-sm text-gray-700">
                <li>✔ Genuine products from top sports brands</li>
                <li>✔ Exclusive member-only offers and discounts</li>
                <li>✔ Fast delivery & easy returns</li>
            </ul>
        </section>

        <section className="bg-white border rounded-lg p-8 max-w-md w-full mx-auto">
            <h2 className="text-xl font-bold text-gray-900">
                Create your SportsEzone account
            </h2>

            <p className="text-sm text-gray-500 mt-1">
                Shop sports gear for every game, every athlete
            </p>

            <form action={formAction} className="mt-6 space-y-4">

                <div>
                    <label className="text-sm font-medium text-gray-700">
                        Username
                    </label>
                    <input name='username' placeholder="Enter username"
                        className="mt-1 w-full rounded border border-gray-300 px-3 py-2 focus:border-blue-600 focus:ring-1 focus:ring-blue-200 outline-none" />
                </div>

                <div>
                    <label className="text-sm font-medium text-gray-700">
                        Email ID
                    </label>
                    <input name='email' type="email" placeholder="Enter email"
                        className="mt-1 w-full rounded border border-gray-300 px-3 py-2 focus:border-blue-600 focus:ring-1 focus:ring-blue-200 outline-none" />
                </div>

                <div>
                    <label className="text-sm font-medium text-gray-700">
                        Password
                    </label>
                    <input name='password' type="password" placeholder="Minimum 6 characters"
                        className="mt-1 w-full rounded border border-gray-300 px-3 py-2 focus:border-blue-600 focus:ring-1 focus:ring-blue-200 outline-none" />
                </div>

                <button disabled={isPending} type='submit' className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2.5 rounded transition">
                   {isPending ? 'Registering....' : 'Register Now'} 
                </button>

                <p className='text-center text-sm text-gray-600'>{message}</p>

                <p className="text-xs text-gray-500 text-center">
                    By registering, you agree to our 
                    <a href="#" className="text-blue-700 hover:underline"> Terms & Conditions</a>
                </p>

                <p className="text-sm text-center text-gray-600">
                    Already registered? 
                     <a href="#" className="text-blue-700 font-medium hover:underline">
                         Login here
                    </a>
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
