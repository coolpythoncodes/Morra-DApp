export const ACTION_TYPES = {
    DISABLE_BUTTON: 'disable_button',
    ENABLE_BUTTON: 'enable_button',
    CONNECT_ACCOUNT: 'connect_account',
    SELECT_ROLE: 'select_role',
    SET_WAGER: 'set_wager',
    DEPLOY: 'deploy',
    ATTACH: 'attach',
    SUBMIT_PLAY: 'submit_play',
    GET_GUESS: 'get_guess',
    SEE_OUTCOME: 'see_outcome',
    FINGERS_AND_GUESS: 'fingers_and_guess',
    PLAY_GUESS: 'play_guess',
    PLAY_FINGER: 'play_finger',
    CLEAR_GAME: 'clear_game'
}


export const storeReducer = (state, action) => {
    const { type, payload } = action
    switch (type) {
        case ACTION_TYPES.DISABLE_BUTTON: {
            return {
                ...state,
                isButtonDisabled: true,
            }
        }
        case ACTION_TYPES.ENABLE_BUTTON: {
            return {
                ...state,
                isButtonDisabled: false
            }
        }

        case ACTION_TYPES.CONNECT_ACCOUNT: {
            return {
                ...state,
                isButtonDisabled: false,
                account: payload
            }
        }

        case ACTION_TYPES.SELECT_ROLE: {
            return {
                ...state,
                role: payload
            }
        }

        case ACTION_TYPES.SET_WAGER: {
            return {
                ...state,
                wager: payload
            }
        }

        case ACTION_TYPES.DEPLOY: {
            return {
                ...state,
                ctcInfo: payload,
            }
        }

        case ACTION_TYPES.ATTACH: {
            return {
                ...state,
                wager: payload.wager,
                resolveAcceptP: payload.resolveAcceptP
            }
        }

        case ACTION_TYPES.PLAY_FINGER: {
            return {
                ...state,
                finger: payload,
            }
        }
        
        case ACTION_TYPES.PLAY_GUESS: {
            return {
                ...state,
                guess: payload,
            }
        }

        case ACTION_TYPES.SUBMIT_PLAY: {
            return{
                ...state,
                resolveFingersAndGuessP: payload
            }
        }

        case ACTION_TYPES.SEE_OUTCOME: {
            return {
                ...state,
                seeOutcome: payload
            }
        }

        case ACTION_TYPES.FINGERS_AND_GUESS: {
            return {
                ...state,
                resolveFingersAndGuessP: payload
            }
        }

        case ACTION_TYPES.CLEAR_GAME: {
            return {
                ...state,
                finger: '',
                guess: ''
            }
        }

        default:
            return state;
    }
}