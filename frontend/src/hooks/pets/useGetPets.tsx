import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const useGetPets = () => {
    const [loading, setLoading]= useState(false);
    const [pets, setPets] = useState([] as any);

    useEffect(()=>{
        const getPets = async() => {
            setLoading(true);
            try{
                const response = await fetch("http://localhost:8080/api/pet/getall");
                const data = await response.json();
                console.log(data);
                if(data.error){
                    throw new Error(data.error);
                }
                setPets(data); 
            }
            catch(error){
                toast.error((error as Error).message);
            }
            finally{
                setLoading(false);
            }
        };
        getPets();
    },[]);

    return { loading, pets };
};

export default useGetPets;