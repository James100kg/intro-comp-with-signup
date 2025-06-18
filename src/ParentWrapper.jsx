import {React, useState} from "react";
import { DesktopLayout } from "./DesktopLayout";
import MobileLayout from "./MobileLayout";

export function ParentWrapper() {
    const [firstName, setFirstName] = useState("")
    const [firstNameError, setFirstNameError] = useState(false)
    const [lastName, setLastName] = useState("")
    const [lastNameError, setLastNameError] = useState(false)
    const [email, setEmail] = useState("")
    const [emailError, setEmailError] = useState("")
    const [password, setPassword] = useState("")
    const [passwordError, setPasswordError] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Form submitted!")

        const trimmedFirstName = 
        firstName.trim()
        const isValidFirstName = 
        trimmedFirstName !== ''

        const trimmedLastName =
        lastName.trim()
        const isValidLastName =
        trimmedLastName !== ''

        const trimmedEmail =
        email.trim()

        const trimmedPassword =
        password.trim()
        const passwordErrors = []
            
    if (isValidFirstName) {
        setFirstNameError(false)
    } else {
        setFirstNameError(true)
    }

    if (isValidLastName) {
        setLastNameError(false)
    } else {
        setLastNameError(true)
    }

    if (trimmedEmail === "") {
        setEmailError("Email is required")
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
        setEmailError("Email is invalid")
    } else {
        setEmailError("")
    }

    if (trimmedPassword === "") {
        passwordErrors.push("Password is required")
    } 
    
    if (trimmedPassword.length < 8) {
        passwordErrors.push("Password must be at least 8 characters")
    } 
    
    if (!/[A-Z]/.test(trimmedPassword)) {
        passwordErrors.push("Password must contain at least one uppercase letter")
    } 
    
    if (!/[a-z]/.test(trimmedPassword)) {
        passwordErrors.push("Password must contain at least one lowercase letter")
    }
    
    if (!/[0-9]/.test(trimmedPassword)) {
        passwordErrors.push("Password must contain at least one digit")
    }
    
    if (!/[!@#$%^&*]/.test(trimmedPassword)) {
        passwordErrors.push("Password must contain at least one special character")
    } 

    setPasswordError(passwordErrors)

}

    

    return (
        <>
    <div className="hidden md:block">
      {<DesktopLayout
      firstName={firstName}
      setFirstName={setFirstName}
      firstNameError={firstNameError}
      setFirstNameError={setFirstNameError}
      handleSubmit={handleSubmit}
      lastName={lastName}
      setLastName={setLastName}
      lastNameError={lastNameError}
      setLastNameError={setLastNameError}
      email={email}
      setEmail={setEmail}
      emailError={emailError}
      setEmailError={setEmailError}
      password={password}
      setPassword={setPassword}
      passwordError={passwordError}
      setPasswordError={setPasswordError} />}
    </div>
    <div className="block md:hidden">
      {<MobileLayout />}
    </div>
        </>
    )
}