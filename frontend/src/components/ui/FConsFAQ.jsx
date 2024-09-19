import React from "react";
import FAQ from "../../assets/photos/Faq.jpg";
import FCFAQTable from "./FCFAQTable";

const FConsFAQ = () => {
  return (
    <div className="flex flex-col md:flex-row mx-12 md:mx-24 justify-center items-center">
      <div>
        <img src={FAQ} className="h-96 w-96" />
      </div>
      <div className="mx-4">
        <h1 className="text-3xl">
          Here Are Some Of The Most Frequently Asked <br />
          Questions About Our Consultations.
        </h1>
        <p className="font-bold text-gray-600">
          Explore common queries regarding our consultations with these
          frequently asked questions <br /> for quick insights.
        </p>
        <FCFAQTable />
      </div>
    </div>
  );
};

export default FConsFAQ;
