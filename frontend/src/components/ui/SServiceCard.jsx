import React from "react";
import { FaSearch } from "react-icons/fa";

const SServiceCard = () => {
  return (
    <div className="items-center text-center flex flex-col justify-center shadow-lg p-12 rounded m-6 hover:scale-105 hover:transition-all hover:bg-orange-200">
      <div className="flex flex-col justify-center items-center">
        <FaSearch size={50} color="red" />
        <h1 className="font-medium text-bold text-xl my-2">On demand Service</h1>
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga facere
          fugiat earum, veniam similique eius et suscipit corrupti adipisci
          maxime?
        </p>
      </div>
    </div>
  );
};

export default SServiceCard;
