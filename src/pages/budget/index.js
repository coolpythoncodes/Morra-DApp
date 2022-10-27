import { useEffect, useState } from "react"
import Button from "component/button"
import { useStoreContext } from "context/StoreContext"
import { useNavigate } from "react-router-dom"
import Input from "component/input"
import toast from "react-hot-toast"

const Budget = () => {
    const [balance, setBalance] = useState()
    const [wager, setWager] = useState('')
    const { account, getBalance, role, reach } = useStoreContext()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        if(balance < wager) toast("Insufficient funds")

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