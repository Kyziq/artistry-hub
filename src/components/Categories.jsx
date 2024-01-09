import { Tooltip, Image } from '@nextui-org/react';
import { categories } from '../data/categories';

const CategoryItem = ({ category }) => (
  <Tooltip
    content={category.tooltip}
    placement="top"
    color="foreground"
    showArrow
  >
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

const Categories = () => {
  return (
    <div className="mt-5">
      <h2 className="text-xl font-semibold">Categories</h2>
      <div className="flex flex-wrap justify-start items-center gap-4 mt-4">
        {categories.map((category) => (
          <CategoryItem key={category.name} category={category} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
