import React from 'react'
import useGetPets from '../hooks/pets/useGetPets';
import PetCard from '../components/PetCard';

const Pets = () => {
    const { loading, pets } = useGetPets();
    console.log(pets);
    return (
      <div className='className="flex flex-col text-black w-full p-4 sm:p-8"'>
          <div className="text-3xl text-center font-semibold py-4">Pets</div>
          <div className="text-xl text-center py-2 w-11/12 sm:w-1/2 mx-auto">
              Here are all the pets that have been registered :
          </div>
          {
              loading ?
              <span className='loading loading-spinner mx-auto text-black'></span>:
              <div className="flex flex-col gap-4 m-2 sm:m-8 items-center"> 
                  {
                      pets.length ===0 ?
                      <div className="mx-auto"> No pets to show </div>:
                      pets.map((pet: any, index: number) => (
                          <PetCard
                              key={index}
                              pet={pet}
                          />
                      ))
                  }    
              </div> 
          }       
      </div>
    )
}

export default Pets

