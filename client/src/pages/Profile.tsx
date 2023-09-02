import ProfileAds from '@/components/ProfileAds';
import { useUser } from '@clerk/clerk-react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';


const Profile = () => {
  const user = useUser();
  const userId = user.user?.id

    const { data } = useQuery(["profile"], async () => {
        const response = await axios.get(`http://localhost:3001/view/profile/${userId}`)
        console.log(response.data);
        return response.data
    })

    type AdsData = {
        _id: string;
        title: string;
        yrke: string;
        author: string;
        tidStamp: any;
        authorImage: any;
        arbetsgivare: string;
        stad: string;
      };


  return (
    <div className="p-16">
      <div className="p-8 bg-white border-4 border-pink-700 rounded-lg shadow mt-24">
        
        <div className="grid grid-cols-1 md:grid-cols-3">
          
          <div className="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
            
            
            <div>
              
              <p className="font-bold text-gray-700 text-xl">10</p>
              <p className="text-gray-400">Photos</p>
            </div>
            <div>
              
              <p className="font-bold text-gray-700 text-xl">89</p>
              <p className="text-gray-400">Comments</p>
            </div>
          </div>
          <div className="relative">
            
            <img src={user.user?.imageUrl} className="w-48 h-48 bg-white mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-pink-700" />
            
            
          </div>
          <div className="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
            <button className="text-white py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
              
              Connect
            </button>
            <button className="text-white py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
              
              Message
            </button>
          </div>
        </div>
        <div className="mt-20 text-center border-b pb-12">
          
          <h1 className="text-4xl font-medium text-gray-700">
           {user.user?.fullName} 
          </h1>
         
          
        </div>
        <div className="mt-12 flex flex-col justify-center">
        {data?.map((ads: AdsData) => (
      <div className="" key={ads._id}>
        {ads.title}
      </div>
    ))} 
      
        </div>
      </div>
    </div>
  );
};

export default Profile;
