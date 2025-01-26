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

                // SERVICE COMPONENTS
                {
                    path: (ROUTES.INDUSTRIAL_CLEANING.PATH),
                    element: (ROUTES.INDUSTRIAL_CLEANING.ELEMENT),
                },
                {
                    path: (ROUTES.MAINTENANCE_TREATMENT.PATH),
                    element: (ROUTES.MAINTENANCE_TREATMENT.ELEMENT),
                },
                {
                    path: (ROUTES.HOME_OFFICE_FURNITURE.PATH),
                    element: (ROUTES.HOME_OFFICE_FURNITURE.ELEMENT),
                },
                {
                    path: (ROUTES.SIGNAGE.PATH),
                    element: (ROUTES.SIGNAGE.ELEMENT),
                },
                {
                    path: (ROUTES.WALLPAPER_PAINTING.PATH),
                    element: (ROUTES.WALLPAPER_PAINTING.ELEMENT),
                },
                {
                    path: (ROUTES.CURTAINS_AND_BLINDS.PATH),
                    element: (ROUTES.CURTAINS_AND_BLINDS.ELEMENT),
                },
                {
                    path: (ROUTES.DESIGN_CONSULTATION.PATH),
                    element: (ROUTES.DESIGN_CONSULTATION.ELEMENT),
                },
                {
                    path: (ROUTES.SPACE_PLANNING.PATH),
                    element: (ROUTES.SPACE_PLANNING.ELEMENT),
                },
                {
                    path: (ROUTES.FLOORING_SOLUTIONS.PATH),
                    element: (ROUTES.FLOORING_SOLUTIONS.ELEMENT),
                },
                {
                    path: (ROUTES.POP.PATH),
                    element: (ROUTES.POP.ELEMENT),
                },
                {
                    path: (ROUTES.PROJECT_MANAGEMENT.PATH),
                    element: (ROUTES.PROJECT_MANAGEMENT.ELEMENT),
                },
                {
                    path: (ROUTES.PROFESSIONAL_ADVICE.PATH),
                    element: (ROUTES.PROFESSIONAL_ADVICE.ELEMENT),
                },
            ]
        }
    ])

export default routes;