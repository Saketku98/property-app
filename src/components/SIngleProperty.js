import React from "react";
import { BiBed, BiBath, BiArea } from "react-icons/bi";

const SingleProperty = ({ singleProperty }) => {
  const {
    imageLg,
    type,
    country,
    address,
    bedrooms,
    bathrooms,
    surface,
    price,
  } = singleProperty;
  return (
    <div className="bg-white shadow-1 p-5 rounded-lg rounded-tl-[90px] w-full max-w-[352px] mx-auto cursor-pointer hover:shadow-2xl transition">
      <img className="mb-8" src={imageLg} alt="" />
      <div className="mb-4 flex gap-x-2 text-sm">
        <div className="bg-green-800 rounded text-white px-3">{type}</div>
        <div className="bg-blue-800 rounded text-white px-3">{country}</div>
      </div>
      <div className="text-lg font-semibold max-w-[260px]">{address}</div>
      <div className="flex gap-x-4 my-4">
        <div className="flex items-center text-gray-600 gap-1">
          <div className="text-[20px]">
            <BiBed className="text-blue-900" />
          </div>
          <div>{bedrooms}</div>
        </div>
        <div className="flex items-center text-gray-600 gap-1">
          <div className="text-[20px]">
            <BiBath className="text-blue-900" />
          </div>
          <div>{bathrooms}</div>
        </div>
        <div className="flex items-center text-gray-600 gap-1">
          <div className="text-[20px]">
            <BiArea className="text-blue-900" />
          </div>
          <div>{surface}</div>
        </div>
      </div>
      <div className="text-lg font-semibold text-blue-800 mb-4">₹ {price}</div>
    </div>
  );
};

export default SingleProperty;
