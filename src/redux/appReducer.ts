const initialState = {
    isLoading: false,
    isAlert: false,
}

const SHOW_LOADER = 'SHOW_LOADER';
const HIDE_LOADER = 'HIDE_LOADER';

const SHOW_ALERT = 'SHOW_ALERT';
const HIDE_ALERT = 'HIDE_ALERT';

export const appReducer = (state = initialState, action: {type: string, payload: boolean}) => {
    switch (action.type) {
        case SHOW_LOADER:
            return {...state, isLoading: true}
    
        case HIDE_LOADER:
            return {...state, isLoading: false}

        case SHOW_ALERT:
            return {...state, isAlert: true}
    
        case HIDE_ALERT:
            return {...state, isAlert: false}

        default:
            return state;
    }
}

export const showLoaderAction = () => ({type: SHOW_LOADER});
export const hideLoaderAction = () => ({type: HIDE_LOADER});

export const showAlertAction = () => ({type: SHOW_ALERT});
export const hideAlertAction = () => ({type: HIDE_ALERT});