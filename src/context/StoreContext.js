import { createContext, useContext, useReducer } from "react";
import { ACTION_TYPES, storeReducer } from 'reducer/store-reducer';
import { ALGO_MyAlgoConnect as MyAlgoConnect } from '@reach-sh/stdlib';
import { initialState } from "utils/helpers/store.helpers";
import { loadStdlib } from '@reach-sh/stdlib'
import { useNavigate } from "react-router-dom";

const reach = loadStdlib('ALGO')
// reach.setWalletFallback(reach.walletFallback({
//     providerEnv: 'TestNet', MyAlgoConnect
// }));

const StoreContext = createContext()

const StoreContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(storeReducer, initialState)
    const OUTCOME = ['Alice Wins!', 'Bob Wins!', "Draw"]
    const navigate = useNavigate()

    const getBalance = async (acc) => {
        const balAtomic = await reach.balanceOf(acc)
        const bal = reach.formatCurrency(balAtomic, 4)
        return bal
    }

    const acceptWager = async (_wager) => {

        const wager = reach.formatCurrency(_wager, 4)
        return await new Promise(resolveAcceptP => {
            dispatch({
                type: ACTION_TYPES.ATTACH,
                payload: {
                    wager,
                    resolveAcceptP,
                },
            })

        }
        )
    }

    const Player = {
        random: () => reach.hasRandom.random(),
        getFingersAndGuess: async () => {
            navigate('/morra')
            const fingersAndGuess = await new Promise(resolveFingersAndGuessP => {
                dispatch({
                    type: ACTION_TYPES.FINGERS_AND_GUESS,
                    payload: resolveFingersAndGuessP
                })
            })
            
            return [fingersAndGuess[0],fingersAndGuess[1]]
        },
        seeOutcome: (outcome) => {
            console.log('outcome',outcome)
            navigate('/see-outcome')
            const outcomeValue = parseInt(outcome)
            dispatch({
                type: ACTION_TYPES.SEE_OUTCOME,
                payload: OUTCOME[outcomeValue]
            })
        },
        informTimeout: () => {
            console.log('time out')
        }
    }

    const Deployer = {
        ...Player,
        wager: reach.parseCurrency(Number(state.wager)),
        deadline: { ETH: 10, ALGO: 100, CFX: 1000 }[reach.connector],
    }

    const Attacher = {
        ...Player,
        acceptWager,
    }
    return (
        <StoreContext.Provider
            value={{
                state,
                dispatch,
                getBalance,
                reach,
                Deployer,
                Attacher,
                acceptWager,
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