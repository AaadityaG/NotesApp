"use client"
import React, { useState } from "react";
import { Button } from "./ui/button";
import { IoHomeOutline, IoSettingsOutline, IoPricetagsOutline } from "react-icons/io5";
// import Home from "./Home";
// import Settings from "./Settings";
// import Billing from "./Billing";
import Link from "next/link";
import { usePathname } from "next/navigation";

const buttonConfig = [
  { icon: <IoHomeOutline size={23} className="text-primary" />, name: "Home", href: "/dashboard" },
  {  icon: <IoSettingsOutline size={23} className="text-primary" />, name: "Settings", href: "/dashboard/setting" },
  { icon: <IoPricetagsOutline size={23} className="text-primary" />, name: "Billing", href: "/dashboard/billing"},
];

export default function Sidebar() {
  const [activeButton, setActiveButton] = useState<string>("home");

  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  const pathname = usePathname()

  

  return (
    <div className="flex p-7">
      <div className="w-64 rounded-sm h-screen p-4">
        <ul>
          {buttonConfig.map((button) => (
            <Link key={button.name} href={button.href}>
              <Button
                variant="ghost"
                onClick={() => handleButtonClick(pathname)}
                className={`w-full flex justify-start gap-3 text-[17px] text-left p-6 mb-2 rounded-sm ${
                  activeButton === button.href ? "dark:bg-gray-600 bg-[#bdbdbd]" : ""
                }`}
              >
                {button.icon}
                <span>{button.name}</span>
              </Button>
            </Link>
          ))}
        </ul>
      </div>
      
    </div>
  );
}
