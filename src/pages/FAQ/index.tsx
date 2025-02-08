import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { IMAGES } from "../../assets";
import { useAppSelector } from "../../app/hook";
import { allReduxSliceInfo } from "../../features/reduxSlice";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/routes/desc";

const faqs = [
    {
        question: "What is Haven & Hive Interiors?",
        answer: "Haven & Hive Interiors is a professional interior design company specializing in creating stylish, functional, and comfortable spaces for homes, offices, and commercial properties."
    },
    {
        question: "What services do you offer?",
        answer: "We offer interior design consultations, space planning, Curtains and Window Blinds procurement and installation, furniture selection, home staging, renovation, and complete interior makeovers."
    },
    {
        question: "Do you offer custom interior design solutions?",
        answer: "Yes, we tailor our designs to suit your personal style, needs, and budget, ensuring a unique and elegant space."
    },
    {
        question: "Who can hire Haven & Hive Interiors?",
        answer: "Our services are available to homeowners, real estate developers, businesses, hotels, and anyone looking to enhance their space."
    },
    {
        question: "How do I get started with an interior design project?",
        answer: "You can contact us for a consultation, where we’ll discuss your vision, budget, and timeline before beginning the design process."
    },
    {
        question: "Do you handle both residential and commercial projects?",
        answer: "Yes, we design and transform both residential and commercial spaces to reflect functionality and aesthetics."
    },
    {
        question: "What is the cost of your services?",
        answer: "Pricing varies depending on the scope of work, space size, and customization. Contact us for a detailed quote."
    },
    {
        question: "Do you provide furniture and decor items?",
        answer: "Yes, we source high-quality furniture, decor pieces, and accessories to complement your interior design."
    },
    {
        question: "Can I request a virtual consultation?",
        answer: "Yes, we offer virtual consultations for clients who prefer remote design services."
    },
    {
        question: "How long does an interior design project take?",
        answer: "The duration depends on the project's complexity, size, and required customizations. We provide estimated timelines after the consultation."
    },
    {
        question: "Do you work within a specific budget?",
        answer: "Yes, we offer budget-friendly solutions without compromising quality and aesthetics."
    },
    {
        question: "Do you provide renovation services?",
        answer: "Yes, we handle renovation projects, including space remodeling, painting, flooring, and structural improvements."
    },
    {
        question: "Are your designs sustainable and eco-friendly?",
        answer: "Yes, we incorporate sustainable materials and energy-efficient solutions to create eco-friendly spaces."
    },
    {
        question: "Which locations do you serve?",
        answer: "We are based in Nigeria and serve clients across various cities. Contact us to confirm availability in your area."
    },
    {
        question: "How do I book a consultation?",
        answer: "You can reach out to us via phone, email, or our website to schedule a consultation."
    }
];


export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const { isDarkMode } = useAppSelector(allReduxSliceInfo);
    const navigate = useNavigate()

    const toggleFAQ = (index: number) => {
        setOpenIndex(prevIndex => (prevIndex === index ? null : index));
    };

    return (
        <div>
            <div
                style={{ backgroundImage: `url(${IMAGES.onboardingImg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
            >
                <div className={`sm:pt-32 pt-24 sm:pb-20 pb-10 text-white ${isDarkMode ? "bg-[#000000a8]" : "backgroundGradient"}`}>
                    <div className=" sm:max-w-[60%] max-w-[90%] m-auto text-center">
                        <header className=' sm:text-4xl font-bold text-[22px] pb-4 capitalize text-primary_dark dark:text-secondary_light '>Frequently Asked Questions</header>
                        <div className="sm:text-[20px] text-sm font-comfortaa dark:text-background_light text-background_dark">Checked out some of the most asked questions below</div>
                    </div>
                </div>
            </div>
            <div className="sm:grid py-10 grid-cols-3 gap-12 sm:w-[90%] m-auto">
                <div className=" col-span-1 text-lg font-light max-sm:text-center max-sm:pb-10 ">
                    Don't see the answer you're looking for? <br /> Send us a message via the
                    <b onClick={() => navigate(ROUTES.CONTACT.PATH)} className="text-primary cursor-pointer"> Contact form </b> for further assistance
                </div>
                <div className="space-y-4 col-span-2">
                    {faqs.map((faq, index) => (
                        <div key={index} className=" rounded-lg p-4 bg-gray-50 dark:bg-background_dark">
                            <button
                                className="flex justify-between w-full text-justify text-lg"
                                onClick={() => toggleFAQ(index)}
                            >
                                {faq.question}
                                {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                            </button>
                            {openIndex === index && (
                                <p className="mt-5 text-gray-600 dark:text-gray-400 border-t dark:border-zinc-700">{faq.answer}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
