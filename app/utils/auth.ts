const isValidToken = (token: string | null): boolean => {
  console.log('Checking token validity:', token ? 'Token exists' : 'No token');
  return token !== null && token !== '';
};

export const setToken = (token: string): void => {
  try {
    console.log('Setting token:', token ? 'Token provided' : 'No token provided');
    localStorage.setItem('accessToken', token);
    console.log('Token set successfully');
  } catch (error) {
    console.error('Error setting token:', error);
  }
};

export const getToken = (): string | null => {
  try {
    const token = localStorage.getItem('accessToken');
    console.log('Getting token:', token ? 'Token found' : 'No token found');
    return token;
  } catch (error) {
    console.error('Error getting token:', error);
    return null;
  }
};

export const clearToken = (): void => {
  try {
    console.log('Clearing token');
    localStorage.removeItem('accessToken');
    console.log('Token cleared successfully');
  } catch (error) {
    console.error('Error clearing token:', error);
  }
};

export const isAuthenticated = (): boolean => {
  const token = getToken();
  const isValid = isValidToken(token);
  console.log('Authentication status:', isValid ? 'Authenticated' : 'Not authenticated');
  return isValid;
};