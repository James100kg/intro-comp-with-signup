import {React} from "react";
import bgDesign from "../images/bg-intro-mobile.png"

export default function MobileLayout({ firstName, setFirstName, firstNameError, handleSubmit, lastName, setLastName, lastNameError, email, setEmail, emailError, password, setPassword, passwordError }) {
    return (
        <div className="min-h-screen bg-coral bg-no-repeat bg-cover bg-center bg-[length:400px_auto] flex flex-col items-center justify-center p-6 space-y-6" style={{ backgroundImage: `url("${bgDesign}")` }}>
           <div className="w-full max-w-[260px] mx-auto space-y-6">
            <h1 className="text-white text-[1.75rem] leading-tight font-bold text-center">Learn to code by <br /> watching others</h1>
            <p className="text-white text-sm text-center leading-relaxed opacity-90 max-w-sm">See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.</p> 
            <button className="bg-indigo-600 text-white text-sm rounded-xl w-full py-4 px-6 shadow-lg text-center leading-snug"><span className="font-bold">Try it free 7 days</span> then $20/mo. thereafter
            </button>
            <div className="bg-white rounded-xl shadow-lg p-6 space-y-4 text-sm">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                    <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} className={`w-full border rounded-md p-3 text-sm font-semibold placeholder-gray-500 ${firstNameError ? 'border border-red-500 focus:border-red-500 focus:ring-red-500' : 'border border-gray-300 focus:border-green-500 focus:ring-green-500'} focus:outline-none focus:ring-1 focus:ring-green-500`}></input>
                    {firstNameError && (<p className="text-red-500">First Name cannot be empty</p>)}
                    </div>
                    <div>
                    <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} className={`w-full border border-gray-300 rounded-md p-3 text-sm font-semibold placeholder-gray-500 ${lastNameError ? 'border border-red-500 focus:border-red-500 focus:ring-red-500' : 'border border-gray-300 focus:border-green-500 focus:ring-green-500'} focus:outline-none focus:ring-1 focus:ring-green-500`}></input>
                    {lastNameError && (<p className="text-red-500">Last Name cannot be empty</p>)}
                    </div>
                    <div>
                    <input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} className={`w-full border border-gray-300 rounded-md p-3 text-sm font-semibold placeholder-gray-500 ${emailError ? 'border border-red-500 focus:border-red-500 focus:ring-red-500' : 'border border-gray-300 focus:border-green-500 focus:ring-green-500'} focus:outline-none focus:ring-1 focus:ring-green-500`}></input>
                    {emailError && (<p className="text-red-500">{emailError}</p>)}
                    </div>
                    <div>
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className={`w-full border border-gray-300 rounded-md p-3 text-sm font-semibold placeholder-gray-500 ${passwordError.length > 0 ? 'border border-red-500 focus:border-red-500 focus:ring-red-500' : 'border border-gray-300 focus:border-green-500 focus:ring-green-500'} focus:outline-none focus:ring-1 focus:ring-green-500`}></input>
                    {passwordError.length > 0 && (
                    <div>
                    {passwordError.map((err, i) => (
                    <p className="text-red-500" key={i}>{err}</p>))}
                    </div>)}
                    </div>
                    <button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white text-sm font-md py-3 rounded-md shadow-md tracking-wide uppercase">CLAIM YOUR FREE TRIAL</button>
                    <p className="text-center text-xs text-gray-400 mt-4">By clicking the button, you are agreeing to our <span className="text-red-400 font-semibold">Terms and Services</span></p>
                    </form>
            </div>
            </div>
        </div>
    )
}