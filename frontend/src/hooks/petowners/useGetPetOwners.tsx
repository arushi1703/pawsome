import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const useGetPetOwners = () => {
    const [loading, setLoading]= useState(false);
    const [petOwners, setPetOwners] = useState([] as any);

    useEffect(()=>{
        const getPetOwners = async() => {
            setLoading(true);
            try{
                const response = await fetch("http://localhost:8080/api/petowner/getall");
                const data = await response.json();
                console.log(data);
                if(data.error){
                    throw new Error(data.error);
                }
                setPetOwners(data); 
            }
            catch(error){
                toast.error((error as Error).message);
            }
            finally{
                setLoading(false);
            }
        };
        getPetOwners();
    },[]);

    return { loading, petOwners };
};

export default useGetPetOwners;