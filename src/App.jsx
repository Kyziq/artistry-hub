import { Tooltip } from '@nextui-org/react';
import { categories } from './data/categories';

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
      </div>
    </div>
  );
}

export default App;
