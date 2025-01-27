import Layout from "../../components/layout/layout";
import About from "../../pages/about";
import Contact from "../../pages/contact";
import Home from "../../pages/home";
import Projects from "../../pages/projects";
import Services from "../../pages/services";

export const ROUTES = {
    LAYOUT: {
        PATH: "/",
        ELEMENT: <Layout />
    },
    HOME: {
        PATH: "",
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
}