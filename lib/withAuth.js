import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { verifyToken } from './services/userAuth';
import Loader from "@/components/loader"; // Adjust the import path as necessary

const withAuth = (WrappedComponent) => {
    return (props) => {
        const router = useRouter();
        const [loading, setLoading] = useState(true);

        useEffect(() => {
            const checkToken = async () => {
                try {
                    const response = await verifyToken();
                    if (response.status === 200) {
                        setLoading(false);
                    }
                } catch (error) {
                    router.push('/signin');
                }
            };

            checkToken();
        }, [router]);

        if (loading) {
            return <Loader />; // Use the Loader component while checking the token
        }

        return <WrappedComponent {...props} />;
    };
};

export default withAuth;
