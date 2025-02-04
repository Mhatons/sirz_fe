
// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { ServiceDetails } from "../../../constants/serviceMenu";
// import { useNavigate } from "react-router-dom";


// export default function OurService() {
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const navigate = useNavigate();

//     const handleServiceClick = (selectedService: string) => {
//         navigate(`/services/${selectedService}`);
//     }

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setCurrentIndex((prevIndex) => (prevIndex + 1) % ServiceDetails.length);
//         }, 3000); // Change every 3 seconds
//         return () => clearInterval(interval);
//     }, []);

//     return (
//         <section className="relative w-full overflow-hidden dark:bg-background_dark bg-background_light py-16">
//             <div className="max-w-6xl mx-auto px-6 text-center">
//                 <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-6">Our Services</h2>
//                 <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">
//                     Elevate your fashion skills with expert training and business mentorship.
//                 </p>

//                 <div className="relative flex items-center justify-center  ">
//                     <motion.div
//                         className="flex space-x-2"
//                         animate={{ x: `-${currentIndex * 340}px` }} // Moves left
//                         transition={{ ease: "linear", duration: 1.5 }} // Smooth transition
//                     >
//                         {ServiceDetails.concat(ServiceDetails).map((service, index) => (
//                             <motion.div
//                                 key={index}
//                                 onClick={() => handleServiceClick(service.title)}
//                                 className={`w-[300px] min-h-[220px] h-auto p-2 shadow-lg rounded-3xl transition-transform duration-300 ${index % ServiceDetails.length === currentIndex ? "scale-110 bg-purple-600 p-1 shadow-2xl" : " scale-90 opacity-50"
//                                     }`}
//                             >
//                                 {/* <div className="flex justify-center mb-4">{service.icon}</div> */}
//                                 <div className=" absolute z-10 bg-[#000000a8] pt-5 top-0 right-0 left-0 bottom-0 rounded-3xl">
//                                     <h3 className="text-xl font-semibold text-secondary_light">{service.title}</h3>
//                                     <p className="text-gray-100 w-[90%] m-auto text-[13px] text-justify mt-2">{service.description}</p>
//                                 </div>
//                                 <img src={service?.image} alt="" className="w-full absolute top-0 left-0 ri\ bo\ object-cover h-full rounded-3xl" />
//                             </motion.div>
//                         ))}
//                     </motion.div>
//                 </div>
//             </div>
//         </section>
//     );
// }





// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";
// import { ServiceDetails } from "../../../constants/serviceMenu";

// export default function OurService() {
//     const [currentIndex, setCurrentIndex] = useState(2); // Middle card in position
//     const navigate = useNavigate();
//     const totalCards = ServiceDetails.length;
//     const visibleCards = 5; // Keep 5 cards visible in a stacked view

//     const handleServiceClick = (selectedService: string) => {
//         navigate(`/services/${selectedService}`);
//     };

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setCurrentIndex((prevIndex) => (prevIndex + 1) % totalCards);
//         }, 3000); // Change every 3 seconds

//         return () => clearInterval(interval);
//     }, [totalCards]);

//     return (
//         <section className="relative w-full overflow-hidden dark:bg-background_dark bg-background_light py-16">
//             <div className="max-w-6xl mx-auto px-6 text-center">
//                 <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-6">Our Services</h2>
//                 <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">
//                     Elevate your fashion skills with expert training and business mentorship.
//                 </p>

//                 <div className="relative flex items-center justify-center">
//                     <div className="relative flex justify-center w-[900px] h-[250px]">
//                         {ServiceDetails.concat(ServiceDetails).map((service, index) => {
//                             const position = (index - currentIndex + totalCards) % totalCards;
//                             const isActive = position === 2; // Middle card

//                             return (
//                                 <motion.div
//                                     key={index}
//                                     onClick={() => handleServiceClick(service.title)}
//                                     initial={{ opacity: 0, scale: 0.9 }}
//                                     animate={{
//                                         opacity: isActive ? 1 : 0.6,
//                                         scale: isActive ? 1.1 : 0.9,
//                                         x: position * 60, // Shift overlapping effect
//                                     }}
//                                     transition={{ duration: 1 }}
//                                     className="absolute w-[300px] min-h-[220px] h-auto p-2 shadow-lg rounded-3xl cursor-pointer"
//                                     style={{
//                                         zIndex: isActive ? 10 : 5 - Math.abs(2 - position),
//                                     }}
//                                 >
//                                     <div className="absolute z-10 bg-[#000000a8] pt-5 top-0 right-0 left-0 bottom-0 rounded-3xl">
//                                         <h3 className="text-xl font-semibold text-secondary_light">{service.title}</h3>
//                                         <p className="text-gray-100 w-[90%] m-auto text-[13px] text-justify mt-2">
//                                             {service.description}
//                                         </p>
//                                     </div>
//                                     <img
//                                         src={service?.image}
//                                         alt={service.title}
//                                         className="w-full absolute top-0 left-0 object-cover h-full rounded-3xl"
//                                     />
//                                 </motion.div>
//                             );
//                         })}
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }



import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ServiceDetails } from "../../../constants/serviceMenu";

export default function OurService() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const navigate = useNavigate();
    const totalCards = ServiceDetails.length;
    const visibleCards = 5; // Number of visible cards

    const handleServiceClick = (selectedService: string) => {
        navigate(`/services/${selectedService}`);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % totalCards);
        }, 3000); // Change every 3 seconds

        return () => clearInterval(interval);
    }, [totalCards]);

    return (
        <section className="relative w-full overflow-hidden dark:bg-background_dark bg-background_light py-16">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-6">Our Services</h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">
                Bringing Elegance & Functionality to Every Space with Innovation & Expertise
                </p>

                <div className="relative flex items-center justify-center w-full ">
                    <div className="relative flex justify-center w-[900px] h-[250px]">
                        {ServiceDetails.concat(ServiceDetails).map((service, index) => {
                            const relativeIndex = (index - currentIndex + totalCards) % totalCards;
                            const isActive = relativeIndex === Math.floor(visibleCards / 2); // Center card

                            // Ensure only `visibleCards` are shown
                            if (relativeIndex >= visibleCards) return null;

                            return (
                                <motion.div
                                    key={index}
                                    onClick={() => handleServiceClick(service.title)}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{
                                        opacity: isActive ? 1 : 0.4, // Dim non-active cards
                                        scale: isActive ? 1.1 : 0.9, // Zoom in active card
                                        x: (relativeIndex - Math.floor(visibleCards / 2)) * 120, // Positioning
                                        filter: isActive ? "blur(0px)" : "blur(0px)", // Blur non-active cards
                                    }}
                                    transition={{ duration: 1 }}
                                    className="absolute sm:w-[350px] w-[300px] min-h-[220px] h-auto p-2 shadow-lg rounded-3xl cursor-pointer"
                                    style={{
                                        zIndex: isActive ? 10 : 5 - Math.abs(Math.floor(visibleCards / 2) - relativeIndex),
                                    }}
                                >
                                    <div className={`absolute z-10 ${isActive ? "bg-[#123a47d2]" : "bg-[#184c5c]"} pt-5 top-0 right-0 left-0 bottom-0 rounded-3xl`}>
                                        <h3 className="text-xl font-semibold text-secondary_light">{service.title}</h3>
                                        <p className="text-gray-100 w-[90%] m-auto text-[13px] text-center mt-2">
                                            {service.description}
                                        </p>
                                    </div>
                                    {/* <img
                                        src={service?.image}
                                        alt={service.title}
                                        className="w-full absolute top-0 left-0 object-cover h-full rounded-3xl"
                                    /> */}
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}






