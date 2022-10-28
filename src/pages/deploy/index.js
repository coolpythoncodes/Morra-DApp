import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useStoreContext } from "context/StoreContext"
import * as backend from 'build/index.main.mjs'
import Button from "component/button"
import toast from "react-hot-toast"
import { ACTION_TYPES } from "reducer/store-reducer"

const Deploy = () => {
    const { account, wager, reach, dispatch, Deployer, role } = useStoreContext()
    const navigate = useNavigate()

    const deploy = async () => {
        const ctc = account.contract(backend)
        const notification = toast.loading('Deploying... please wait')
        try {
            backend.Alice(ctc, Deployer)
            const ctcInfo = JSON.stringify(await ctc.getInfo(), null, 2)
            dispatch({
                type: ACTION_TYPES.DEPLOY,
                payload: ctcInfo
            })
            toast.success('Deployment was successful', {
                id: notification
            })
            navigate('/wait-for-attacher')
        } catch (error) {
            toast.error('something went wrong', {
                id: notification
            })
        }
    }
    useEffect(() => {
        if (role !== 'deployer') navigate('/select-role')
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [role])

    return (
        <div>
            <p className="mb-5">Wager(pay to deploy): {`${wager} ${reach.standardUnit}`}</p>
            <Button title='Deploy' handleClick={deploy} />
        </div>
    )
}

export default Deploy



        // const ctc = account.contract(backend)
        // const notification = toast.loading('Deploying... please wait')
        // try {
        //     backend.Alice(ctc, Deployer)
        //     const ctcInfo = JSON.stringify(await ctc.getInfo(), null, 2)
        //     toast.success('Deployment was successful',{
        //         id: notification
        //     })
        //     navigate('/wait-for-attacher')
        //     dispatch({
        //         type:ACTION_TYPES.SET_WAGER,
        //         payload: wager
        //     })
        // } catch (error) {
        //     console.error(error)
        //     toast.error("Something went wrong",{
        //         id: notification
        //     })
        // }