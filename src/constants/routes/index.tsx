import { createBrowserRouter } from "react-router-dom";
import { ROUTES } from "./desc";

interface Iuser {
    name: string
}

const routes = (user: Iuser) =>
    createBrowserRouter([
        {
            path: (ROUTES.LAYOUT.PATH),
            element: (ROUTES.LAYOUT.ELEMENT),
            children: [
                {
                    path: (ROUTES.HOME.PATH),
                    element: (ROUTES.HOME.ELEMENT),
                },
                {
                    path: (ROUTES.SAMPLE_PAGE.PATH),
                    element: (user && ROUTES.SAMPLE_PAGE.ELEMENT),
                },
                {
                    path: (ROUTES.ABOUT.PATH),
                    element: (ROUTES.ABOUT.ELEMENT),
                },
                {
                    path: (ROUTES.CONTACT.PATH),
                    element: (ROUTES.CONTACT.ELEMENT),
                },
                {
                    path: (ROUTES.SERVICES.PATH),
                    element: (ROUTES.SERVICES.ELEMENT),
                },
                {
                    path: (ROUTES.PROJECTS.PATH),
                    element: (ROUTES.PROJECTS.ELEMENT),
                },
            ]
        }
    ])

export default routes;