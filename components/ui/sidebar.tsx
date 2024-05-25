"use client";

import { useState } from "react";
import { Button } from "./button";
import { IoHomeOutline, IoSettingsOutline, IoPricetagsOutline } from "react-icons/io5";

const buttonConfig = [
  { name: "button1", icon: <IoHomeOutline size={23} className="text-primary"/>, label: "Home", content: "Content for Button 1" },
  { name: "button2", icon: <IoSettingsOutline size={23} className="text-primary"/>, label: "Setting", content: "Content for Button 2" },
  { name: "button3", icon: <IoPricetagsOutline size={23} className="text-primary" />, label: "Billing", content: "Content for Button 3" },
];

const Sidebar = () => {
  const [activeButton, setActiveButton] = useState<string | null>("button1");

  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };


  return (
    <div className="flex p-7">
      <div className="w-64 rounded-sm h-screen p-4">
        <ul>
          {buttonConfig.map((button) => (
            <li key={button.name}>
              <Button
                variant="ghost"
                onClick={() => handleButtonClick(button.name)}
                className={`w-full flex justify-start gap-3 text-[17px] text-left p-6 mb-2 rounded-sm  ${
                  activeButton === button.name ? "dark:bg-gray-600 bg-[#bdbdbd]" : ""
                }`}
              >
                {button.icon}
                <span>{button.label}</span>
              </Button>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-1 p-4">
        {buttonConfig.map(
          (button) =>
            activeButton === button.name && <div key={button.name} className="pl-5">{button.content}</div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
