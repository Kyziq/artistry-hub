import MoreArt from './MoreArt';
import Categories from '../components/Categories';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="p-4 sm:p-6">
      <div className="flex flex-wrap justify-between items-center">
        <header className="text-xl sm:text-2xl font-bold mb-2 sm:mb-0">
          ArtistryHub.
        </header>
        <Link
          to="/artistry-hub/top-picks"
          className="flex items-center text-sm sm:text-lg font-medium text-blue-500 hover:text-blue-600 transition duration-300 ease-in-out"
        >
          Explore Featured Artworks{' '}
          <FaArrowRight className="ml-1 sm:ml-2 text-base sm:text-lg" />
        </Link>
      </div>
      <p className="text-gray-700 text-sm sm:text-base mt-2">
        Explore our world of creative designs.
      </p>

      <Categories />

      <MoreArt />
    </div>
  );
};

export default Home;
