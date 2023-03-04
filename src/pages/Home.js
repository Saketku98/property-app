import React from "react";
import Filter from "../components/Filter";
import PropertyList from "../components/PropertyList";

const Home = () => {
  return (
    <div className="min-h-[1800px] home">
      <section className="h-full max-h-[640px] mb-8 xl:mb-24">
        <Filter />
      </section>

      <PropertyList />
    </div>
  );
};

export default Home;
