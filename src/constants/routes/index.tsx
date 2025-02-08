import { createBrowserRouter } from "react-router-dom";
import { ROUTES } from "./desc";

interface Iuser {
    name: string
}

const routes = (user: Iuser) =>
    createBrowserRouter([

        {
            path: (ROUTES.WELCOME.PATH),
            element: (ROUTES.WELCOME.ELEMENT),
        },
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
                    path: (ROUTES.FAQ.PATH),
                    element: (ROUTES.FAQ.ELEMENT),
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
                {
                    path: (ROUTES.PROJECTDETAILS.PATH),
                    element: (ROUTES.PROJECTDETAILS.ELEMENT),
                },
                {
                    path: (ROUTES.CAREER.PATH),
                    element: (ROUTES.CAREER.ELEMENT),
                },
                {
                    path: (ROUTES.REFERRAL.PATH),
                    element: (ROUTES.REFERRAL.ELEMENT),
                },
            ]
        }
    ])

export default routes;