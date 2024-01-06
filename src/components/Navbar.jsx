import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  Input,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
  Image,
} from '@nextui-org/react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

const NavbarComponent = () => {
  return (
    <Navbar maxWidth={'full'} isBordered shouldHideOnScroll>
      <Link to="/" reloadDocument>
        <Image src="/logo.png" alt="Logo" width={40} height={40} isZoomed />
      </Link>
      <NavbarContent justify="start">
        <NavbarBrand>
          <SearchInput />
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent as="div" className="items-center" justify="end">
        <UserProfileDropdown />
      </NavbarContent>
    </Navbar>
  );
};

const SearchInput = () => (
  <Input
    classNames={{
      base: 'max-w-full sm:max-w-[30rem] h-10',
      mainWrapper: 'h-full',
      input: 'text-small',
      inputWrapper:
        'h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20',
    }}
    placeholder="Type to search..."
    size="sm"
    startContent={<FaSearch size={18} />}
    type="search"
  />
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

export default NavbarComponent;
