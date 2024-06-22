// /lib/useAuth.js
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import api from './api'; // Assuming you have your axios instance here

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await api.get('/user/api/checkAuth'); // Endpoint to check if user is authenticated
        if (response.data.isAuthenticated) {
          setIsAuthenticated(true);
        } else {
          router.push('/login'); // Redirect to login if not authenticated
        }
      } catch (error) {
        router.push('/login');
      }
    };

    checkAuth();
  }, [router]);

  return isAuthenticated;
};

export default useAuth;
