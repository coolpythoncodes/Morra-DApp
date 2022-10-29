import Button from 'component/button'
import { useStoreContext } from 'context/StoreContext'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { ACTION_TYPES } from 'reducer/store-reducer'

const AcceptTerms = () => {
  const [balance, setBalance] = useState('')
  const { wager, reach, role, resolveAcceptP, account, getBalance, dispatch, isButtonDisabled } = useStoreContext()
  const navigate = useNavigate()

  const acceptTerms = () => {
    dispatch({
      type: ACTION_TYPES.DISABLE_BUTTON
    })
    if (Number(balance) < Number(wager)) {
      toast.error("Insufficient funds to perform this transaction")
      dispatch({
        type: ACTION_TYPES.ENABLE_BUTTON
      })
    } else {
      resolveAcceptP()
      navigate('/wait-for-turn')
      dispatch({
        type: ACTION_TYPES.ENABLE_BUTTON
      })
    }
  }

  useEffect(() => {
    if (role !== 'attacher') navigate('/select-role')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [role])

  useEffect(() => {
    const getWalletBalance = async () => {
      const walletBalance = await getBalance(account)
      setBalance(walletBalance)
    }

    getWalletBalance()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account])
  return (
    <div className="">
      <p>The terms of the game are:</p>
      <br />
      <p>Budget: {wager} {reach.standardUnit}</p>
      <br />
      <Button disabled={isButtonDisabled} title='Accept terms' handleClick={acceptTerms} />
    </div>)
}

export default AcceptTerms