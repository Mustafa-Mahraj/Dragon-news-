import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout></HomeLayout>
    },
    {
        path: '/news',
        element: <h1>news layout</h1>
    },
    {
        path: '/login',
        element: <h1>login</h1>
    },
    {
        path: '*',
        element: <h1>ERROR</h1>
    }
])

export default Router;