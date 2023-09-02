import { Link } from 'react-router-dom';
import { Button } from '@radix-ui/themes';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Album } from 'lucide-react';

const Latest = () => {
  const { data } = useQuery(['latestAds'], async () => {
    const response = await axios.get('http://localhost:3001/view/latestAdds');
    return response.data;
  });

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
    <div className="text-left w-7xl min-w-full flex-center flex-col">
      <div className="m-3">
        {data?.map((ads: AdsData) => (
          <div
            className="text-white"
            key={ads._id}
          >
            <div className="max-w-6xl px-3 my-2 py-2 bg-white border-4 border-pink-700 rounded-lg shadow-md">
              <Link
                className="flex items-center"
                to={''}
              >
                <img
                  className="mr-2 w-10 h-10 object-cover rounded-full hidden sm:block"
                  src={ads.authorImage}
                  alt="avatar"
                />
                <h1 className="text-gray-700 font-base">{ads.author}</h1>
              </Link>

              <div className="mt-1">
                <Link
                  className="text-1xl text-gray-800 font-bold hover:text-pink-700"
                  to={`/job/${ads._id}`}
                >
                  {ads.title}
                </Link>
                <p className="mt-1 text-gray-800">{ads.yrke}</p>
                <p className="mt-1 text-gray-800">{ads.stad}</p>
              </div>
              <div className="flex justify-between items-center mt-1">
                <span className="font-light text-gray-800">mar 10, 2019</span>
                <div>
                  <div className="flex justify-between items-center">
                    <button className="px-2 py-1  text-gray-100 font-bold rounded">
                      <Album color="red" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center my-8">
        <Button
          color="crimson"
          size={'3'}
        >
          <Link to={'/alljobs'}>Se Alla</Link>
        </Button>
      </div>
    </div>
  );
};

export default Latest;
