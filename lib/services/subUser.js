import api from '../api';

export const signIn = (data) => api.post('/subuser/api/subUserSignIn', data);
export const signOut = () => api.post('/subuser/api/subUserSignOut');
export const requestPasswordReset = (data) => api.post('/subuser/api/requestPasswordReset', data);
export const resetPassword = (token, data) => api.put(`/subuser/api/resetPassword/${token}`, data);
export const changePassword = (data) => api.put('/subuser/api/changePassword', data);
export const getSubUserById = (data) => api.post('/subuser/api/getSubUserById', data);
