import MoreArt from './MoreArt';
import Categories from '../components/Categories';

const Home = () => {
  return (
    <div className="p-6">
      <header className="text-2xl font-bold">ArtistryHub.</header>
      <p className="text-gray-700">Explore our world of creative designs.</p>

      <Categories />

      <MoreArt />
    </div>
  );
};

export default Home;
