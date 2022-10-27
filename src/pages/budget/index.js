import { useEffect, useState } from "react"
import Button from "component/button"
import { useStoreContext } from "context/StoreContext"
import { useNavigate } from "react-router-dom"
import Input from "component/input"
import toast from "react-hot-toast"
import * as backend from 'build/index.main.mjs'
import { ACTION_TYPES } from "reducer/store-reducer"

const Budget = () => {
    const [balance, setBalance] = useState()
    const [wager, setWager] = useState('')
    const { account, getBalance, role, reach, dispatch, Deployer } = useStoreContext()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(Number(balance) < Number(wager)) toast.error("Insufficient funds")

        const ctc = account.contract(backend)
        const notification = toast.loading('Deploying... please wait')
        try {
            backend.Alice(ctc, Deployer)
            const ctcInfo = JSON.stringify(await ctc.getInfo(), null, 2)
            toast.success('Deployment was successful',{
                id: notification
            })
            navigate('/wait-for-attacher')
            dispatch({
                type:ACTION_TYPES.DEPLOY,
                payload: ctcInfo
            })
        } catch (error) {
            console.error(error)
            toast.error("Something went wrong",{
                id: notification
            })
        }

    }

    useEffect(() => {
        const getWalletBalance = async () => {
            const walletBalance = await getBalance(account)
            setBalance(walletBalance)
        }

        getWalletBalance()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [account])

    useEffect(() => {
        if (role !== 'deployer') navigate('/attach')
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [role])

    return (
        <form onSubmit={handleSubmit} className=''>
            <div className="flex items-center space-x-3">
                <Input 
                placeholder='Enter wager'
                type='number'
                value={wager}
                handleChangeText={(e)=>setWager(e.target.value)}
                required
                />
                <span >{reach.standardUnit}</span>
            </div>
            <br />
            <Button title='Set wager' />
        </form>
    )
}

export default Budget