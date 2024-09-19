import React,{useState} from "react";
import SQATable from "./SQATable";

const ServicePackage = () => {
    const [isSQA,setIsSQA] = useState(true)
    
  return (
    <div className="text-center my-6">
      <p className="text-red-500">Package</p>
      <h1 className="text-4xl font-bold">
        Proper SQA Consulting Is Essential In Addressing SQA Problems
      </h1>
        <div className="border-b-2 border-gray-200 mx-24 mt-6">
            <button 
            className={isSQA ? "bg-blue-600 text-white px-3 py-2 rounded":"bg-white px-3 py-2 rounded"}
            onClick={()=>setIsSQA(true)}>
                SQA Package
                </button>
            <button
            className={!isSQA ? "bg-blue-600 text-white px-3 py-2 rounded":"bg-white px-3 py-2 rounded"}
            onClick={()=>setIsSQA(false)}>Augmantation Package</button>
        </div>
        {isSQA && <SQATable/>}
    </div>
  );
};

export default ServicePackage;
