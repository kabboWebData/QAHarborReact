import React from "react";

const SSuccessCard = ({id,title,desc}) => {
  return (
    <div className="bg-white min-h-40 rounded m-4 p-4 shadow-sm hover:scale-105 hover:shadow-md hover:transition-all">
      <h1 className="font-bold text-4xl text-red-500">0{id}</h1>
      <h2 className="text-bold text-xl my-4">{title}</h2>
      <p>
        {desc}
      </p>
    </div>
  );
};

export default SSuccessCard;
