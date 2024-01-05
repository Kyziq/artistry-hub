import { Tooltip } from '@nextui-org/react';
import { categories } from './data/categories';
import { top } from './data/top';

function App() {
  return (
    <div className="flex flex-col justify-start items-start min-h-screen bg-gray-100 p-10">
      <header className="text-2xl font-bold">ArtistryHub.</header>
      <p className="text-gray-700">Explore our world of creative designs.</p>

      <div className="mt-5">
        <h2 className="text-xl font-bold">Categories</h2>

        <div className="flex flex-wrap justify-start items-center gap-4 mt-4">
          {categories.map((category) => (
            <Tooltip
              key={category.name}
              content={category.tooltip}
              placement="top"
              showArrow
            >
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-full overflow-hidden bg-white shadow-md">
                  <img
                    src={category.imageUrl}
                    alt={category.name}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </Tooltip>
          ))}
        </div>

        <br></br>

        <h2 className="text-xl font-bold">Top Picks</h2>

        <div className="flex flex-wrap justify-start items-center gap-3 mt-3">
          {top.map((tops) => (
            <Tooltip
              key={tops.name}
              content={tops.tooltip}
              placement="bottom"
              showArrow
            >
              <div className="flex flex-col items-center">
                <div className="w-40 h-40 rounded-lg overflow-hidden bg-white shadow-md border border-gray-300">
                  <img
                    src={tops.imageUrl}
                    alt={tops.name}
                    className="object-cover w-40 h-40"
                  />
                </div>
              </div>
            </Tooltip>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
