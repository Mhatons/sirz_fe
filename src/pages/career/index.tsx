import { IMAGES } from "../../assets";
import { useAppSelector } from "../../app/hook";
import { allReduxSliceInfo } from "../../features/reduxSlice";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/routes/desc";

export default function Career() {
    const { isDarkMode } = useAppSelector(allReduxSliceInfo);
    const navigate = useNavigate();
    const positions = [
        {
            title: "Frontend Developer",
            location: "Abuja, Nigeria",
            type: "Full-Time",
            description: "Work on cutting-edge web applications with a focus on beautiful and intuitive UI/UX.",
        },
        {
            title: "UI/UX Designer",
            location: "Remote",
            type: "Contract",
            description: "Design user-friendly interfaces for mobile and web applications.",
        },
        {
            title: "Project Manager",
            location: "Lagos, Nigeria",
            type: "Full-Time",
            description: "Lead projects from inception to completion with agile methodologies.",
        },
    ];

    return (
        <div className="min-h-screen">
            <div
                style={{ backgroundImage: `url(${IMAGES.onboardingImg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
            >
                <div className={`sm:pt-32 pt-24 sm:pb-20 pb-10 text-white ${isDarkMode ? "bg-[#000000a8]" : "backgroundGradient"}`}>
                    <div className=" sm:max-w-[60%] max-w-[90%] m-auto text-center">
                        <header className=' sm:text-4xl font-bold text-[22px] pb-4 capitalize text-primary_dark dark:text-secondary_light '>Join Our Team</header>
                        <div className="sm:text-[20px] text-sm font-comfortaa dark:text-background_light text-background_dark">We're on a mission to create exceptional experiences. Be a part of our journey!</div>
                    </div>
                </div>
            </div>

            {/* Available Positions */}
            <section className="container w-[90%] m-auto py-16">
                <h2 className="text-3xl font-bold text-center mb-12">Current Openings</h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {positions.map((position, index) => (
                        <div
                            key={index}
                            className=" dark:bg-background_dark bg-background_light shadow-xl rounded-lg p-6 hover:transform hover:-translate-y-2 transition duration-300"
                        >
                            <h3 className="text-[25px] mb-2">{position.title}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                                {position.location} • {position.type}
                            </p>
                            <p className="text-gray-700 dark:text-gray-400 mb-6">{position.description}</p>
                            <button className={` font-comfortaa bg-[#F29254] text-white tracking-widest
                                        flex align-center justify-center py-3 px-5 rounded-md cursor-pointer text-sm font-bold floating-button 
                                        `}
                                onClick={() => navigate(ROUTES.CONTACT.PATH)}
                            >
                                Apply Now
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            {/* Call to Action */}
            <section className="bg-background_light dark:bg-background_dark py-16">
                <div className="container mx-auto px-2 text-center">
                    <h2 className="text-2xl font-bold mb-4">Don’t See the Right Role?</h2>
                    <p className="text-lg text-gray-700 mb-6">
                        We’re always looking for great talent! Feel free to send us your resume and we’ll keep it on file.
                    </p>
                    <div className="flex items-center justify-center">
                        <button className={` font-comfortaa bg-[#F29254] text-white tracking-widest
                                        flex align-center justify-center py-3 px-5 rounded-md cursor-pointer text-sm font-bold floating-button 
                                        `}
                            onClick={() => navigate(ROUTES.CONTACT.PATH)}
                        >
                            Contact Us
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};