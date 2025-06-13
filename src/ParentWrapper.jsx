import {React, useState} from "react";
import { DesktopLayout } from "./DesktopLayout";
import MobileLayout from "./MobileLayout";

export function ParentWrapper() {
    const [firstName, setFirstName] = useState("")
    const [firstNameError, setFirstNameError] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Form submitted!")
        if (firstName.trim === '') {
            setFirstNameError(true)
        } else {
            setFirstNameError(false)
        }

        const isValid = 
        firstName.trim()
    
    if (isValid) {
        console.log("Form is Valid! Proceed...")
    }
    }

    

    return (
        <>
    <div className="hidden md:block">
      {<DesktopLayout
      firstName={firstName}
      setFirstName={setFirstName}
      firstNameError={firstNameError}
      setFirstNameError={setFirstNameError}
      handleSubmit={handleSubmit} />}
    </div>
    <div className="block md:hidden">
      {<MobileLayout />}
    </div>
        </>
    )
}