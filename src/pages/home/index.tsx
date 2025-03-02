import Hero from "./components/hero";
import OurProjects from "./components/projects";
import WhoAreWe from "./components/whoWeAre";
import OurExpertise from "./components/ourExpertise";
import WhySirz from "./components/whySirz";
import SirzIsGreat from "./components/sirzIsGreat";
import OurBlog from "./components/ourBlog";
import GetInTouch from "./components/getInTouch";
import CustomerReviews from "./components/customerReviews";
import Services from "./components/servicesCards";

export default function Home() {
    return (
        <div className="">
            <Hero />
            <Services />
            <WhoAreWe />
            <OurExpertise />
            <WhySirz />
            <SirzIsGreat />
            <OurProjects />
            <OurBlog />
            <GetInTouch />
            <CustomerReviews />
        </div>
    );
}
