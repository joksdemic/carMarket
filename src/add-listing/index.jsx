import Header from "@/components/Header";
import React, { useState } from "react";
import carDetails from "./../Shared/carDetails.json";
import InputField from "./components/InputField";
import DropdownField from "./components/DropdownField";
import { Separator } from "@/components/ui/separator";
import features from "./../Shared/features.json";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { db } from "./../../configs";
import { CarListing } from "./../../configs/schema";
import TextAreaField from "./components/TextAreaField";
import IconField from "./components/IconField";
import UploadImages from "./components/UploadImages";
import { RiLoader4Line } from "react-icons/ri";
import { toast } from 'sonner'
import { useNavigate } from 'react-router-dom'
import { useUser } from '@clerk/clerk-react'
import moment from "moment";

function AddListing() {
  const [formData, setFormData] = useState([]);
  const [featuresData, setFeaturesData] = useState([]);
  const [triggleUploadImages, setTriggleUploadImages] = useState();
  const [loader, setLoader] = useState(false);
  const navigate=useNavigate();
  const {user} = useUser();

  const handleInputChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(formData);
  };

  const handleFeaturesChange = (name, value) => {
    setFeaturesData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(featuresData);
  };

  const onSubmit = async (e) => {
    setLoader(true);
    e.preventDefault();
    console.log(formData);
    toast("Please wait while we are processing your request");

    try {
      const result = await db
        .insert(CarListing)
        .values({
          ...formData,
          features: featuresData,
          createdBy:user?.primaryEmailAddress?.emailAddress,
          postedOn:moment().format("DD/MM/YYYY")
        })
        .returning({ id: CarListing.id });
      if (result) {
        console.log("Data inserted successfully");
        setTriggleUploadImages(result[0]?.id);
        setLoader(false);
      }
    } catch (e) {
      console.log("Error", e);
    }
  };

  return (
    <div>
      <Header />
      <div className="px-10 md:px-20 my-10">
        <h2 className="font-bold text-4xl">Add New Listing</h2>
        <form className="p-10 border rounded-xl mt-10">
          <div>
            <h2 className="font-medium text-xl mb-6">Car Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {carDetails.carDetails.map((item, index) => (
                <div key={index}>
                  <label className="text-sm flex gap-2 items-center mb-1">
                    <IconField icon={item?.icon} />
                    {item?.label}{" "}
                    {item.required && <span className="text-red-700">*</span>}
                  </label>
                  {item.fieldType == "text" || item.fieldType == "number" ? (
                    <InputField
                      item={item}
                      handleInputChange={handleInputChange}
                    />
                  ) : item.fieldType == "dropdown" ? (
                    <DropdownField
                      item={item}
                      handleInputChange={handleInputChange}
                    />
                  ) : item.fieldType == "textarea" ? (
                    <TextAreaField
                      item={item}
                      handleInputChange={handleInputChange}
                    />
                  ) : null}
                </div>
              ))}
            </div>
          </div>
          <Separator className="my-6" />
          <div>
            <h2 className="font-medium text-xl my-6">Features</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {features.features.map((item, index) => (
                <div key={index} className="flex gap-2 items-center">
                  <Checkbox
                    onCheckedChange={(value) =>
                      handleFeaturesChange(item.name, value)
                    }
                  />{" "}
                  <h2>{item.label}</h2>
                </div>
              ))}
            </div>
          </div>
          <Separator className="my-6" />
          <UploadImages
            triggleUploadImages={triggleUploadImages}
            setLoader={(v) => {setLoader(v);navigate('/profile')}}/>
          <div className="mt-10 flex justify-end">
            <Button
              type="button"
              disabled={loader}
              onClick={(e) => onSubmit(e)}
            >
              {!loader ? (
                "Submit"
              ) : (
                <RiLoader4Line className="animate-spin text-lg" />
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddListing;
