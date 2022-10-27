import Layout from "component/layout"
import Attach from "pages/attach"
import Budget from "pages/budget"
import Landing from "pages/landing"
import SelectRole from "pages/select-role"
import { Toaster } from "react-hot-toast"
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route index element={<Landing />} />
            <Route path='/select-role' element={<SelectRole />} />
            <Route path='/budget' element={<Budget />} />
            <Route path='/attach' element={<Attach />} />
        </Route>
    )
)



const AppRouter = () => {

    return (
        <>
            <Toaster />
            <RouterProvider router={router} />
        </>
    )

}

export default AppRouter