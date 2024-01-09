import MoreArt from './MoreArt';
import Categories from '../components/Categories';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa'; // Importing an arrow icon

const Home = () => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center">
        <header className="text-2xl font-bold">ArtistryHub.</header>
        <Link
          to="/artistry-hub/top-picks"
          className="flex items-center text-lg font-medium text-blue-500 hover:text-blue-600 transition duration-300 ease-in-out"
        >
          Explore Featured Artworks <FaArrowRight className="ml-2" />
        </Link>
      </div>
      <p className="text-gray-700 mt-2">
        Explore our world of creative designs.
      </p>

      <Categories />

      <MoreArt />
    </div>
  );
};

export default Home;
