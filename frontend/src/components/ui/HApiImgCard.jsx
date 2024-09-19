import React from "react";
import API from "../../assets/photos/API.png";
import LargeText from "./LargeText";

const HApiImgCard = () => {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-lg mx-11">
      <div>
        <img src={API} className="h-56 w-full rounded-lg" alt="" />
      </div>
      <div className="bg-gray-100 py-2 px-6">
        <p>Last Update 3 Minutes Ago...</p>
      </div>
      <div className="rounded">
        <LargeText
          text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae voluptates quod quia ipsam id! Sit reiciendis qui voluptate nostrum facere fugit veritatis veniam porro, magnam asperiores dolor laudantium doloribus distinctio, nisi nihil dolores, accusantium dolorem? Explicabo provident veritatis ratione nihil debitis natus illo nemo, eveniet tempora earum totam, accusamus corporis eum quae quibusdam quaerat quisquam laborum, facilis ducimus nam recusandae assumenda eligendi consequuntur reprehenderit? Eum, rem eveniet facere repudiandae sunt culpa? Voluptas consequatur rerum omnis officia distinctio voluptatibus accusamus harum ad, debitis ab? Quis recusandae veritatis modi neque sint quos deserunt facilis, omnis dolores maxime ipsum exercitationem, magnam a ad!"
          maxChar={200}
        />
      </div>
    </div>
  );
};

export default HApiImgCard;
