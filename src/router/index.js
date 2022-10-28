import Layout from "component/layout"
import AcceptTerms from "pages/accept-terms"
import Attach from "pages/attach"
import Deploy from "pages/deploy"
import Landing from "pages/landing"
import SelectRole from "pages/select-role"
import Wager from "pages/wager"
import WaitForAttacher from "pages/wait-for-attacher"
import WaitForTurn from "pages/wait-for-turn"
import { Toaster } from "react-hot-toast"
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route index element={<Landing />} />
            <Route path='/select-role' element={<SelectRole />} />
            <Route path='/wager' element={<Wager />} />
            <Route path='/deploy' element={<Deploy />} />
            <Route path='/attach' element={<Attach />} />
            <Route path='/wait-for-attacher' element={<WaitForAttacher />} />
            <Route path='/wait-for-turn' element={<WaitForTurn />} />
            <Route path='/accept-terms' element={<AcceptTerms />} />
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