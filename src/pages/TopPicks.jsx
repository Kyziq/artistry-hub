import { Tooltip } from '@nextui-org/react';
import { landscapesList } from '../data/list/landscapes-list';
import { paintingsList } from '../data/list/paintings-list';
import { portraitsList } from '../data/list/portraits-list';
import { abstractsList } from '../data/list/abstracts-list';

const Top = () => {
  // Combine all lists
  const combinedList = [
    ...landscapesList,
    ...paintingsList,
    ...portraitsList,
    ...abstractsList,
  ];

  // Sort the combined list based on the "likes" attribute in descending order
  const sortedList = combinedList.sort((a, b) => b.likes - a.likes);

  // Limit the number of items to show in the Top Picks section
  const limitedTopPicksList = sortedList.slice(0, 18);

  return (
    <div className="p-6">
      <header className="text-2xl font-bold">ArtistryHub.</header>
      <p className="text-gray-700">Explore our world of creative designs.</p>

      <div className="mt-5">
        <h2 className="text-2xl font-bold">Top Picks</h2>
        <br />
        <div className="top-picks-container flex flex-wrap overflow-x-auto">
          {limitedTopPicksList.map((item) => (
            <Tooltip
              key={item.name}
              content={'View ' + item.name}
              placement="bottom"
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
