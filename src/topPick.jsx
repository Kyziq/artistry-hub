import React from 'react';
import { Card, CardBody, Image, Button, CardFooter } from "@nextui-org/react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, cn} from "@nextui-org/react";
import { FaWhatsapp, FaFacebook, FaFacebookMessenger, FaCopy, FaEnvelope } from "react-icons/fa";
import {FacebookIcon, FacebookShareButton, FacebookMessengerIcon,FacebookMessengerShareButton,XIcon, TwitterShareButton,WhatsappShareButton,WhatsappIcon} from "react-share";
import { allLists } from './data/all-list';
import { MdIosShare } from "react-icons/md";
import { TbDots } from "react-icons/tb";
import { GoDownload } from "react-icons/go";
import { MdOutlineReport } from "react-icons/md";
export default function TopPicks() {
  const fixedWidth = '250px'; 
  const iconClasses = "text-xl text-default-500 pointer-events-none flex-shrink-0";
  const shareUrl = "http://github.com";
  const title = "GitHub";
  return (
    <div className="mt-5">
      <h2 className="text-xl font-bold">More Arts</h2>
      <div className="flex flex-wrap justify-start items-center gap-4 mt-4">
        {Object.values(allLists).map((categoryList, categoryIndex) => (
          <div key={categoryIndex} className="flex gap-4">
            {categoryList.map((item, index) => (
              <Card
                key={index}
                shadow="sm"
                isPressable
                onPress={() => console.log("item pressed")}
                className="relative overflow-hidden inline-block"
                style={{ margin: '0 0 1.5em', width: fixedWidth, height: '100%' }}
              >
                <CardBody className="p-0">
                  <div className="relative aspect-w-1 aspect-h-1 overflow-hidden">
                    <Image
                      shadow="sm"
                      radius="lg"
                      alt={item.name}
                      className="object-cover w-full h-full"
                      src={item.img}
                    />
                  </div>
                </CardBody>
                <CardFooter className="justify-between before:bg-white/10  overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <Dropdown backdrop="blur">
                  <DropdownTrigger>
                    <Button>
                      <MdIosShare />
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu variant="faded" aria-label="Static Actions">
                    <DropdownItem
                      key="whatsapp" className="cursor-pointer"
                    >
                      <WhatsappShareButton url={shareUrl} title={title}>
                          <WhatsappIcon size={24} round />
                          Share on WhatsApp
                      </WhatsappShareButton>
                    </DropdownItem>
                    <DropdownItem
                      startContent={<FaFacebook className={iconClasses} />}
                      key="facebook"
                    >
                      Share on Facebook
                    </DropdownItem>
                    <DropdownItem
                      startContent={<FaFacebookMessenger className={iconClasses} />}
                      key="messenger"
                    >
                      Share on Messenger
                    </DropdownItem>
                    <DropdownItem
                      startContent={<FaCopy className={iconClasses} />}
                      key="copy"
                    >
                      Copy link
                    </DropdownItem>
                    <DropdownItem
                      startContent={<FaEnvelope className={iconClasses} />}
                      key="email"
                    >
                      Share via Email
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
                <Dropdown>
                  <DropdownTrigger>
                    <Button >
                      <TbDots />
                    </Button>
                    </DropdownTrigger>
                  <DropdownMenu variant="faded" aria-label="Dropdown menu with icons">
                    <DropdownItem
                      startContent={<GoDownload className={iconClasses} />}
                    >
                      Download image
                    </DropdownItem>
                    <DropdownItem
                      key="copy"
                      className="text-danger"                      
                      startContent={<MdOutlineReport className={cn(iconClasses, "text-danger")} />}
                    >
                      Report
                    </DropdownItem>
                  </DropdownMenu>
              </Dropdown>  
              </CardFooter>
              </Card>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}