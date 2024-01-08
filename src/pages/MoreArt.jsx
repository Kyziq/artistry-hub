import React from 'react';
import { Card, CardHeader, Image, Button, CardFooter } from '@nextui-org/react';
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  cn,
} from '@nextui-org/react';
import {
  FacebookIcon,
  FacebookShareButton,
  XIcon,
  TwitterShareButton,
  WhatsappShareButton,
  WhatsappIcon,
  RedditShareButton,
  RedditIcon,
  EmailShareButton,
  EmailIcon,
} from 'react-share';
import { allLists } from '../data/list';
import { MdIosShare } from 'react-icons/md';
import { TbDots } from 'react-icons/tb';
import { GoDownload } from 'react-icons/go';
import { MdOutlineReport } from 'react-icons/md';

export default function MoreArt() {
  const fixedWidth = '250px';
  const iconClasses =
    'text-sm text-default-500 pointer-events-none flex-shrink-0';
  const shareUrl = 'http://github.com';
  const title = 'GitHub';

  const [savedStates, setSavedStates] = React.useState({});
  const toggleSaveState = (index) => {
    setSavedStates((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const handleDownload = (imageUrl, imageName) => {
    // Create an anchor element
    const anchor = document.createElement('a');
    anchor.href = imageUrl;
    anchor.download = imageName || 'download';
    anchor.click();
  };

  return (
    <div className="mt-5">
      <h2 className="text-2xl font-bold">More Arts</h2>
      <div className="flex flex-wrap justify-start items-center gap-4 mt-4">
        {Object.values(allLists).map((categoryList, categoryIndex) => (
          <div key={categoryIndex} className="flex gap-4 flex-wrap">
            {categoryList.map((item, index) => (
              <Card
                key={index}
                shadow="sm"
                isPressable
                onPress={() => console.log('item pressed')}
                className="relative overflow-hidden inline-block group"
                style={{
                  margin: '0 0 1.5em',
                  width: fixedWidth,
                  height: '100%',
                }}
              >
                <CardHeader className="absolute z-10 top-1 flex-col !items-start opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex justify-between items-center w-full">
                    <span className="text-sm font-medium">Header Tumblr</span>
                    <Button
                      className={
                        savedStates[index]
                          ? 'bg-black text-white border-default-200'
                          : ''
                      }
                      color="danger"
                      radius="full"
                      size="sm"
                      variant={savedStates[index] ? 'bordered' : 'solid'}
                      onPress={() => toggleSaveState(index)}
                    >
                      {savedStates[index] ? 'Saved' : 'Save'}
                    </Button>
                  </div>
                </CardHeader>
                <Image
                  removeWrapper
                  shadow="sm"
                  radius="lg"
                  alt={item.name}
                  className="object-cover -z-1 w-full h-full"
                  src={item.img}
                />
                <CardFooter className="justify-between before:bg-white/10  overflow-hidden py-1 absolute before:rounded-sm rounded-small bottom-1 w-[calc(100%_-_5px)] shadow-small ml-1 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="flex gap-4 items-center">
                    <Dropdown backdrop="blur">
                      <DropdownTrigger>
                        <Button size="sm" className="p-1">
                          <MdIosShare className={`${iconClasses} text-sm`} />
                        </Button>
                      </DropdownTrigger>
                      <DropdownMenu variant="faded" aria-label="Static Actions">
                        <DropdownItem key="facebook" className="cursor-pointer">
                          <FacebookShareButton
                            url={shareUrl}
                            title={title}
                            className="Demo__some-network__share-button flex items-center"
                          >
                            <FacebookIcon size={32} round />
                            <span className="ml-2">Facebook</span>
                          </FacebookShareButton>
                        </DropdownItem>

                        <DropdownItem key="whatsapp" className="cursor-pointer">
                          <WhatsappShareButton
                            url={shareUrl}
                            title={title}
                            className="Demo__some-network__share-button flex items-center"
                          >
                            <WhatsappIcon size={32} round />
                            <span className="ml-2">Whatsapp</span>
                          </WhatsappShareButton>
                        </DropdownItem>

                        <DropdownItem key="x" className="cursor-pointer">
                          <TwitterShareButton
                            url={shareUrl}
                            title={title}
                            className="Demo__some-network__share-button flex items-center"
                          >
                            <XIcon size={32} round />
                            <span className="ml-2">Twitter</span>
                          </TwitterShareButton>
                        </DropdownItem>

                        <DropdownItem key="reddit" className="cursor-pointer">
                          <RedditShareButton
                            url={shareUrl}
                            title={title}
                            className="Demo__some-network__share-button flex items-center"
                          >
                            <RedditIcon size={32} round />
                            <span className="ml-2">Reddit</span>
                          </RedditShareButton>
                        </DropdownItem>
                        <DropdownItem key="email" className="cursor-pointer">
                          <EmailShareButton
                            url={shareUrl}
                            title={title}
                            className="Demo__some-network__share-button flex items-center"
                          >
                            <EmailIcon size={32} round />
                            <span className="ml-2">Email </span>
                          </EmailShareButton>
                        </DropdownItem>
                      </DropdownMenu>
                    </Dropdown>

                    <Dropdown>
                      <DropdownTrigger>
                        <Button size="sm" className="p-1">
                          <TbDots className={`${iconClasses} text-sm`} />
                        </Button>
                      </DropdownTrigger>
                      <DropdownMenu
                        variant="faded"
                        aria-label="Dropdown menu with icons"
                      >
                        <DropdownItem
                          onClick={() => handleDownload(item.img, item.name)}
                          startContent={<GoDownload className={iconClasses} />}
                        >
                          Download image
                        </DropdownItem>
                        <DropdownItem
                          key="copy"
                          className="text-danger"
                          startContent={
                            <MdOutlineReport
                              className={cn(iconClasses, 'text-danger')}
                            />
                          }
                        >
                          Report
                        </DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
