// /lib/services/product.js
import api from '../api';

export const createProduct = (data) => api.post('/product/api/productCreate', data);
export const getUserProductsByCategory = (data) => api.post('/product/api/getUserProductsByCategory', data);
export const getAllUserProducts = () => api.post('/product/api/getAllUserProducts');
export const findItemById = (data) => api.post('/product/api/findItemById', data);
export const setProductStatus = (data) => api.put('/product/api/setProductStatus', data);
export const deleteItemById = (data) => api.delete('/product/api/deleteItemById', { data });
export const updateProductItem = (data) => api.put('/product/api/updateProductItem', data);
export const generateLinkForActiveProducts = (query) => api.get(`/product/api/generateLinkForActiveProducts?category=${query}`);
export const generateQRCodeForLink = (data) => api.post('/product/api/generateQRCodeForLink', data);
export const generateQRCodePDF = async (data) => {
    const response = await api.post('/product/api/generateQRCodePDF', data, {
      responseType: 'blob',
    });
    return response;
}


export const getActiveProductsByCategory = (categories) => api.post(`/product/api/active?category=${categories}`);
  
export const reorderProducts = async (reorderedProducts) => {
  return await api.put('/product/api/reorderProducts', reorderedProducts );
};
export const liveSearch = (data) => api.post('/product/api/liveSearch', data);
