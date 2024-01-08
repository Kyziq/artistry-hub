import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
  Image,
  Autocomplete,
  AutocompleteItem,
} from '@nextui-org/react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { allLists } from '../data/list';

const SearchAutocomplete = ({ allLists }) => (
  <Autocomplete
    defaultItems={allLists}
    aria-label="Search for Artworks"
    classNames={{
      base: 'max-w-lg',
      listboxWrapper: 'max-h-[320px]',
      selectorButton: 'text-default-500',
    }}
    inputProps={{
      classNames: {
        input: 'ml-1',
        inputWrapper: 'h-[48px]',
      },
    }}
    listboxProps={{
      hideSelectedIcon: true,
      itemClasses: {
        base: [
          'rounded-medium',
          'text-default-500',
          'transition-opacity',
          'data-[hover=true]:text-foreground',
          'dark:data-[hover=true]:bg-default-50',
          'data-[pressed=true]:opacity-70',
          'data-[hover=true]:bg-default-200',
          'data-[selectable=true]:focus:bg-default-100',
          'data-[focus-visible=true]:ring-default-500',
        ],
      },
    }}
    placeholder="Search"
    popoverProps={{
      offset: 10,
      classNames: {
        base: 'rounded-large',
        content: 'p-1 border-small border-default-100 bg-background',
      },
    }}
    startContent={<FaSearch size={18} />}
    radius="full"
    variant="bordered"
  >
    {(item) => (
      <AutocompleteItem key={item.id} textValue={item.name}>
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <Avatar
              alt={item.name}
              className="flex-shrink-0"
              size="sm"
              src={item.img}
            />
            <div className="flex flex-col">
              <span className="text-small">{item.name}</span>
              <span className="text-tiny text-default-400">{item.artist}</span>
            </div>
          </div>
        </div>
      </AutocompleteItem>
    )}
  </Autocomplete>
);

const UserProfileDropdown = () => (
  <Dropdown placement="bottom-end">
    <DropdownTrigger>
      <Avatar
        isBordered
        as="button"
        className="transition-transform"
        color="primary"
        name="Hafiz Suip"
        size="sm"
        src="https://clipart-library.com/new_gallery/241-2415819_pikachu-in-ash-ash-ketchum-hat-pikachu.png"
      />
    </DropdownTrigger>
    <DropdownMenu aria-label="Profile Actions" variant="flat">
      <DropdownItem key="profile" className="h-14 gap-2">
        <p className="font-semibold">Signed in as</p>
        <p className="font-semibold">hafizsuip@gmail.com</p>
      </DropdownItem>
      <DropdownItem key="settings">Settings</DropdownItem>
      <DropdownItem key="favourites">Favourites</DropdownItem>
      <DropdownItem key="notificaitons">Notifications</DropdownItem>
      <DropdownItem key="help_and_support">Help & Support</DropdownItem>
      <DropdownItem key="feedback">Feedback</DropdownItem>
      <DropdownItem key="logout" color="danger">
        Log Out
      </DropdownItem>
    </DropdownMenu>
  </Dropdown>
);

const NavbarComponent = () => {
  const allItems = Object.values(allLists).flat();
  const sortedAllList = allItems.sort((a, b) => a.name.localeCompare(b.name));
  return (
    <Navbar maxWidth={'full'} isBordered shouldHideOnScroll>
      <Link to="/artistry-hub/" reloadDocument>
        <Image src="./logo.png" alt="Logo" width={40} height={40} isZoomed />
      </Link>
      <NavbarContent justify="start">
        <NavbarBrand>
          <SearchAutocomplete allLists={sortedAllList} />
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent as="div" className="items-center" justify="end">
        <UserProfileDropdown />
      </NavbarContent>
    </Navbar>
  );
};

export default NavbarComponent;
