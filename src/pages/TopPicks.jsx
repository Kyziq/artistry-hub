import { Image } from '@nextui-org/react';
import { Link } from 'react-router-dom';
import { allLists } from '../data/list';
import { FaHeart } from 'react-icons/fa';

const Top = () => {
  // Combine all lists and sort by 'likes' in descending order
  const sortedList = Object.values(allLists)
    .flat()
    .sort((a, b) => b.likes - a.likes)
    .slice(0, 9);

  return (
    <div className="container mx-auto">
      <div className="flex flex-col justify-center items-center min-h-screen p-4 sm:p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Discover Masterpieces
        </h2>
        <p className="text-md mb-6 text-center max-w-2xl">
          Dive into a curated selection of our most celebrated artworks, ranked
          by community love. These top 10 picks, brimming with creativity and
          artistry, have captivated the hearts of our audience. Discover what
          makes these pieces stand out in the world of art, each resonating with
          a unique story and aesthetic appeal, and see why they&apos;ve earned
          their place at the top.
        </p>
        <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4">
          {sortedList.map((item) => (
            <div key={item.id} className="flex flex-col items-center">
              <Link to={`/art/${item.id}`}>
                <Image
                  src={item.img}
                  alt={item.name}
                  className="w-full sm:w-48 sm:h-48 rounded-lg overflow-hidden bg-white shadow-md border border-gray-300 mb-2 object-cover"
                />
              </Link>
              <h3 className="font-semibold text-lg mb-2">{item.name}</h3>
              <p className="flex items-center text-sm text-gray-600">
                <span className="ml-1 inline-flex items-center text-red-500">
                  <FaHeart />
                </span>
                &nbsp;
                {item.likes}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Top;
