import React, { useState, useContext } from "react";
import { RiMapPinLine, RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import { Menu } from "@headlessui/react";
import { PropertyContext } from "../PropertyContext";

const CountryDropdown = () => {
  const { selectedCountry, setSelectedCountry, countriesList } =
    useContext(PropertyContext);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className="dropdown-btn w-full text-left"
      >
        <RiMapPinLine className="dropdown-icon-primary text-blue-900" />
        <div>
          <div className="text-[15px] font-medium leading-tight">
            {selectedCountry}
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
        {countriesList.map((country, index) => {
          return (
            <Menu.Item
              onClick={() => setSelectedCountry(country)}
              className="cursor-pointer hover:text-violet-700 transition"
              as="li"
              key={index}
            >
              {country}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default CountryDropdown;
