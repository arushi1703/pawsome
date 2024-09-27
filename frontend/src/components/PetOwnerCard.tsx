import React from 'react';

interface PetOwner {
    id: string;
    name: string;
    phoneno: string;
    email: string;
    address: string;
}

interface PetOwnerCardProps {
    petOwner: PetOwner;
}

const PetOwnerCard: React.FC<PetOwnerCardProps> = ({petOwner}) => {
    return(
        <div className="flex flex-col text-left gap-2 bg-white w-full p-5 rounded-lg shadow-lg">
            <div className="text-xl font-semibold text-blue-500">
                {petOwner.name}
            </div>
            <div className="text-gray-700 font-semibold">
                <p>Phone No: {petOwner.phoneno} </p>
                <p>Email: {petOwner.email}</p>
                <p>address: {petOwner.address}</p>
            </div>
            <div className='flex flex-row gap-3'>
                <button className='btn btn-success'>Edit</button>
                <button className=" btn btn-error">Delete</button>
            </div>
        </div>
    );
};

export default PetOwnerCard;