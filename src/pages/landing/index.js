import Button from "component/button"
import { useStoreContext } from "context/StoreContext"


const Landing = () => {

  const { connectAccount } = useStoreContext()

  return (
    <div className="">
      <Button title='connect account' handleClick={connectAccount} />
      <p className="w-4/5 mx-auto mt-10">Morra is a hand game where each player simultaneously reveals their hand, extending any number of fingers, and calls out a number. Any player who successfully guesses the total number of fingers revealed by all players combined scores a point.</p>
    </div>
  )
}

export default Landing