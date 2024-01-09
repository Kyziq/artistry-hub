import { Tooltip } from '@nextui-org/react';
import { allLists } from '../data/list';

const Top = () => {
  // Combine all lists and sort by 'likes' in descending order
  const sortedList = Object.values(allLists)
    .flat()
    .sort((a, b) => b.likes - a.likes)
    .slice(0, 18); // Limit to top 18 items

  return (
    <div className="p-6">
      <header className="text-2xl font-bold">ArtistryHub.</header>

      <div className="mt-5">
        <h2 className="text-xl font-semibold mb-4">Top Picks</h2>
        <div className="top-picks-container flex flex-wrap overflow-x-auto">
          {sortedList.map((item) => (
            <Tooltip
              key={item.name}
              content={item.name}
              placement="bottom"
              color="foreground"
              showArrow
            >
              <div className="flex flex-col items-center mr-3 mb-3">
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
    </div>
  );
};

export default Top;
