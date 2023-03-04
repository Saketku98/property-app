import React, { useContext } from "react";
import CountryDropdown from "./CountryDropdown";
import PropertyDropdown from "./PropertyDropdown";
import PriceRangeDropdown from "./PriceRangeDropdown";
import Dashdropdown from "./Dashdropdown";
import { RiSearch2Line } from "react-icons/ri";
import { PropertyContext } from "../PropertyContext";

const Filter = () => {
  const { handleClick } = useContext(PropertyContext);
  return (
    <div className="search m-5 px-[30px] py-6 max-w-[1170px] mx-auto flex flex-col lg:flex-row justify-between gap-4 lg:gap-x-3 relative lg:-top-4 lg:shadow-1 bg-white lg:bg-transparent lg:backdrop-blur rounded-lg">
      <CountryDropdown />
      <PropertyDropdown />
      <PriceRangeDropdown />
      <Dashdropdown />
      <button
        onClick={() => handleClick()}
        className="bg-blue-900 hover:bg-blue-800 transition w-full lg:max-w-[162px] h-16 rounded-lg flex justify-center items-center text-white text-lg"
      >
        <RiSearch2Line />
      </button>
    </div>
  );
};

export default Filter;
