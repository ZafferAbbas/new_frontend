// import { useRouter } from 'next/navigation';
// import { useEffect, useState } from 'react';
// import { verifyToken } from './services/userAuth';

// const withAuth = (WrappedComponent) => {
//     return (props) => {
//         const router = useRouter();
//         const [loading, setLoading] = useState(true);

//         useEffect(() => {
//             const checkToken = async () => {
//                 try {
//                     const response = await verifyToken();
//                     if (response.status === 200) {
//                         setLoading(false);
//                     }
//                 } catch (error) {
//                     router.push('/signin');
//                 }
//             };

//             checkToken();
//         }, [router]);

//         if (loading) {
//             return <div>Loading...</div>; // You can replace this with a spinner or a blank screen
//         }

//         return <WrappedComponent {...props} />;
//     };
// };

// export default withAuth;
