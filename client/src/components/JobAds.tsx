import { Box, Button, Section } from '@radix-ui/themes';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Album, ArrowLeft, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Spinner } from '@material-tailwind/react';

const JobAds = () => {
  const [page, setPage] = useState(0);

  const { data,  isLoading } = useQuery(
    ['painting', page],
    async () => {
      const response = await axios.get(
      `http://localhost:3001/view/latestAdds?page=${page}`
      );
      return response.data;
      
    },
  );

  if (isLoading) {
    return (
      <Spinner
        className="h-16 w-16 text-yellow-900 m-5"
        color="yellow"
      />
    );
  }

  const handlePreviousClick = () => {
    setPage((nextPage) => nextPage - 1)
    window.scrollTo({ top: 10, behavior: 'smooth' });
  }

  const handleNextClick = () => {
    setPage((prevPage) => prevPage + 1);
    window.scrollTo({ top: 10, behavior: 'smooth' });
  };
  

  const NoData = () => {
    return (
      <div className="">
       
      </div>
    );
  };

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
    <div className="my-10 text-white">
      {data?.map((ads: AdsData) => (
        <div
          className="text-white"
          key={ads._id}
        >
          <div className="max-w-6xl px-3 my-2 py-1 bg-white border-4 border-pink-700 rounded-lg shadow-md">
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
              <p className="mt-1 text-gray-900">{ads.yrke}</p>
              <p className="mt-1 text-gray-900">{ads.stad}</p>
            </div>
            <div className="flex justify-between items-center mt-1">
              <span className="font-light text-gray-900"> {new Date(ads.tidStamp).toLocaleDateString(undefined, {
    day: 'numeric',
    month: 'short',
  })} </span>
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

      {data?.length === 0 ? <NoData /> : null}

      <div className="flex flex-1 justify-between ">
        <span className="text-md mt-2">
          <span className="mx-2">Showing:</span>
          {data?.length}
        </span>

        <p className="text-md">
          <span className="mx-2">Page:</span>
          {page}
        </p>
      </div>
      <div className="flex flex-col items-center">
        <div className=" gap-2 xs:mt-0">
          <Button
            onClick={handlePreviousClick}
            m="2"
            disabled={page === 0}
            color="crimson"
            size="3"
            variant="solid"
          >
            Prev <ArrowLeft />
          </Button>

          <Button
            onClick={handleNextClick}
            m="2"
            color="crimson"
            size="3"
            variant="solid"
          >
            Next <ArrowRight />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default JobAds;
