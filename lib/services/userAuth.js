import api from '../api';

export const signUp = (data) => api.post('/user/api/userSignUp', data);
export const signIn = (data) => api.post('/user/api/userSignIn', data);
export const signOut = () => api.post('/user/api/userSignOut');
export const requestPasswordReset = (data) => api.post('/user/api/requestPasswordReset', data);
export const resetPassword = (token, data) => api.put(`/user/api/resetPassword?token=${token}`, data);
export const changePassword = (data) => api.put('/user/api/changePassword', data);
export const editProfile = (data) => api.put('/user/api/userEditProfile', data);
export const inviteSubUser = (data) => api.post('/user/api/inviteSubUser', data);
export const toggleSubUserStatus = (data) => api.put('/user/api/toggleSubUserStatus', data);
export const getUserInfo = () => api.post('/user/api/getUserInfo');
export const verifyToken = () => api.post(`/user/api/verifyToken`);
