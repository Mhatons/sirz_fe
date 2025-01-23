// import { useEffect, useRef, useState } from "react";
import Hero from "./components/hero";
import CoreValues from "./components/ourValues";
import Solutions from "./components/solutions";
import OnboardingSteps from "./components/onboarding";
import OurAudience from "./components/ourAudience";
import OurMission from "./components/ourMission";
import AboutUs from "./components/aboutUs";
import OurService from "./components/ourServices";

export default function Home() {

    // Function to handle scroll animations for sections
    // const useIntersectionObserver = () => {
    //     const [visibleSections, setVisibleSections] = useState<string[]>([]);
    //     const refMap = useRef<Map<string, HTMLElement>>(new Map());

    //     useEffect(() => {
    //         const observer = new IntersectionObserver(
    //             (entries) => {
    //                 entries.forEach((entry) => {
    //                     const sectionId = entry.target.id;
    //                     if (entry.isIntersecting) {
    //                         setVisibleSections((prev) => [...new Set([...prev, sectionId])]);
    //                     }
    //                 });
    //             },
    //             { threshold: 0.5 }
    //         );

    //         refMap.current.forEach((section) => observer.observe(section));

    //         return () => observer.disconnect();
    //     }, []);

    //     const registerRef = (id: string, ref: HTMLElement | null) => {
    //         if (ref) refMap.current.set(id, ref);
    //     };

    //     return { visibleSections, registerRef };
    // };

    // const { visibleSections, registerRef } = useIntersectionObserver();

    return (
        <div className="">
            <Hero />
            <CoreValues />
            <Solutions />
            <OnboardingSteps />
            <OurAudience />
            <AboutUs />
            <OurMission />
            <OurService />
        </div>
    );
}
