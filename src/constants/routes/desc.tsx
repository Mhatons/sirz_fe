import Layout from "../../components/layout/layout";
import Home from "../../pages/home";

export const ROUTES = {
    LAYOUT: {
        PATH: "/",
        ELEMENT: <Layout />
    },
    Home: {
        PATH: "",
        ELEMENT: <Home />
    },
    ABOUT: {
        PATH: "/home",
        ELEMENT: <Home />
    }
}