import Button from "component/button"
import { useStoreContext } from "context/StoreContext"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"
import { ACTION_TYPES } from "reducer/store-reducer"


const Landing = () => {
  const { dispatch, reach, isButtonDisabled } = useStoreContext()
  const navigate = useNavigate()
  // const startingBalance = reach.parseCurrency(100)

  const connectAccount = async () => {
    dispatch({ type: ACTION_TYPES.DISABLE_BUTTON })
    try {
      const acc = await reach.getDefaultAccount()
      // const acc = await reach.newTestAccount(startingBalance)

      dispatch({
        type: ACTION_TYPES.CONNECT_ACCOUNT,
        payload: acc,
      })
      navigate('/select-role')
    } catch (error) {
      toast.error('Could not connect account')
      dispatch({
        type: ACTION_TYPES.ENABLE_BUTTON
      })
    }
  }
  return (
    <div className="">
      <Button
        title='connect account'
        disabled={isButtonDisabled}
        handleClick={connectAccount}
      />
      <p className="w-4/5 mx-auto mt-10">Morra is a hand game where each player simultaneously reveals their hand, extending any number of fingers, and calls out a number. Any player who successfully guesses the total number of fingers revealed by all players combined scores a point.</p>
    </div>
  )
}

export default Landing