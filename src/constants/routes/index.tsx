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
                    path: (ROUTES.Home.PATH),
                    element: (ROUTES.Home.ELEMENT),
                }
            ]
        }
    ])

export default routes;