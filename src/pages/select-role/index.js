import Button from "component/button"
import { useStoreContext } from "context/StoreContext"
import { useNavigate } from "react-router-dom"
import { ACTION_TYPES } from "reducer/store-reducer"

const SelectRole = () => {
  const { dispatch, reach, isButtonDisabled } = useStoreContext()
  const navigate = useNavigate()

  const handleClick = (e) => {
    const role = e.target.name
    dispatch({
      type: ACTION_TYPES.DISABLE_BUTTON
    })
    dispatch({
      type: ACTION_TYPES.SELECT_ROLE,
      payload: role
    })

  }

  return (
    <div>
      <h2 className="text-2xl">Please select a role</h2>

      <div className="mt-10 space-y-5">

        <div>
          <Button 
            name='deployer' 
            handleClick={handleClick} 
            title="Deployer" 
          />
          <p className="mt-2">
            Set the wager, deploy the contract
          </p>
        </div>

        <div>
          <Button title="Attacher" />
          <p className="mt-2">
            Attach to the Deployer's contract
          </p>
        </div>

      </div>


    </div>
  )
}

export default SelectRole