import React from 'react'
import useGetPetOwners from '../hooks/petowners/useGetPetOwners';
import PetOwnerCard from '../components/PetOwnerCard';

const PetOwners = () => {
    const { loading, petOwners } = useGetPetOwners();
    console.log(petOwners);
    return (
      <div className='className="flex flex-col text-black w-full p-4 sm:p-8"'>
          <div className="text-3xl text-center font-semibold py-4">Pet Owners</div>
          <div className="text-xl text-center py-2 w-11/12 sm:w-1/2 mx-auto">
              Here are all the pet owners :
          </div>
          {
              loading ?
              <span className='loading loading-spinner mx-auto text-black'></span>:
              <div className="flex flex-col gap-4 m-2 sm:m-8 items-center"> 
                  {
                      petOwners.length ===0 ?
                      <div className="mx-auto"> No pets to show </div>:
                      petOwners.map((petOwner: any, index: number) => (
                          <PetOwnerCard
                              key={index}
                              petOwner={petOwner}
                          />
                      ))
                  }    
              </div> 
          }       
      </div>
    )
}

export default PetOwners

