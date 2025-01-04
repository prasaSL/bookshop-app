// utils/auth.ts
export const setToken = (token: string) => {
    localStorage.setItem('accessToken', token);
  };
  
  export const getToken = () => {
    return localStorage.getItem('accessToken');
  };
  
  export const clearToken = () => {
    localStorage.removeItem('accessToken');
  };
  
  export const isAuthenticated = () => {
    return !!getToken();
  };
  