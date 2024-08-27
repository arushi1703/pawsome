import { Link } from 'react-router-dom';

const Home = () =>{
    return (
        <div className='min-h-screen max-w-screen flex flex-col justify-center items-center font-roboto'>
            <div className='text-center'>
                <button className='m-4 p-4 w-30 bg-blue-500 text-white rounded'> Manage Owners</button>
                <Link to="/pets">
                    <button className='m-4 p-4 w-30 bg-blue-500 text-white rounded'> Manage Pets</button>
                </Link>
                <Link to='/service'>
                    <button className='m-4 p-4 w-30 bg-blue-500 text-white rounded'> Manage Services</button>
                </Link>
                <button className='m-4 p-4 w-30 bg-blue-500 text-white rounded'> Generate Report</button>
            </div>
        </div>
    );
}

export default Home