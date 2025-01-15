"use client";
import Image from "next/image";
import Link from "next/link";
import UserImg from "../../../public/user.svg";
import {
  HomeIcon,
  LogoutIcon,
  ShoppingBagIcon,
  SwatchIcon,
  UsersIcon,
} from "../icons";
import { Button } from "../ui/Button";
import { logoutUser } from "@/actions/authActions";
import { usePathname } from "next/navigation";

function Sidebar({ userData }) {
  const path = usePathname();
  const menuItems = [
    { text: "Dashboard", url: "/", icon: <HomeIcon /> },
    { text: "Users", url: "/users", icon: <UsersIcon /> },
    { text: "Product Type", url: "/product-type", icon: <SwatchIcon /> },
    { text: "Products", url: "/products", icon: <ShoppingBagIcon /> },
    { text: "Buyers", url: "/buyers", icon: <UsersIcon /> },
  ];

  return (
    <div className="sidebar-main">
      <div className="p-4 m-4">
        <h1 className="text-3xl font-semibold">eStore</h1>
      </div>

      <ul className="mx-auto text-lg flex flex-col">
        {menuItems.map((menuItem, index) => {
          return (
            <li key={index}>
              <Link
                href={menuItem.url}
                className={`px-5 py-3 my-2 mx-auto w-full rounded-md hover:bg-blue-100 flex ${
                  path === menuItem.url ? "bg-blue-100" : ""
                }`}
              >
                <span className="mx-2">{menuItem.icon}</span>
                {menuItem.text}
              </Link>
            </li>
          );
        })}
      </ul>

      <div className="sidebar-usercard">
        <div className="flex  m-5 mb-8 items-center">
          <Image
            height={50}
            width={50}
            src={UserImg}
            alt="User Avatar"
            radius="sm"
            className="border-gray-600 rounded-full border-2"
          />
          <div className="m-auto text-lg"> {userData.userName}</div>
          <Button
            className="bg-transparent text-black p-0"
            onClick={() => logoutUser()}
          >
            <LogoutIcon className="h-7 w-7" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
