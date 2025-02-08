import Layout from "../../components/layout/layout";
import About from "../../pages/about";
import Career from "../../pages/career";
import Contact from "../../pages/contact";
import FAQ from "../../pages/FAQ";
import Home from "../../pages/home";
import ProjectDetails from "../../pages/projectDetails";
import Projects from "../../pages/projects";
import Referral from "../../pages/referral";
import Services from "../../pages/services";
import Welcome from "../../pages/welcome";

export const ROUTES = {
    LAYOUT: {
        PATH: "/",
        ELEMENT: <Layout />
    },
    WELCOME: {
        PATH: "",
        ELEMENT: <Welcome />
    },
    HOME: {
        PATH: "/home",
        ELEMENT: <Home />
    },
    // sample test page for the user object
    SAMPLE_PAGE: {
        PATH: "/sample",
        ELEMENT: <About />
    },
    ABOUT: {
        PATH: "/about",
        ELEMENT: <About />
    },
    FAQ: {
        PATH: "/faq",
        ELEMENT: <FAQ />
    },
    CONTACT: {
        PATH: "/contact",
        ELEMENT: <Contact />
    },
    SERVICES: {
        PATH: "/services/:title",
        ELEMENT: <Services />
    },
    PROJECTS: {
        PATH: "/projects",
        ELEMENT: <Projects />
    },
    PROJECTDETAILS: {
        PATH: "/project-details/:title",
        ELEMENT: <ProjectDetails />
    },
    CAREER: {
        PATH: "/career",
        ELEMENT: <Career />
    },
    REFERRAL: {
        PATH: "/referral",
        ELEMENT: <Referral />
    },
}