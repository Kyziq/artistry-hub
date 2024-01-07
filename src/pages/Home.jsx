import { useState, useEffect } from 'react';
import { Tooltip, Image } from '@nextui-org/react';
import { categories } from '../data/categories';
import { landscapesList } from '../data/list/landscapes-list';
import { paintingsList } from '../data/list/paintings-list';
import { portraitsList } from '../data/list/portraits-list';
import { abstractsList } from '../data/list/abstracts-list';
import MoreArt from './MoreArt';

const CategoryItem = ({ category }) => (
  <Tooltip content={category.tooltip} placement="top" showArrow>
    <div className="flex flex-col items-center">
      <Image
        src={category.imageUrl}
        alt={category.name}
        isZoomed
        className="w-20 h-20"
      />
      <span className="mt-2 text-xs">{category.name}</span>
    </div>
  </Tooltip>
);

const shuffleArray = (array) => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const Home = () => {
  // State to hold the new list
  const [newList, setNewList] = useState([]);

  useEffect(() => {
    // Combine and shuffle the lists when the component mounts
    const combinedAndShuffledList = shuffleArray([
      ...landscapesList,
      ...paintingsList,
      ...portraitsList,
      ...abstractsList,
    ]);
    setNewList(combinedAndShuffledList);
  }, []);

  // Limit the number of items to show in the Top Picks section
  const limitedTopPicksList = newList.slice(0, 7);

  return (
    <div className="p-6">
      <header className="text-2xl font-bold">ArtistryHub.</header>
      <p className="text-gray-700">Explore our world of creative designs.</p>

      <div className="mt-5">
        <h2 className="text-2xl font-bold">Categories</h2>

        <div className="flex flex-wrap justify-start items-center gap-4 mt-4">
          {categories.map((category) => (
            <CategoryItem key={category.name} category={category} />
          ))}
        </div>
      </div>

      <div className="mt-5">
        <h2 className="text-2xl font-bold">Top Picks</h2>
        <br />
        <div className="top-picks-container flex overflow-x-auto">
          {limitedTopPicksList.map((item) => (
            <Tooltip
              key={item.name}
              content={'View ' + item.name}
              placement="bottom"
              showArrow
            >
              <div className="flex flex-col items-center mr-3">
                <div className="w-48 h-48 rounded-lg overflow-hidden bg-white shadow-md border border-gray-300">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </Tooltip>
          ))}
        </div>
      </div>
      <div className="mt-5">
        <MoreArt />
      </div>
    </div>
  );
};

export default Home;
