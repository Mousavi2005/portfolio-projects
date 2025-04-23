import { useState } from "react"
import DesktopLeftComponent from "./desktopLeft"
import DesktopRighttComponent from "./desktoprRght"

export default function DesktopDesignComponent(props) {
    const [step, setStep] = useState(() => 2)
    const plan = props.plan
    const setPlan = props.setPlan

    return(
        <div className="w-[80%] max-w-4xl h-[80%] bg-white flex rounded-xl">
            <DesktopLeftComponent step = {step} />
            <DesktopRighttComponent step = {step} setStep = {setStep} setPlan = {setPlan} plan = {plan} />

        </div>
    )
}