import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom'
import * as backend from 'build/index.main.mjs'
import Button from "component/button"
import TextArea from "component/text-area"
import { useStoreContext } from "context/StoreContext"
import toast from "react-hot-toast"

const Attach = () => {
    const [ctcInfo, setCtcInfo] = useState('')
    const { account, Attacher, role } = useStoreContext()
    const navigate = useNavigate()
    const isJson = (_value) => {
        try {
            const value = JSON.parse(_value)
            if (typeof value == 'object') {
                return true
            } else {
                return false
            }
        } catch (error) {
            return false
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (role === 'deployer') toast.error('Deployer can not perform this action')
        if (!isJson(ctcInfo)) {
            toast.error('contract info is invalid')
        } else {
            const contract = account.contract(backend, JSON.parse(ctcInfo))
            const contractInfoAddr = contract.getContractAddress()
            contractInfoAddr.then(addr => {
                if (addr) {
                    backend.Bob(contract, Attacher)
                    navigate('/accept-terms')
                }
            })
                .catch(() => toast.error('Verify contract info failed'))

        }

    }

    useEffect(() => {
        if (role !== 'attacher') navigate('/select-role')
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [role])

    return (
        <form onSubmit={handleSubmit} className="">
            <p>Please paste the contract info to attach to:</p>
            <br />
            <TextArea
                placeholder='Please paste the contract info here'
                handleTextChange={(e) => setCtcInfo(e.target.value)}
                value={ctcInfo}
                required
            />
            <br />

            <Button
                title="Attach"
                disabled={!ctcInfo}
                className="mt-5"
            />
        </form>)
}

export default Attach