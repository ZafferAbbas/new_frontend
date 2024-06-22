import { BaseUrl } from "../Constants/BaseUrl";
import { LoginActionConst, LogOutActionConst, CurrentSideBaseStateActionConst } from "./AuthActionConst"





export const UserLoginAction = (email, password) => {
    return async dispatch => {
        dispatch({
            type: LoginActionConst.USER_LOGIN_REQUEST,

        })
    
    };
};


export const UserLogoutAction = info => {
    return async dispatch => {
        dispatch({
            type: LogOutActionConst.LOGOUT_ACTION_CONST,

        })
    };
};


