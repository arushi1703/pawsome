import React from 'react'
import useGetBookings from '../hooks/booking/useGetBookings';
import BookingCard from '../components/BookingCard';

const Bookings = () => {
    const { loading, bookings } = useGetBookings();
    console.log(bookings);
    return (
      <div className='className="flex flex-col text-black w-full p-4 sm:p-8"'>
          <div className="text-3xl text-center font-semibold py-4">Bookings</div>
          <div className="text-xl text-center py-2 w-11/12 sm:w-1/2 mx-auto">
              Here are all the bookings :
          </div>
          {
              loading ?
              <span className='loading loading-spinner mx-auto text-black'></span>:
              <div className="flex flex-col gap-4 m-2 sm:m-8 items-center"> 
                  {
                      bookings.length ===0 ?
                      <div className="mx-auto"> No pets to show </div>:
                      bookings.map((booking: any, index: number) => (
                          <BookingCard
                              key={index}
                              booking={booking}
                          />
                      ))
                  }    
              </div> 
          }       
      </div>
    )
}

export default Bookings

