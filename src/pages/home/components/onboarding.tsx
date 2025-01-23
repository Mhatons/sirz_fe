import { sampleImage } from "../../../assets/images";
import { PersonIcon } from "../../../assets/icons/svg";

export default function OnboardingSteps() {

    const onbording = [
        {
            title: "Sign Up",
            description: "Fill out our membership form to join the Haven & Hive network",
            icon: ""
        },
        {
            title: "Receive a Welcome Email",
            description: "Get all the information you need to get started, including a link to join our exclusive WhatsApp community and a unique code for all transactions",
            icon: ""
        },
        {
            title: "Refer & Earn",
            description: " Participate in our referral package, as everyone you reffer is bonded to you for life. you can a percentage of whatever goods or services we render to them",
            icon: ""
        },
        {
            title: "Achieve Success",
            description: " Implement what you learn, leverage our support, and watch your real estate career soar.",
            icon: ""
        },
    ];

    return (
        < section className=" max-sm:pb-8 pt-20 max-sm:bg-[#ddd]" >
            <div className="h-[500px] relative bg-[#f96a0a]">
                <img src={sampleImage} alt="" className="w-full h-full object-cover object-bottom opacity-75 " />
            </div>
            <div className="grid sm:grid-cols-4 mt-[-6em] left-0 right-0 sm:absolute w-[90%] m-auto gap-5">
                {
                    onbording.map((item, index: number) => (
                        <div key={index} className={`bg-[#fff] dark:bg-background_dark ${!index && " max-sm:z-50"} sm:shadow-lg   cursor-pointer text-center rounded-2xl p-8 flex items-center justify-center`}>
                            <div className="flex items-center justify-center flex-col">
                                <PersonIcon />
                                <header className="text-[#F29254] font-comfortaa py-3 font-extrabold text-[17px]">{item.title}</header>
                                <div className="text-sm font-comfortaa">{item.description}</div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section >
    )
}