import { createContext, useContext, useReducer } from "react";
import { storeReducer } from 'reducer/store-reducer';
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

    const Player = {
        random: () => reach.hasRandom.random(),
        getFinger: ()=> {
            return 4
        },
        getGuess: ()=>{
            return 5
        },
        seeOutcome: (outcome)=>{
            console.log('outcome')
        },
        informTimeout: ()=> {
            console.log('time out')
        }
    }

    const Deployer = {
        ...Player,
        wager: reach.parseCurrency(Number(state.wager)),
        deadline: { ETH: 10, ALGO: 100, CFX: 1000 }[reach.connector],
    }
    return (
        <StoreContext.Provider 
            value={{ 
                state, 
                dispatch, 
                getBalance, 
                reach,
                Deployer,
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