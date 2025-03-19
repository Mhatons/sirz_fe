import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../../utils";
import { toast } from "react-toastify";
import Loader from "../../../features/loader";
import { sirzLogo, sirzLogoWhite } from "../../../assets";
import { useAppSelector } from "../../../app/hook";
import { allReduxSliceInfo } from "../../../features/reduxSlice";

const DashboardLetterForm = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { isDarkMode } = useAppSelector(allReduxSliceInfo);
    const [formData, setFormData] = useState({
        whatDoYouSell: "",

        HaveStore: "",

        TargetedAudience: "",
        goalsForEcommWeb: "",

        havePreferredEcommWeb: "",
        importantFeatuers: "",

        haveBrandIdentity: "",
        aimingCustomerExpr: "",

        budgetForProject: "",
        durationForFullProject: "",

        MarketingSupport: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        const payload = {
            // from: formData.email,
            subject: "New Contact Request",
            text: `
                <div>
                <p>BusinessOverview: ${formData.whatDoYouSell}</p>
                <p>HaveStore: ${formData.HaveStore}</p>
                <p>TargetedAudience: ${formData.TargetedAudience}</p>
                <p>PlantformFeatures: ${formData.goalsForEcommWeb}</p>
                <p>UserExperience: ${formData.havePreferredEcommWeb}</p>
                <p>BudgetTimeline: ${formData.importantFeatuers}</p>
                <p>MarketingGrowth: ${formData.haveBrandIdentity}</p>
                <p>MarketingSupport: ${formData.aimingCustomerExpr}</p>
                <p>MarketingGrowth: ${formData.budgetForProject}</p>
                <p>MarketingSupport: ${formData.durationForFullProject}</p>
                <p>MarketingSupport: ${formData.MarketingSupport}</p>
                </div>
            `,
            html: `
                <div>
                <p>BusinessOverview: ${formData.whatDoYouSell}</p>
                <p>HaveStore: ${formData.HaveStore}</p>
                <p>TargetedAudience: ${formData.TargetedAudience}</p>
                <p>PlantformFeatures: ${formData.goalsForEcommWeb}</p>
                <p>UserExperience: ${formData.havePreferredEcommWeb}</p>
                <p>BudgetTimeline: ${formData.importantFeatuers}</p>
                <p>MarketingGrowth: ${formData.haveBrandIdentity}</p>
                <p>MarketingSupport: ${formData.aimingCustomerExpr}</p>
                <p>MarketingGrowth: ${formData.budgetForProject}</p>
                <p>MarketingSupport: ${formData.durationForFullProject}</p>
                <p>MarketingSupport: ${formData.MarketingSupport}</p>
                </div>
            `,
        }

        try {
            const response = await axios.post(`${BASE_URL}/contact`, payload)
            console.log("response", response);
            toast.success("Message sent successfully");
            setIsLoading(false);
        } catch (error) {
            console.error("Error:", error);
            toast.error("Error sending message");
            setIsLoading(false);
        }
    };


    return (
        <>
            <form onSubmit={handleSubmit} className=" grid sm:grid-colws-2 gap-5 py-8     
         px-6 sm:mt-16 mt-10 border-b-[6px] border-s-[5px] border-e-[7px] border-colorGreen rounded-xl bg-white dark:bg-colorDefaultDark">
                <header className="relative">
                    <div className=" sm:w-[70%]">
                        <h4 className=" font-bold">Let's get started</h4>
                        <p className="  max-sm:text-justify pt-1 sm:text-[13px] text-[13px]">
                            Please fill in the details correctly and let us know about the services you are interested in
                        </p>
                    </div>
                    <div className="absolute top-3 right-0"><img src={isDarkMode ? sirzLogoWhite : sirzLogo} alt="" className=" h-3" /></div>
                </header>

                <section className="grid grid-cols-1 gap-2">
                    <h1>{"1)"}  Business OverView</h1>
                    <div className="relative pt-2">
                        <input
                            type="text"
                            name="whatDoYouSell"
                            value={formData.whatDoYouSell}
                            onChange={handleChange}
                            className={`w-full p-3 border border-gray-300 dark:bg-colorDefaultDark rounded-lg bg-tranparent dark:bg-background_dark placeholder:text-[12px] focus:outline-none focus:ring-1 dark:focus:ring-secondary focus:border-none focus:ring-primary`}
                            placeholder={'Eg. Beauty products'}
                        />
                        <div className=" absolute top-0 left-3 bg-white px-2 text-[12px] text-zinc-500 font-comfortaa dark:bg-colorDefaultDark">{'What type of Products do you sell?'}</div>
                    </div>
                </section>

                <section className="grid grid-cols-1 gap-2">
                    <h1>{"2)"}  Do you currently have an online store or is this your first e-commerce platform?</h1>

                    <div className="pt-2 sm:flex items-center sm:gap-6 grid grid-cols-1 gap-2">

                        <label className="flex items-center space-x-2 cursor-pointer">
                            <input
                                type="radio"
                                name="HaveStore"
                                value={formData.HaveStore}
                                className="w-5 h-5 text-[#3ACBCC] border-[#3ACBCC] focus:ring-[#3ACBCC] checked:bg-[#3ACBCC]"
                            />
                            <span className="text-gray-700">I have an online store</span>
                        </label>

                        <label className="flex items-center space-x-2 cursor-pointer">
                            <input
                                type="radio"
                                name="HaveStore"
                                value={formData.HaveStore}
                                className="w-5 h-5 text-[#3ACBCC] border-[#3ACBCC] focus:ring-[#3ACBCC] checked:bg-[#3ACBCC]"
                            />
                            <span className="text-gray-700">This is my first e-commerce platform</span>
                        </label>
                    </div>
                </section>

                <section className="grid grid-cols-1 gap-2">
                    <h1>{"3)"}  Target Audience and Goal</h1>
                    <section className="grid sm:grid-cols-2 grid-cols-1 gap-3">
                        <div className="relative pt-2">
                            <input
                                type="text"
                                name="firstName"
                                value={formData.TargetedAudience}
                                onChange={handleChange}
                                className={`w-full p-3 border border-gray-300 dark:bg-colorDefaultDark rounded-lg bg-tranparent dark:bg-background_dark placeholder:text-[12px] focus:outline-none focus:ring-1 dark:focus:ring-secondary focus:border-none focus:ring-primary`}
                                placeholder={'Eg. Women, men'}
                            />
                            <div className=" absolute top-0 left-3 bg-white px-2 text-[12px] text-zinc-500 font-comfortaa dark:bg-colorDefaultDark">{'who is your target market'}</div>
                        </div>

                        <div className="relative pt-2">
                            <select name="hdh" id="" className={`w-full p-3 border border-gray-300 dark:bg-colorDefaultDark rounded-lg bg-tranparent dark:bg-background_dark placeholder:text-[12px] focus:outline-none focus:ring-1 dark:focus:ring-secondary focus:border-none focus:ring-primary`}>
                                <option value="">Select</option>
                                <option value="">Option 1</option>
                                <option value="">Option 2</option>
                                <option value="">Option 3</option>
                            </select>
                            <div className=" absolute top-0 left-3 bg-white px-2 text-[12px] text-zinc-500 font-comfortaa dark:bg-colorDefaultDark">{'Primary goals for the e-commerce website'}</div>
                        </div>
                    </section>
                </section>

                <section className="grid grid-cols-1 gap-2">
                    <h1>{"4)"}  Platform and Features </h1>
                    <section className="grid sm:grid-cols-2 grid-cols-1 gap-3">
                        <div className="relative pt-2">
                            <select name="hdh" id="" className={`w-full p-3 border border-gray-300 dark:bg-colorDefaultDark rounded-lg bg-tranparent dark:bg-background_dark placeholder:text-[12px] focus:outline-none focus:ring-1 dark:focus:ring-secondary focus:border-none focus:ring-primary`}>
                                <option value="">Select</option>
                                <option value="">Option 1</option>
                                <option value="">Option 2</option>
                                <option value="">Option 3</option>
                            </select>
                            <div className=" absolute top-0 left-3 bg-white px-2 text-[12px] text-zinc-500 font-comfortaa dark:bg-colorDefaultDark">{'Do you have a preferred e-commerce platform?'}</div>
                        </div>

                        <div className="relative pt-2">
                            <select name="hdh" id="" className={`w-full p-3 border border-gray-300 dark:bg-colorDefaultDark rounded-lg bg-tranparent dark:bg-background_dark placeholder:text-[12px] focus:outline-none focus:ring-1 dark:focus:ring-secondary focus:border-none focus:ring-primary`}>
                                <option value="">Select</option>
                                <option value="">Option 1</option>
                                <option value="">Option 2</option>
                                <option value="">Option 3</option>
                            </select>
                            <div className=" absolute top-0 left-3 bg-white px-2 text-[12px] text-zinc-500 font-comfortaa dark:bg-colorDefaultDark">{'What features are most important for you?'}</div>
                        </div>
                    </section>
                </section>

                <section className="grid grid-cols-1 gap-2">
                    <h1>{"5)"}  Design and User Experience </h1>
                    <section className="grid grid-cols-1 gap-3">
                        <div className="relative pt-2">
                            <input
                                type="text"
                                name="firstName"
                                value={formData.TargetedAudience}
                                onChange={handleChange}
                                className={`w-full p-3 border border-gray-300 dark:bg-colorDefaultDark rounded-lg bg-tranparent dark:bg-background_dark placeholder:text-[12px] focus:outline-none focus:ring-1 dark:focus:ring-secondary focus:border-none focus:ring-primary`}
                                placeholder={'Eg. Beauty products'}
                            />
                            <div className=" absolute top-0 left-3 bg-white px-2 text-[12px] text-zinc-500 font-comfortaa dark:bg-colorDefaultDark">{'Do you have a brand identity or specific design requirements?'}</div>
                        </div>

                        <div className="relative pt-2">
                            <input
                                type="text"
                                name="firstName"
                                value={formData.TargetedAudience}
                                onChange={handleChange}
                                className={`w-full p-3 border border-gray-300 dark:bg-colorDefaultDark rounded-lg bg-tranparent dark:bg-background_dark placeholder:text-[12px] focus:outline-none focus:ring-1 dark:focus:ring-secondary focus:border-none focus:ring-primary`}
                                placeholder={'Eg. Beauty products'}
                            />
                            <div className=" absolute top-0 left-3 bg-white px-2 text-[12px] text-zinc-500 font-comfortaa dark:bg-colorDefaultDark">{'What kind of customer experience are you aiming for?'}</div>
                        </div>
                    </section>
                </section>

                <section className="grid grid-cols-1 gap-2">
                    <h1>{"6)"} Budget and Timeline</h1>
                    <section className="grid grid-cols-1 gap-3">
                        <div className="relative pt-2">
                            <input
                                type="text"
                                name="firstName"
                                value={formData.TargetedAudience}
                                onChange={handleChange}
                                className={`w-full p-3 border border-gray-300 dark:bg-colorDefaultDark rounded-lg bg-tranparent dark:bg-background_dark placeholder:text-[12px] focus:outline-none focus:ring-1 dark:focus:ring-secondary focus:border-none focus:ring-primary`}
                                placeholder={'Eg. Beauty products'}
                            />
                            <div className=" absolute top-0 left-3 bg-white px-2 text-[12px] text-zinc-500 font-comfortaa dark:bg-colorDefaultDark">{'What is your budget for this project?'}</div>
                        </div>

                        <div className="relative pt-2">
                            <input
                                type="text"
                                name="firstName"
                                value={formData.TargetedAudience}
                                onChange={handleChange}
                                className={`w-full p-3 border border-gray-300 dark:bg-colorDefaultDark rounded-lg bg-tranparent dark:bg-background_dark placeholder:text-[12px] focus:outline-none focus:ring-1 dark:focus:ring-secondary focus:border-none focus:ring-primary`}
                                placeholder={'Eg. Beauty products'}
                            />
                            <div className=" absolute top-0 left-3 bg-white px-2 text-[12px] text-zinc-500 font-comfortaa dark:bg-colorDefaultDark">{'When do you need the e-commerce site to be fully operational?'}</div>
                        </div>
                    </section>
                </section>

                <section className="grid grid-cols-1 gap-2">
                    <h1>{"7)"} Marketing and Growth Strategy</h1>
                    <div className="relative pt-2">
                        <select name="hdh" id="" className={`w-full p-3 border border-gray-300 dark:bg-colorDefaultDark rounded-lg bg-tranparent dark:bg-background_dark placeholder:text-[12px] focus:outline-none focus:ring-1 dark:focus:ring-secondary focus:border-none focus:ring-primary`}>
                            <option value="">Select</option>
                            <option value="">Option 1</option>
                            <option value="">Option 2</option>
                            <option value="">Option 3</option>
                        </select>
                        <div className=" absolute top-0 left-3 bg-white px-2 text-[12px] text-zinc-500 font-comfortaa dark:bg-colorDefaultDark">{'How do you plan to drive traffic to your store?'}</div>
                    </div>
                </section>

                <section className="grid grid-cols-1 gap-2">
                    <h1>{"8)"} Do you need ongoing support for marketing and automation?</h1>

                    <div className="pt-2 sm:flex items-center sm:gap-6 grid grid-cols-1 gap-2">

                        <label className="flex items-center space-x-2 cursor-pointer">
                            <input
                                type="radio"
                                name="HaveStore"
                                value={formData.HaveStore}
                                className="w-5 h-5 text-[#3ACBCC] border-[#3ACBCC] focus:ring-[#3ACBCC] checked:bg-[#3ACBCC]"
                            />
                            <span className="text-gray-700">Yes, I need</span>
                        </label>

                        <label className="flex items-center space-x-2 cursor-pointer">
                            <input
                                type="radio"
                                name="HaveStore"
                                value={formData.HaveStore}
                                className="w-5 h-5 text-[#3ACBCC] border-[#3ACBCC] focus:ring-[#3ACBCC] checked:bg-[#3ACBCC]"
                            />
                            <span className="text-gray-700">No, I don’t need</span>
                        </label>

                        <label className="flex items-center space-x-2 cursor-pointer">
                            <input
                                type="radio"
                                name="HaveStore"
                                value={formData.HaveStore}
                                className="w-5 h-5 text-[#3ACBCC] border-[#3ACBCC] focus:ring-[#3ACBCC] checked:bg-[#3ACBCC]"
                            />
                            <span className="text-gray-700">I am not sure yet</span>
                        </label>
                    </div>
                </section>



            </form>
            <section className="mt-6">
                {
                    isLoading ? (
                        <Loader />
                    ) : (
                        <div className=" sm:w-[40%] w-[80%] max-sm:m-auto flex justify-end">
                            {/* <Button text="Send message" onClick={() => { }} className="" /> */}
                            <button className={` tracking-widest bg-white text-black rounded-full w-full max-sm:mt-5
                            'w-full flex align-center justify-center py-4 cursor-pointer text-sm px-8 font-medium floating-button  
                            `}
                                onClick={() => { }}>
                                Send message
                            </button>
                        </div>
                    )
                }
            </section>
        </>
    );
};

export default DashboardLetterForm;

