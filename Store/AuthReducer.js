import { LoginActionConst, LogOutActionConst, CurrentSideBaseStateActionConst } from "./AuthActionConst"

const initialState = {
    loader: false,
    userSuccessData: null,
    userErrotData: null,

}
export default (state = initialState, action) => {
    switch (action.type) {
        case LoginActionConst.USER_LOGIN_REQUEST:
            state = {
                ...state,
                loader: true
            }
            break

        case LoginActionConst.USER_LOGIN_SUCC:
            state = {
                ...state,
                loader: false,
                userSuccessData: action.userSuccessData,
                userErrotData: null
            }
            break
        case LoginActionConst.USER_LOGIN_FAIL:
            state = {
                ...state,
                loader: false,
                userSuccessData: null,
                userErrotData: action.userErrotData
            }
            break
        case LogOutActionConst.LOGOUT_ACTION_CONST:
            state = {
                ...state,
                userErrotData: null,
                loader: false,
                userSuccessData: null
            }
            break


    }
    return state

}