import {React} from "react";
import bgDesign from "../images/bg-intro-mobile.png"

export default function MobileLayout() {
    return (
        <div className="min-h-screen bg-coral bg-no-repeat bg-cover bg-center bg-[length:400px_auto] flex flex-col items-center justify-center p-6 space-y-6" style={{ backgroundImage: `url("${bgDesign}")` }}>
           <div className="w-full max-w-[260px] mx-auto space-y-6">
            <h1 className="text-white text-[1.75rem] leading-tight font-bold text-center">Learn to code by <br /> watching others</h1>
            <p className="text-white text-sm text-center leading-relaxed opacity-90 max-w-sm">See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.</p> 
            <button className="bg-indigo-600 text-white text-sm rounded-xl w-full py-4 px-6 shadow-lg text-center leading-snug"><span className="font-bold">Try it free 7 days</span> then $20/mo. thereafter
            </button>
            <div className="bg-white rounded-xl shadow-lg p-6 space-y-4 text-sm">
                <form className="space-y-4">
                    <input type="text" placeholder="First Name" className="w-full border border-gray-300 rounded-md p-3 text-sm font-semibold placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-green-500"></input>
                    <input type="text" placeholder="Last Name" className="w-full border border-gray-300 rounded-md p-3 text-sm font-semibold placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-green-500"></input>
                    <input type="email" placeholder="Email Address" className="w-full border border-gray-300 rounded-md p-3 text-sm font-semibold placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-green-500"></input>
                    <input type="password" placeholder="Password" className="w-full border border-gray-300 rounded-md p-3 text-sm font-semibold placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-green-500"></input>
                    <button className="w-full bg-green-500 hover:bg-green-600 text-white text-sm font-md py-3 rounded-md shadow-md tracking-wide uppercase">CLAIM YOUR FREE TRIAL</button>
                    <p className="text-center text-xs text-gray-400 mt-4">By clicking the button, you are agreeing to<br /> our <span className="text-red-400 font-semibold">Terms and Services</span></p>
                </form>
            </div>
            </div>
        </div>
    )
}