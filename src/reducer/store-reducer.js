export const ACTION_TYPES = {
    DISABLE_BUTTON: 'disable_button',
    ENABLE_BUTTON: 'enable_button',
    CONNECT_ACCOUNT: 'connect_account',
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

        default:
            return state;
    }
}