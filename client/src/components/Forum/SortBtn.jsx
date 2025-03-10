import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router";

const sortParams = [
  {
    id: 1,
    name: "All",
    param: "/forum",
  },
  {
    id: 2,
    name: "Best Rating",
    param: "/forum?top=true",
  },
  {
    id: 3,
    name: "Popular",
    param: "/forum?popular=true",
  },
  {
    id: 4,
    name: "Date",
    param: "/forum?sortBy=date",
  },
];

export default function SortBtn() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50">
          Sort By
          <ChevronDownIcon
            aria-hidden="true"
            className="-mr-1 size-5 text-gray-400"
          />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
      >
        <div className="py-1">
          {sortParams.map((link) => {
            return (
              <MenuItem key={link.id}>
                <Link
                  to={link.param}
                  className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                >
                  {link.name}
                </Link>
              </MenuItem>
            );
          })}
        </div>
      </MenuItems>
    </Menu>
  );
}
