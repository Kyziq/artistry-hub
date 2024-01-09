import { Tooltip, Image } from '@nextui-org/react';
import { categories } from '../data/categories';
import MoreArt from './MoreArt';

const CategoryItem = ({ category }) => (
  <Tooltip content={category.tooltip} placement="top" showArrow>
    <div className="flex flex-col items-center">
      <Image
        src={category.imageUrl}
        alt={category.name}
        isZoomed
        className="w-24 h-24"
      />
      <span className="mt-1 text-sm">{category.name}</span>
    </div>
  </Tooltip>
);

const Home = () => {
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
        <MoreArt />
      </div>
    </div>
  );
};

export default Home;
