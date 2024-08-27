import React from 'react'
import useGetService from '../hooks/service/useGetService';
import ServiceCard from '../components/ServiceCard';

const Service = () => {
    const { loading, services } = useGetService();
    console.log(services);
  return (
    <div className='className="flex flex-col text-black w-full p-4 sm:p-8"'>
        <div className="text-3xl text-center font-semibold py-4">Services</div>
        <div className="text-xl text-center py-2 w-11/12 sm:w-1/2 mx-auto">
            View the services registered for each pet.
        </div>
        {
            loading ?
            <span className='loading loading-spinner mx-auto text-black'></span>:
            <div className="flex flex-col gap-4 m-2 sm:m-8 items-center"> 
                {
                    services.length ===0 ?
                    <div className="mx-auto"> No services to show </div>:
                    services.map((service: any, index: number) => (
                        <ServiceCard
                            key={index}
                            service={service}
                        />
                    ))
                }    
            </div> 
        }       
    </div>
  )
}

export default Service