import { createContext, useState, useEffect } from "react";
import { propertyData } from "./data";

export const PropertyContext = createContext();

const PropertyContextProvider = ({ children }) => {
  const [propertiesList, setPropertiesList] = useState(propertyData);
  const [selectedCountry, setSelectedCountry] = useState("Location (any)");
  const [countriesList, setCountriesList] = useState([]);
  const [propertyType, setPropertyType] = useState("propertyType type (any)");
  const [uniqueProperties, setUniqueProperties] = useState([]);
  const [priceRange, setPriceRange] = useState("Price range (any)");
  const [date, setdate] = useState("date range (any)");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const allCountries = propertiesList.map((house) => {
      return house.country;
    });
    const uniqueCountries = ["Location (any)", ...new Set(allCountries)];
    setCountriesList(uniqueCountries);
  }, [propertiesList]);

  useEffect(() => {
    const allProperties = propertiesList.map((house) => {
      return house.type;
    });

    const uniqueProperties = ["Location (any)", ...new Set(allProperties)];
    setUniqueProperties(uniqueProperties);
  }, [propertiesList]);

  const handleClick = () => {
    setLoading(true);

    const isDefault = (str) => {
      return str.split(" ").includes("(any)");
    };
    const minPrice = parseInt(priceRange.split(" ")[0]);

    const maxPrice = parseInt(priceRange.split(" ")[2]);
    const minDate = parseInt(date.split(" ")[0]);

    const maxDate = parseInt(date.split(" ")[2]);

    const newpropertiesList = propertiesList.filter((house) => {
      const housePrice = parseInt(house.price);
      const houseDate = parseInt(house.date);

      if (
        house.country === selectedCountry &&
        house.type === propertyType &&
        housePrice >= minPrice &&
        housePrice <= maxPrice &&
        houseDate >= minDate &&
        houseDate <= maxDate
      ) {
        return house;
      }
      if (
        isDefault(selectedCountry) &&
        isDefault(propertyType) &&
        isDefault(priceRange) &&
        isDefault(date)
      ) {
        return house;
      }
      if (
        !isDefault(selectedCountry) &&
        isDefault(propertyType) &&
        isDefault(priceRange) &&
        isDefault(date)
      ) {
        return house.country === selectedCountry;
      }

      if (
        !isDefault(propertyType) &&
        isDefault(selectedCountry) &&
        isDefault(priceRange) &&
        isDefault(date)
      ) {
        return house.type === propertyType;
      }

      if (
        !isDefault(priceRange) &&
        isDefault(selectedCountry) &&
        isDefault(propertyType) &&
        isDefault(date)
      ) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house;
        }
      }

      if (
        !isDefault(date) &&
        isDefault(selectedCountry) &&
        isDefault(propertyType) &&
        isDefault(priceRange)
      ) {
        if (houseDate >= minDate && houseDate <= maxDate) {
          return house;
        }
      }
      if (
        !isDefault(selectedCountry) &&
        !isDefault(propertyType) &&
        isDefault(priceRange) &&
        isDefault(date)
      ) {
        return house.country === selectedCountry && house.type === propertyType;
      }
      if (
        !isDefault(selectedCountry) &&
        isDefault(propertyType) &&
        !isDefault(priceRange) &&
        isDefault(date)
      ) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house.country === selectedCountry;
        }
      }
      if (
        !isDefault(selectedCountry) &&
        isDefault(propertyType) &&
        isDefault(priceRange) &&
        !isDefault(date)
      ) {
        if (houseDate >= minDate && houseDate <= maxDate) {
          return house.country === selectedCountry;
        }
      }

      if (
        isDefault(selectedCountry) &&
        !isDefault(propertyType) &&
        !isDefault(priceRange) &&
        isDefault(date)
      ) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house.type === propertyType;
        }
      }

      if (
        isDefault(selectedCountry) &&
        !isDefault(propertyType) &&
        isDefault(priceRange) &&
        !isDefault(date)
      ) {
        if (houseDate >= minDate && houseDate <= maxDate) {
          return house.type === propertyType;
        }
      }

      if (
        isDefault(selectedCountry) &&
        isDefault(propertyType) &&
        !isDefault(priceRange) &&
        !isDefault(date)
      ) {
        if (houseDate >= minDate && houseDate <= maxDate) {
          return house;
        }
      }
      return "";
    });

    setTimeout(() => {
      return (
        newpropertiesList.length < 1
          ? setPropertiesList([])
          : setPropertiesList(newpropertiesList),
        setLoading(false)
      );
    }, 1000);
  };

  return (
    <PropertyContext.Provider
      value={{
        selectedCountry,
        setSelectedCountry,
        countriesList,
        propertyType,
        setPropertyType,
        uniqueProperties,
        priceRange,
        setPriceRange,
        propertiesList,
        loading,
        date,
        setdate,
        handleClick,
      }}
    >
      {children}
    </PropertyContext.Provider>
  );
};

export default PropertyContextProvider;
