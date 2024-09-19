import React, { useState } from "react";

const LargeText = ({ text, maxChar }) => {
  const [isFull, setIsFull] = useState(false);
  const desc = isFull ? text : text.substring(0, maxChar) + " ...";
  return (
    <div className="p-4">
      <div className="max-w-96">{desc}</div>
      <div className="font-bold my-2 text-red-500" onClick={() => setIsFull(!isFull)}>
        {isFull ? "<< Read Less" : "Read More >>"}
      </div>
    </div>
  );
};

export default LargeText;
