import { Link } from 'react-router-dom';
import { allLists } from '../data/list';

const Top = () => {
  // Combine all lists and sort by 'likes' in descending order
  const sortedList = Object.values(allLists)
    .flat()
    .sort((a, b) => b.likes - a.likes)
    .slice(0, 9);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen p-4 sm:p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Discover Masterpieces
      </h2>
      <p className="text-md mb-6 text-center max-w-2xl">
        Immerse yourself in our handpicked collection of the most beloved
        artworks. Each piece is a window into a unique story, crafted by
        visionary artists from various schools of art. Feel the pulse of
        creativity and the depth of emotions captured in every brushstroke.
      </p>
      <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4">
        {sortedList.map((item) => (
          <div key={item.id} className="flex flex-col items-center">
            <Link to={`/art/${item.id}`}>
              <img
                src={item.img}
                alt={item.name}
                className="w-full sm:w-48 sm:h-48 rounded-lg overflow-hidden bg-white shadow-md border border-gray-300 mb-2 object-cover"
              />
            </Link>
            <h3 className="font-medium">{item.name}</h3>
            <p className="text-sm text-gray-600">Likes: {item.likes}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Top;
