import Layout from "../../components/layout/layout";
import About from "../../pages/about";
import Contact from "../../pages/contact";
import Home from "../../pages/home";
import Services from "../../pages/services";
import CurtainsBlinds from "../../pages/services/components/curtainsBlinds";
import DesignConsultation from "../../pages/services/components/designConsultation";
import FlooringSolutions from "../../pages/services/components/flooring";
import HomeOfficeFurniture from "../../pages/services/components/furniture";
import IndustrialCleaning from "../../pages/services/components/industrialCleaning";
import MaintenanceTreatment from "../../pages/services/components/maintenanceTreatment";
import Pop from "../../pages/services/components/pop";
import ProfessionalAdvice from "../../pages/services/components/professionalAdvice";
import ProjectManagement from "../../pages/services/components/projectManagement";
import Signage from "../../pages/services/components/signage";
import SpacePlanning from "../../pages/services/components/spacePlanning";
import WallpaperPainting from "../../pages/services/components/wallpaperPainting";

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
        PATH: "/services",
        ELEMENT: <Services />
    },

    // services IndustrialCleaning
    INDUSTRIAL_CLEANING: {
        PATH: "/services-industial-cleaning",
        ELEMENT: <IndustrialCleaning />
    },
    MAINTENANCE_TREATMENT: {
        PATH: "/services-maintenance-treatment",
        ELEMENT: <MaintenanceTreatment />
    },
    HOME_OFFICE_FURNITURE: {
        PATH: "/services-home-and-office-furniture",
        ELEMENT: <HomeOfficeFurniture />
    },
    SIGNAGE: {
        PATH: "/services-custom-signage",
        ELEMENT: <Signage />
    },
    WALLPAPER_PAINTING: {
        PATH: "/services-wallpaper-and-painting",
        ELEMENT: <WallpaperPainting />
    },
    CURTAINS_AND_BLINDS: {
        PATH: "/services-curtains-and-windowblinds",
        ELEMENT: <CurtainsBlinds />
    },
    DESIGN_CONSULTATION: {
        PATH: "/services-design-consultation",
        ELEMENT: <DesignConsultation />
    },
    SPACE_PLANNING: {
        PATH: "/services-space-planning",
        ELEMENT: <SpacePlanning />
    },
    FLOORING_SOLUTIONS: {
        PATH: "/services-flooring-solutions",
        ELEMENT: <FlooringSolutions />
    },
    POP: {
        PATH: "/services-pop-installations",
        ELEMENT: <Pop />
    },
    PROJECT_MANAGEMENT: {
        PATH: "/services-project-management",
        ELEMENT: <ProjectManagement />
    },
    PROFESSIONAL_ADVICE: {
        PATH: "/services-professional-advice",
        ELEMENT: <ProfessionalAdvice />
    },
}