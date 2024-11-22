import { useState } from "react";
import Button from "../common/button";
// import phoneImg from '../../assets/step1.png'
import { StepOne, StepThree, StepTwo } from "./steps";

export default function Hero() {
    const [currentStep, setCurrentStep] = useState("step1");

    const toggleSteps = (current_step: string) => {
        setCurrentStep(current_step)
    }

    return (
        <div className="bg-[#0c33f4a6] py-20 sm:flex max-sm:px-6 sm:w-[95%] m-auto sm:rounded-lg items-center text-white">
            <div className="sm:w-[40%] ">
                <div className="sm:w-1/2 m-auto">
                    <header className=" font-exo font-extrabold sm:text-[30px] text-[25px]">
                        Earn exponential profits with our proven profitable strategies
                    </header>
                    <div className="py-6">
                        Achieve your financial freedom with our AUTO TRADING BOT that will consistently grow your portfolio
                        <b>WE TRADE. YOU EARN.</b>
                        Join our Telegram Bot and start earning money today!
                    </div>
                    <Button name="get started" />
                </div>
            </div>
            {/* <div className="sm:w-1/2 max-sm:pt-20 flex max-sm:justify-center max-sm:flex-col items-center gap-20">
                <div className="sm:w-[33%] w-[50%]">
                    <img src={phoneImg} alt="" className="w-full" />
                </div>
                <div className="sm:w-[50%] max-sm:text-center">
                    <div className="flex items-center max-sm:justify-center gap-4 pb-3 ps-3">
                        <div className="bg-[#AFFFF6] h-[5px] rounded-full w-16"></div>
                        <div className="bg-[#CCCCCC] h-[5px] rounded-full w-16"></div>
                        <div className="bg-[#CCCCCC] h-[5px] rounded-full w-16"></div>
                    </div>
                    <div>
                        <header className="text-3xl">Step 1: Join the Bot</header>
                        <div className="py-4">Navigate to our Telegram bot, click on "Start Now", join the trading broadcast channel when prompted, then get back to the bot to get started.</div>
                    </div>
                    <button className="py-4 px-8 rounded-full text-black bg-[#AFFFF6]">Continue</button>
                </div>
            </div> */}
            {
                currentStep === 'step1' ?
                    <StepOne
                        onClick={() => toggleSteps('step2')}
                    /> :
                    currentStep === 'step2' ?
                        <StepTwo
                            onClick={() => toggleSteps('step3')}
                        /> :
                        currentStep === "step3" ?
                            <StepThree
                                onClick={() => toggleSteps('step1')}
                            /> :
                            null
            }


        </div>
    )
}