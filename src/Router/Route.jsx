
import { createBrowserRouter } from "react-router-dom";
import Layout from './../Layouts/Layout';
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import SignIn from "../Pages/Forms/SignIn";
import SignUp from "../Pages/Forms/SignUp";
import JobDetails from "../Pages/JobDetails/JobDetails";
import AddJobs from './../Pages/AddJobs/AddJobs';
import MyPostedJobs from "../Pages/MyPostedJobs/MyPostedJobs";
import UpdateJob from "../Pages/UpdateJob/UpdateJob";
const myRouter = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        errorElement: <Error></Error>,
        children: [
            {
                index: true,
                element: <Home></Home>,
            },
            {
                path: "signIn",
                element: <SignIn></SignIn>
            },
            {
                path: "signUp",
                element: <SignUp></SignUp>
            },
            {
                path: "job/:id",
                element: <JobDetails></JobDetails>,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_APP_URL}/job/${params.id}`)
            },
            {
                path: "addJob",
                element: <AddJobs></AddJobs>,
            },
            {
                path: "myPostedJobs",
                element: <MyPostedJobs></MyPostedJobs>
            },
            {
                path: "/updateJob/:id",
                element: <UpdateJob></UpdateJob>,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_APP_URL}/job/${params.id}`)
            },
        ]
    },
]);

export default myRouter;