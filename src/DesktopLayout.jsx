import React from "react";
import bgDesign from "../images/bg-intro-mobile.png"

export function DesktopLayout({ firstName, setFirstName, firstNameError, handleSubmit }) {
    
    return (
        <div className="min-h-screen bg-coral bg-top bg-contain px-8" style={{ backgroundImage: `url("${bgDesign}")`, backgroundSize: "contain", backgroundRepeat: "repeat", }}>
            <div className="flex justify-center items-center min-h-screen max-w-6xl mx-auto gap-12 px-6">
                <div className="w-full max-w-md mx-auto">
                    <h1 className="text-white text-4xl leading-tight font-bold mb-4">Learn to code by <br /> watching others</h1>
                    <p className="text-white text-sm opacity-90 leading-relaxed max-w-sm">See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.</p>
                </div>
                <div className="flex flex-col">
                <button type="button" className="bg-indigo-600 text-white text-sm rounded-xl w-full py-4 px-6 shadow-lg text-center leading-snug mb-4"><span className="font-bold">Try it free 7 days</span> then $20/mo. thereafter
                </button> 
                <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full">
                    <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                    <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} className={`${firstNameError ? 'border-red-500' : ''} w-full border border-gray-300 rounded-md p-3 text-sm font-semibold placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-green-500`}></input>
                    {firstNameError && (<p className="text-red-500">First Name cannot be empty</p>)}
                    </div>
                    <input type="text" placeholder="Last Name" className="w-full border border-gray-300 rounded-md p-3 text-sm font-semibold placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-green-500"></input>
                    <input type="email" placeholder="Email Address" className="w-full border border-gray-300 rounded-md p-3 text-sm font-semibold placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-green-500"></input>
                    <input type="password" placeholder="Password" className="w-full border border-gray-300 rounded-md p-3 text-sm font-semibold placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-green-500"></input>
                    <button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white text-sm font-md py-3 rounded-md shadow-md tracking-wide uppercase">CLAIM YOUR FREE TRIAL</button>
                    <p className="text-center text-xs text-gray-400 mt-4">By clicking the button, you are agreeing to our <span className="text-red-400 font-semibold">Terms and Services</span></p>
                </form>
                </div>
                </div>
            </div>
        </div>
    )
}