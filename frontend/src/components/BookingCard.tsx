import React from 'react';

interface Booking {
    id: string;
    ownerName: string;
    petName: string;
    check_in: string;
    check_out: string;
}

interface BookingCardProps {
    booking: Booking;
}

const BookingCard: React.FC<BookingCardProps> = ({booking}) => {
    const checkInDate = new Date(booking.check_in).toLocaleDateString();
    const checkOutDate = new Date(booking.check_out).toLocaleDateString();

    return(
        <div className="flex flex-col text-left gap-2 bg-white w-full p-5 rounded-lg shadow-lg">
            <div className="text-xl font-semibold text-blue-500">
                Pet : {booking.petName}
            </div>
            <div className="text-gray-700 font-semibold">
                <p>Pet Owner: {booking.ownerName} </p>
                <p>Check In: {checkInDate}</p>
                <p>Check Out: {checkOutDate}</p>
            </div>
            <div className='flex flex-row gap-3'>
                <button className='btn btn-success'>Edit</button>
                <button className=" btn btn-error">Delete</button>
            </div>
        </div>
    );
};

export default BookingCard;