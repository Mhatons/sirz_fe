import Layout from "../../components/layout/layout";
import About from "../../pages/about";
import Contact from "../../pages/contact";
import OurBlogPage from "../../pages/blog";
import Home from "../../pages/home";
import Projects from "../../pages/projects";
import Branding from "../../pages/services/branding";
import DigitalMarketing from "../../pages/services/digitalMarketing";
import Ecommerce from "../../pages/services/ecommerce";
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
    BLOG: {
        PATH: "/blog",
        ELEMENT: <OurBlogPage />
    },
    CONTACT: {
        PATH: "/contact",
        ELEMENT: <Contact />
    },
    SERVICE_BRANDING: {
        PATH: "/services-branding",
        ELEMENT: <Branding />
    },
    SERVICE_DIGITALMARKETING: {
        PATH: "/services-digital-marketing",
        ELEMENT: <DigitalMarketing />
    },
    SERVICE_ECOMMERCE: {
        PATH: "/services-ecommerce",
        ELEMENT: <Ecommerce />
    },
    PROJECTS: {
        PATH: "/projects",
        ELEMENT: <Projects />
    },
}