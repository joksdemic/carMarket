import React from "react";
import Data from "../Shared/Data";

function Categories() {
  return (
    <div className="mt-10">
      <h2 className="font-bold text-3xl text-center mb-6">Browse by type</h2>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-6 gap-9 px-20">
        {Data.Categories.map((category, index) => (
          <div className="border rounded-xl p-3 items-center flex flex-col hover:shadow-2xl cursor-pointer bg-[#eef0fc]">
            <img src={category.icon} width={45} height={45} alt="" />
            <h2 className="mt-2">{category.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
