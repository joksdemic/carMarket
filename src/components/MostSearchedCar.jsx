import React from "react";
import FakeData from "./Shared/FakeData";
import CarItem from "./CarItem";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function MostSearchedCar() {
  console.log(FakeData.carList);
  return (
    <div className="mx-20">
      <h2 className="font-bold text-3xl text-center my-10">Most Searched Cars</h2>

      <Carousel>
        <CarouselContent>
          {FakeData.carList.map((car, index) => (
            <CarouselItem className="basis-1/4">
                <CarItem car={car} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-[#eef0fc] cursor-pointer" />
        <CarouselNext className="bg-[#eef0fc] cursor-pointer" />
      </Carousel>
    </div>
  );
}

export default MostSearchedCar;
