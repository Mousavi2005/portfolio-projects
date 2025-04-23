import MobileDesignComponent from "./mobileDesignComponent"
import DesktopDesignComponent from "./desktopDesignComponent"
import { useState } from "react"

export default function App() {
    const [plan, setPlan] = useState(() => '')
  return (
    <> 
      <main className="w-full h-full flex justify-center items-center md:hidden">
        <MobileDesignComponent plan = {plan} setPlan = {setPlan} />
        {/* <DesktopDesignComponent /> */}
      </main>
      
      <main className="w-full h-full justify-center items-center hidden md:flex">

        <DesktopDesignComponent plan = {plan} setPlan = {setPlan}  />


      </main>
    </>

  )
}