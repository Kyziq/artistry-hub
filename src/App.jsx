import { Tooltip } from '@nextui-org/react';
import { useState, useEffect } from 'react';
import { categories } from './data/categories';
import { landscapesList } from './data/landscapes-list';
import { paintingsList } from './data/paintings-list';
import { portraitsList } from './data/portraits-list';
import { abstractsList } from './data/abstracts-list';

const shuffleArray = (array) => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Test from './pages/Test';
import Footer from './pages/Footer';

function App() {
  // Combine data from landscapesList, paintingsList, and portraitsList
  const combinedList = [
    ...landscapesList,
    ...paintingsList,
    ...portraitsList,
    ...abstractsList,
  ];

  // Shuffle the combined list
  const shuffledList = shuffleArray(combinedList);

  // State to hold the new list
  const [newList, setNewList] = useState([]);

  useEffect(() => {
    // Combine and shuffle the lists when the component mounts
    const combinedAndShuffledList = shuffleArray([
      ...landscapesList,
      ...paintingsList,
      ...portraitsList,
      ...abstractsList,
    ]);
    setNewList(combinedAndShuffledList);
  }, []);

  // Limit the number of items to show in the Top Picks section
  const limitedTopPicksList = newList.slice(0, 7);

  // Limit the number of items to show in the More Arts section
  const limitedMoreArtsList = shuffledList.slice(0, 6); // Change the number as needed

  // Separate limitedMoreArtsList into two parts
  const moreArtsContainer1List = limitedMoreArtsList.slice(0, 3);
  const moreArtsContainer2List = limitedMoreArtsList.slice(3, 6);

  return (
    <div className="flex flex-col justify-start items-start min-h-screen bg-gray-100 p-10 overflow-hidden">
      <header className="text-2xl font-bold">ArtistryHub.</header>
      <p className="text-gray-700">Explore our world of creative designs.</p>
    <div className="flex flex-col justify-start items-start min-h-screen">
      <Router>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/test" element={<Test />} />
          {/* <Route component={GenericNotFound} /> */}
        </Routes>

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

        <br />

        <div className="mt-5">
          <h2 className="text-xl font-bold">Top Picks</h2>
          <br />
          <div className="top-picks-container flex overflow-x-auto">
            {limitedTopPicksList.map((item) => (
              <Tooltip
                key={item.name}
                content={'View ' + item.name}
                placement="bottom"
                showArrow
              >
                <div className="flex flex-col items-center mr-3">
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

        <br />

        <div className="mt-5">
          <h2 className="text-xl font-bold">More Arts</h2>
          <br />
          <div className="flex">
            <div className="more-arts-container-1 w-60 mr-2">
              {moreArtsContainer1List.map((item) => (
                <Tooltip
                  key={item.name}
                  content={'View ' + item.name}
                  placement="bottom"
                  showArrow
                >
                  <div className="flex flex-row flex-col items-center mb-1">
                    <div className="w-50 rounded-lg bg-white shadow-md border border-gray-300">
                      <img
                        src={item.img}
                        alt={item.name}
                        className="object-cover w-full"
                        style={{ height: '100%' }}
                      />
                    </div>
                  </div>
                </Tooltip>
              ))}
            </div>

            <div className="more-arts-container-2 w-60 mr-2">
              {moreArtsContainer2List.map((item) => (
                <Tooltip
                  key={item.name}
                  content={'View ' + item.name}
                  placement="bottom"
                  showArrow
                >
                  <div className="flex flex-row flex-col items-center mb-1">
                    <div className="w-50 rounded-lg bg-white shadow-md border border-gray-300">
                      <img
                        src={item.img}
                        alt={item.name}
                        className="object-cover w-full"
                        style={{ height: '100%' }}
                      />
                    </div>
                  </div>
                </Tooltip>
              ))}
            </div>
          </div>
        </div>
      </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
