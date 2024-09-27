import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const useGetBookings = () => {
    const [loading, setLoading]= useState(false);
    const [bookings, setBookings] = useState([] as any);

    useEffect(()=>{
        const getBookings = async() => {
            setLoading(true);
            try{
                const response = await fetch("http://localhost:8080/api/booking/getAll");
                const data = await response.json();
                console.log(data);
                if(data.error){
                    throw new Error(data.error);
                }
                setBookings(data); 
            }
            catch(error){
                toast.error((error as Error).message);
            }
            finally{
                setLoading(false);
            }
        };
        getBookings();
    },[]);

    return { loading, bookings };
};

export default useGetBookings;