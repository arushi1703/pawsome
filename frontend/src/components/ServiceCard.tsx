import REact from 'react';

interface Service {
    id: string;
    name: string;
    petName: string;
    status: string;
}

interface ServiceCardProps {
    service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({service}) => {
    return(
        <div className="flex flex-col text-left gap-2 bg-white w-full p-5 rounded-lg shadow-lg">
            <div className="text-xl font-semibold">
                {service.name} for {service.petName}
            </div>
            <div className="text-gray-700">
                <span className="font-semibold">Cost: </span>Rs 2000
            </div>
            <div className={`text-lg font-semibold ${service.status === 'Pending' ? 'text-yellow-500' : 'text-green-500'}`}>
                Status: {service.status}
            </div>
        </div>
    );
};

export default ServiceCard;