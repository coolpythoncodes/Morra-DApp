import { createContext, useContext, useReducer } from "react";
import toast from "react-hot-toast";
import { ACTION_TYPES, storeReducer } from 'reducer/store-reducer';
import { ALGO_MyAlgoConnect as MyAlgoConnect } from '@reach-sh/stdlib';
import { initialState } from "utils/helpers/store.helpers";
import { loadStdlib } from '@reach-sh/stdlib'

const reach = loadStdlib('ALGO')
reach.setWalletFallback(reach.walletFallback({
    providerEnv: 'TestNet', MyAlgoConnect
}));

const StoreContext = createContext()

const StoreContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(storeReducer, initialState)

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
                getBalance, 
                reach,
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