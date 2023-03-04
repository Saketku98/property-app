import React, { useState, useContext } from "react";
import { RiHome5Line, RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import { Menu } from "@headlessui/react";
import { PropertyContext } from "../PropertyContext";

const PropertyDropdown = () => {
  const { propertyType, setPropertyType, uniqueProperties } =
    useContext(PropertyContext);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className="dropdown-btn w-full text-left"
      >
        <RiHome5Line className="dropdown-icon-primary text-blue-900" />
        <div>
          <div className="text-[15px] font-medium leading-tight">
            {propertyType}
          </div>
          <div className="text-[13px]">Select your place</div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className="dropdown-icon-secondary text-blue-900" />
        ) : (
          <RiArrowDownSLine className="dropdown-icon-secondary text-blue-900" />
        )}
      </Menu.Button>
      <Menu.Items className={"dropdown-menu"}>
        {uniqueProperties.map((property, index) => {
          return (
            <Menu.Item
              onClick={() => setPropertyType(property)}
              className="cursor-pointer hover:text-violet-700 transition"
              as="li"
              key={index}
            >
              {property}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default PropertyDropdown;
