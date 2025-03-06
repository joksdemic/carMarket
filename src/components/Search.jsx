import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { IoSearchSharp } from "react-icons/io5";
import Data from "../Shared/Data";

function Search() {
  return (
    <div className="p-2 md:p-5 bg-white rounded-md md:rounded-full flex-col md:flex md:flex-row gap-10 px-5 items-center w-[60%]">
      <Select>
        <SelectTrigger className="outline-none md:border-none w-full shadow-none">
          <SelectValue placeholder="Cars" />
        </SelectTrigger>
        <SelectContent className="bg-white">
          <SelectItem value="light">New</SelectItem>
          <SelectItem value="dark">Old</SelectItem>
        </SelectContent>
      </Select>
      <Separator orientation="vertical" className="bg-[#eef0fc]" />
      <Select>
        <SelectTrigger className="outline-none md:border-none w-full shadow-none">
          <SelectValue placeholder="Car brand" />
        </SelectTrigger>
        <SelectContent className="bg-white">
          {Data.CarBrands.map((brand, index) => (
            <SelectItem value={brand.name}>{brand.name}</SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Separator orientation="vertical" className="bg-[#eef0fc]" />
      <Select>
        <SelectTrigger className="outline-none md:border-none w-full shadow-none">
          <SelectValue placeholder="Pricing" />
        </SelectTrigger>
        <SelectContent className="bg-white">
          {Data.Pricing.map((pricing, index) => (
            <SelectItem value={pricing.amount}>{pricing.amount}</SelectItem>
          ))}
        </SelectContent>
      </Select>
      <div>
        <IoSearchSharp className="text-[35px] bg-[#eef0fc] cursor-pointer rounded-full p-2 text-white hover:scale-105 transition-all" />
      </div>
    </div>
  );
}

export default Search;
