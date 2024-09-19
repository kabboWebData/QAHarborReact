import React from "react";
import JTI from "../../assets/photos/icon_jti.png"

const ImageWithTextOverlay = () => {
  return (
    <div className="relative w-full h-64">
      {/* Image */}
      <img
        src={JTI}
        alt="Sample"
        className="w-full h-full object-cover"
      />
      {/* Overlay Text */}
      <div className="absolute top-0 left-0 w-full h-full flex items-start justify-center">
        <div className="bg-black bg-opacity-50 text-white p-4 mt-2 rounded">
          <h2 className="text-lg font-bold">This is a Transparent Overlay Text</h2>
        </div>
      </div>
    </div>
  );
};

export default ImageWithTextOverlay;
