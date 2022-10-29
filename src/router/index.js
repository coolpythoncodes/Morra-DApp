import Layout from "component/layout"
import { StoreContextProvider } from "context/StoreContext"
import AcceptTerms from "pages/accept-terms"
import Attach from "pages/attach"
import Deploy from "pages/deploy"
import Landing from "pages/landing"
import Morra from "pages/morra"
import SeeOutcome from "pages/see-outcome"
import SelectRole from "pages/select-role"
import Timeout from "pages/time-out"
import Wager from "pages/wager"
import WaitForAttacher from "pages/wait-for-attacher"
import WaitForTurn from "pages/wait-for-turn"
import WaitingForResults from "pages/waiting-for-results"
import { BrowserRouter, Route, Routes } from "react-router-dom"

const AppRouter = () => {

    return (
        <BrowserRouter>
            <StoreContextProvider>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Landing />} />
                        <Route path='/select-role' element={<SelectRole />} />
                        <Route path='/wager' element={<Wager />} />
                        <Route path='/deploy' element={<Deploy />} />
                        <Route path='/attach' element={<Attach />} />
                        <Route path='/wait-for-attacher' element={<WaitForAttacher />} />
                        <Route path='/wait-for-turn' element={<WaitForTurn />} />
                        <Route path='/waiting-for-results' element={<WaitingForResults />} />
                        <Route path='/accept-terms' element={<AcceptTerms />} />
                        <Route path='/morra' element={<Morra />} />
                        <Route path='/see-outcome' element={<SeeOutcome />} />
                        <Route path='/time-out' element={<Timeout />} />
                    </Route>
                </Routes>
            </StoreContextProvider>
        </BrowserRouter>
    )

}

export default AppRouter