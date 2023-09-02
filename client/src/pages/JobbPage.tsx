import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Box, Heading, Section } from '@radix-ui/themes';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const JobbPage = () => {

    const { id } = useParams()
    const { data } = useQuery(["singleAdd"], async () => {
        const response = await axios.get(`http://localhost:3001/view/singleAdd/${id}`)
        console.log(response.data);
        return response.data
    })

  return (
    <Box
      py="9"
      style={{
        backgroundColor: 'var(--gray-a2)',
        borderRadius: 'var(--radius-3)',
      }}
    >
      <section className="bg-white rounded-lg ">
        <div className="max-w mx-auto px-4">
          <article className="p-6 mb-6 text-base dark:border-gray-700 dark:bg-gray-900">
            <footer className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                <p className="inline-flex items-center ml-1 mr-3 text-sm text-gray-900 dark:text-white">
                  <Avatar>
                    <AvatarImage src={data?.authorImage} />
                  </Avatar>
                  {data?.author}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                {data?.tidStamp ? (
  <p className="text-sm text-gray-600 dark:text-gray-400">
    {new Date(data?.tidStamp).toLocaleDateString(undefined, {
      day: "numeric",
      month: "short"
    })}
  </p>
) : (
  <p className="text-sm text-gray-600 dark:text-gray-400">Date not available</p>
)}
                </p>
              </div>
            </footer>
            <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            {data?.title}
            </h2>
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Taxi driver
    </h3>
            <ul>
              <li className="list-disc">
                <h4 className="scroll-m-20 text-l font-medium tracking-tight m-3">
                {data?.stad}
                </h4>
              </li>
            </ul>
            <ul>
              <li className="list-disc">
                <h4 className="scroll-m-20 text-l font-medium tracking-tight m-3">
                {data?.varaktighet}
                </h4>
              </li>
            </ul>
            <ul>
              <li className="list-disc">
                <h4 className="scroll-m-20 text-l font-medium tracking-tight m-3">
                {data?.anstallningsform}
                </h4>
              </li>
            </ul>
            

            <h2 className="scroll-m-20 border-b pt-2 pb-2 text-1xl font-semibold tracking-tight transition-colors first:mt-0">
             Mer info om jobbet:
            </h2>
            <p className="leading-7 [&:not(:first-child)]:mt-6 border-b">
            {data?.mainBody}
    </p>
    <div className="">
    <ul>
              <li className="list-disc">
                <h4 className="scroll-m-20 text-l font-medium tracking-tight m-3">
                {data?.arbetsgivare}
                </h4>
              </li>
            </ul>
            <ul>
              <li className="list-disc">
                <h4 className="scroll-m-20 text-l font-medium tracking-tight m-3">
                {data?.address}
                </h4>
              </li>
            </ul>
            <ul>
              <li className="list-disc">
                <h4 className="scroll-m-20 text-l font-medium tracking-tight m-3">
                {data?.kontakt}
                </h4>
              </li>
            </ul>
            </div>
          </article>
        </div>
      </section>
      <Section />
    </Box>
  );
};

export default JobbPage;
