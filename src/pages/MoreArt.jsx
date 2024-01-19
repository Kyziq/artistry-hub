import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Card,
  CardHeader,
  Image,
  Button,
  CardFooter,
  Tooltip,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from '@nextui-org/react';
import {
  FacebookShareButton,
  WhatsappShareButton,
  TwitterShareButton,
  RedditShareButton,
  EmailShareButton,
  FacebookIcon,
  WhatsappIcon,
  TwitterIcon,
  RedditIcon,
  EmailIcon,
} from 'react-share';
import { allLists } from '../data/list';
import {
  FaDownload,
  FaExclamationTriangle,
  FaShareAlt,
  FaEllipsisV,
} from 'react-icons/fa';

const MoreArt = () => {
  const navigate = useNavigate();
  const [savedStates, setSavedStates] = useState({});
  const [shuffledLists, setShuffledLists] = useState([]);
  const shareUrl = 'https://kyziq.github.io/artistry-hub/';
  const title = 'ArtistryHub';

  const toggleSaveState = (index) => {
    setSavedStates((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const handleDownload = (imageUrl, imageName = 'download') => {
    const anchor = document.createElement('a');
    anchor.href = imageUrl;
    anchor.download = imageName;
    anchor.click();
  };

  const handleImageClick = (itemId) => navigate(`/art/${itemId}`);

  const handleDropdownClick = (event) => {
    event.stopPropagation();
  };

  // Function to shuffle the lists
  const shuffleLists = (lists) => {
    const shuffled = lists.map((list) =>
      [...list].sort(() => 0.5 - Math.random())
    );
    return [].concat(...shuffled);
  };

  useEffect(() => {
    // Shuffle the images once when the component is mounted
    setShuffledLists(shuffleLists(Object.values(allLists)));
  }, []);

  return (
    <div className="mt-10">
      <div className="flex flex-wrap justify-center items-center gap-4 mt-4">
        {shuffledLists.map((item, index) => (
          <Tooltip key={index} content={item.name} placement="top" showArrow>
            <Card
              key={index}
              shadow="sm"
              isPressable
              onClick={() => handleImageClick(item.id)}
              className="relative overflow-hidden inline-block group transition-opacity duration-300 hover:opacity-90 sm:w-[calc(33.3333%-2em)] md:w-[calc(25%-2em)] lg:w-[calc(20%-2em)]"
            >
              <CardHeader className="absolute z-10 top-1 right-1 flex justify-end items-start opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Button
                  color={savedStates[index] ? 'primary' : 'default'}
                  radius="full"
                  size="sm"
                  variant="bordered"
                  onPress={() => toggleSaveState(index)}
                  className={`${
                    savedStates[index]
                      ? 'bg-primary-500 hover:bg-primary-600 text-white border-primary-500'
                      : 'bg-white hover:bg-gray-100 text-gray-700 border-gray-300'
                  } font-semibold py-2 px-4 rounded-full shadow-sm transition duration-300 ease-in-out`}
                >
                  {savedStates[index] ? 'Saved' : 'Save'}
                </Button>
              </CardHeader>
              <Image
                removeWrapper
                shadow="sm"
                radius="lg"
                alt={item.name}
                className="object-cover -z-1 w-full h-full"
                src={item.img}
              />
              <CardFooter className="justify-between before:bg-white/10 overflow-hidden py-1 absolute before:rounded-sm rounded-small bottom-1 w-[calc(100%_-_5px)] shadow-small ml-1 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="flex gap-4 items-center">
                  <Dropdown backdrop="blur" onClick={handleDropdownClick}>
                    <DropdownTrigger>
                      <Button
                        size="sm"
                        className="p-1 transition-all duration-300 ease-in-out bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow hover:shadow-lg"
                      >
                        <FaShareAlt className="text-sm pointer-events-none flex-shrink-0" />
                      </Button>
                    </DropdownTrigger>
                    <DropdownMenu variant="faded" aria-label="Static Actions">
                      <DropdownItem key="facebook" className="cursor-pointer">
                        <FacebookShareButton
                          url={shareUrl}
                          title={title}
                          className="flex items-center"
                        >
                          <FacebookIcon size={32} round />
                          <span className="ml-2">Facebook</span>
                        </FacebookShareButton>
                      </DropdownItem>

                      <DropdownItem key="whatsapp" className="cursor-pointer">
                        <WhatsappShareButton
                          url={shareUrl}
                          title={title}
                          className="flex items-center"
                        >
                          <WhatsappIcon size={32} round />
                          <span className="ml-2">Whatsapp</span>
                        </WhatsappShareButton>
                      </DropdownItem>

                      <DropdownItem key="x" className="cursor-pointer">
                        <TwitterShareButton
                          url={shareUrl}
                          title={title}
                          className="flex items-center"
                        >
                          <TwitterIcon size={32} round />
                          <span className="ml-2">Twitter</span>
                        </TwitterShareButton>
                      </DropdownItem>

                      <DropdownItem key="reddit" className="cursor-pointer">
                        <RedditShareButton
                          url={shareUrl}
                          title={title}
                          className="flex items-center"
                        >
                          <RedditIcon size={32} round />
                          <span className="ml-2">Reddit</span>
                        </RedditShareButton>
                      </DropdownItem>
                      <DropdownItem key="email" className="cursor-pointer">
                        <EmailShareButton
                          url={shareUrl}
                          title={title}
                          className="flex items-center"
                        >
                          <EmailIcon size={32} round />
                          <span className="ml-2">Email </span>
                        </EmailShareButton>
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>

                  <Dropdown onClick={handleDropdownClick}>
                    <DropdownTrigger>
                      <Button
                        size="sm"
                        className="p-1 transition-all duration-300 ease-in-out bg-gray-300 hover:bg-gray-400 rounded-full shadow hover:shadow-lg"
                      >
                        <FaEllipsisV className="text-gray-800 pointer-events-none flex-shrink-0" />
                      </Button>
                    </DropdownTrigger>
                    <DropdownMenu
                      variant="faded"
                      aria-label="Dropdown menu with icons"
                    >
                      <DropdownItem
                        onClick={() => handleDownload(item.img, item.name)}
                        startContent={
                          <FaDownload className="text-default-500 pointer-events-none flex-shrink-0" />
                        }
                      >
                        Download
                      </DropdownItem>
                      <DropdownItem
                        key="logout"
                        className="text-danger"
                        color="danger"
                        startContent={<FaExclamationTriangle />}
                      >
                        Report
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </div>
              </CardFooter>
            </Card>
          </Tooltip>
        ))}
      </div>
    </div>
  );
};

export default MoreArt;
