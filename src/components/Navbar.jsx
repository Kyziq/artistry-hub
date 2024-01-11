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
import { Link, useNavigate } from 'react-router-dom';
import {
  FaSearch,
  FaCog,
  FaHeart,
  FaBell,
  FaQuestionCircle,
  FaCommentDots,
  FaSignOutAlt,
} from 'react-icons/fa';
import { allLists } from '../data/list';
import logo from '../assets/logo.png';

const SearchAutocomplete = ({ allLists }) => {
  const navigate = useNavigate();

  const handleSelectionChange = (id) => {
    if (id) {
      navigate(`/art/${id}`);
    }
  };

  const itemToString = (item) => {
    return item ? `${item.name} - ${item.artistInfo.name}` : '';
  };

  const filterItems = (item, query) => {
    const searchString = `${item.name} ${item.artistInfo.name}`.toLowerCase();
    return searchString.includes(query.toLowerCase());
  };

  return (
    <Autocomplete
      defaultItems={allLists}
      aria-label="Search for Artworks"
      filterItems={filterItems}
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
      onSelectionChange={handleSelectionChange}
      itemToString={itemToString}
    >
      {(item) => (
        <AutocompleteItem key={item.id} textValue={itemToString(item)}>
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
                <span className="text-tiny text-default-400">
                  {item.artistInfo.name}
                </span>
              </div>
            </div>
          </div>
        </AutocompleteItem>
      )}
    </Autocomplete>
  );
};

const UserProfileDropdown = () => {
  const iconClasses = 'text-sm';

  return (
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
        <DropdownItem key="profile">
          <div>
            <p className="font-semibold">Signed in as</p>
            <p className="font-semibold">hafizsuip@gmail.com</p>
          </div>
        </DropdownItem>
        <DropdownItem
          key="settings"
          startContent={<FaCog className={iconClasses} />}
        >
          Settings
        </DropdownItem>
        <DropdownItem
          key="favourites"
          startContent={<FaHeart className={iconClasses} />}
        >
          Favourites
        </DropdownItem>
        <DropdownItem
          key="notifications"
          startContent={<FaBell className={iconClasses} />}
        >
          Notifications
        </DropdownItem>
        <DropdownItem
          key="help_and_support"
          startContent={<FaQuestionCircle className={iconClasses} />}
        >
          Help & Support
        </DropdownItem>
        <DropdownItem
          key="feedback"
          startContent={<FaCommentDots className={iconClasses} />}
        >
          Feedback
        </DropdownItem>
        <DropdownItem
          key="logout"
          color="danger"
          className="text-danger"
          startContent={<FaSignOutAlt className={iconClasses} />}
        >
          Log Out
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

const NavbarComponent = () => {
  const allItems = Object.values(allLists).flat();
  const sortedAllList = allItems.sort((a, b) => a.name.localeCompare(b.name));
  return (
    <Navbar maxWidth={'full'} isBordered shouldHideOnScroll>
      <Link to="/" reloadDocument>
        <Image src={logo} alt="Logo" width={40} height={40} isZoomed />
      </Link>
      <NavbarContent justify="start">
        <NavbarBrand>
          <SearchAutocomplete allLists={sortedAllList} />
        </NavbarBrand>
        <UserProfileDropdown />
      </NavbarContent>
    </Navbar>
  );
};

export default NavbarComponent;
