import React from 'react';

interface Pet {
    id: string;
    name: string;
    ownerName: string;
    age: number;
    gender: string;
    notes: string;
}

interface PetCardProps {
    pet: Pet;
}

const ServiceCard: React.FC<PetCardProps> = ({pet}) => {
    return(
        <div className="flex flex-col text-left gap-2 bg-white w-full p-5 rounded-lg shadow-lg">
            <div className="text-xl font-semibold text-blue-500">
                {pet.name}
            </div>
            <div className="text-gray-700 font-semibold">
                <p>Owner: {pet.ownerName} </p>
                <p>Age: {pet.age}</p>
                <p>Gender: {pet.gender}</p>
                <p>Notes: {pet.notes}</p>
            </div>
            <div className='flex flex-row gap-3'>
                <button className='btn btn-success'>Edit</button>
                <button className=" btn btn-error">Delete</button>
            </div>
        </div>
    );
};

export default ServiceCard;