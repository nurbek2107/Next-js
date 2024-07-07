"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Avatar,
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Typography,
} from "@material-tailwind/react";
import {
  Cog6ToothIcon,
  InboxArrowDownIcon,
  LifebuoyIcon,
  PowerIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";

// Profile menu items
const profileMenuItems = [
  {
    label: "My Profile",
    icon: UserCircleIcon,
  },
  {
    label: "Edit Profile",
    icon: Cog6ToothIcon,
  },
  {
    label: "Inbox",
    icon: InboxArrowDownIcon,
  },
  {
    label: "Help",
    icon: LifebuoyIcon,
  },
  {
    label: "Sign Out",
    icon: PowerIcon,
  },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  const user = {
    displayName: "User Name",
  };

  return (
    <div className="navbar bg-base-100 max-w-[1100px] m-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex="0"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <ul className="p-2">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="dropdown dropdown-end">
            <div className="flex items-center gap-5">
              <div
                tabIndex="0"
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <Menu
                  open={isMenuOpen}
                  handler={setIsMenuOpen}
                  placement="bottom-end"
                >
                  <MenuHandler>
                    <Button
                      variant="text"
                      color="blue-gray"
                      className="flex items-center rounded-full p-0"
                    >
                      <Avatar
                        variant="circular"
                        size="md"
                        alt="User"
                        withBorder={true}
                        color="blue-gray"
                        className="p-0.5"
                        src="https://docs.material-tailwind.com/img/face-2.jpg"
                      />
                    </Button>
                  </MenuHandler>
                  <MenuList className="p-1 bg-blue-gray-900">
                    {profileMenuItems.map(({ label, icon }, key) => {
                      const isLastItem = key === profileMenuItems.length - 1;
                      return (
                        <MenuItem
                          key={label}
                          onClick={closeMenu}
                          className={`flex items-center gap-2 rounded ${
                            isLastItem
                              ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                              : ""
                          }`}
                        >
                          {React.createElement(icon, {
                            className: `h-4 w-4 ${
                              isLastItem ? "text-red-500" : ""
                            }`,
                            strokeWidth: 2,
                          })}
                          <Typography
                            as="span"
                            variant="small"
                            className="font-normal"
                            color={isLastItem ? "red" : "inherit"}
                          >
                            {label}
                          </Typography>
                        </MenuItem>
                      );
                    })}
                    
                  </MenuList>
                </Menu>
              </div>
            </div>
          </div>
        ) : (
          <Link href="/login" className="btn btn-ghost">
            Login
          </Link>
        )}
      </div>
    </div>
  );
}

export default Navbar;
