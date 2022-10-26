import { createContext, useContext, useReducer } from "react";
import { ALGO_MyAlgoConnect as MyAlgoConnect } from '@reach-sh/stdlib';
import { initialState } from "utils/helpers/store.helpers";
import { loadStdlib } from '@reach-sh/stdlib'
import { ACTION_TYPES, storeReducer } from 'reducer/store-reducer';
import toast from "react-hot-toast";

const reach = loadStdlib('ALGO')
reach.setWalletFallback(reach.walletFallback({
    providerEnv: 'TestNet', MyAlgoConnect
}));

const StoreContext = createContext()

const StoreContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(storeReducer, initialState)

    const connectAccount = async () => {
        dispatch({type:ACTION_TYPES.DISABLE_BUTTON})
        try {
            const acc = await reach.getDefaultAccount()
            dispatch({
                type: ACTION_TYPES.CONNECT_ACCOUNT,
                payload: acc
            })
        } catch (error) {
            toast.error('Could not connect account')
            console.error(error)
            dispatch({
                type: ACTION_TYPES.ENABLE_BUTTON
            })
        }
    }

    const getBalance = async (acc) => {
        const balAtomic = await reach.balanceOf(acc)
        const bal = reach.formatCurrency(balAtomic, 4)
        return bal
    }
    return (
        <StoreContext.Provider 
            value={{ 
                state, 
                dispatch, 
                connectAccount, 
                getBalance, 
                ...state 
                }}>
            {children}
        </StoreContext.Provider>
    )
}

const useStoreContext = () => useContext(StoreContext)

export {
    StoreContextProvider,
    useStoreContext,
}