import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const useGetPets = () => {
    const [loading, setLoading]= useState(false);
    const [pets, setPets] = useState([] as any);

    useEffect(()=>{
        const getPets = async() => {
            setLoading(true);
        }
    },[]);
};

export default useGetPets;