import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const useGetService = () => {
    const [loading, setLoading]= useState(false);
    const [services, setServices] = useState([] as any);

    useEffect(() => {
        const getService = async() => {
            setLoading(true);
            try{
                console.log("Hi1");
                const response = await fetch("http://localhost:8080/api/service/getall");
                console.log("Hi2");
                const data = await response.json();
                console.log(data);
                if(data.error){
                    throw new Error(data.error);
                }
                setServices(data); 
            }
            catch(error){
                toast.error((error as Error).message);
            }
            finally{
                setLoading(false);
            }
        }
        getService();
    },[]);

    return { loading, services };
}

export default useGetService;
