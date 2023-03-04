import React, { useContext } from "react";
// import { Link } from "react-router-dom";
import { ImSpinner2 } from "react-icons/im";
import { PropertyContext } from "../PropertyContext";
import SingleProperty from "./SIngleProperty";

const PropertyList = () => {
  const { propertiesList, loading } = useContext(PropertyContext);
  if (loading) {
    return (
      <ImSpinner2 className="mx-auto animate-spin text-violet-700 text-4xl mt--[200px]" />
    );
  }

  if (propertiesList.length < 1) {
    return (
      <div className="text-center text-3xl text-gray-400 mt-48">
        Sorry, Nothing found
      </div>
    );
  }

  return (
    <section className="mb-20">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14">
          {propertiesList.map((singleProperty, index) => {
            return (
              <SingleProperty key={index} singleProperty={singleProperty} />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PropertyList;
