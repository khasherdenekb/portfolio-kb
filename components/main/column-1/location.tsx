"use client";
import React from "react";
import { Divider, Image } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { locationConfig } from "@/config/main/column-1/column1Config";

export default function Location() {
  const { theme } = useTheme();
  return (
    <div className="relative col-span-1">
      <p className="z-50 text-[10px] absolute top-0 left-0 p-3">Location</p>
      <p className="z-50 text-[10px] absolute top-0 right-0 p-3">
        {locationConfig.location}
      </p>
      <div className="flex justify-center">
        <Divider className=" absolute top-10 z-50 w-[96%]" />
      </div>

      <Image
        src={
          theme === "dark"
            ? "https://framerusercontent.com/images/3hu8eAZApOeZqyBzEvXy8O5L6U.jpg?scale-down-to=512"
            : "https://framerusercontent.com/images/VUFpyNfHahYo4OtUEXPg5ABhLbI.jpg?scale-down-to=512"
        }
        alt="locationImg"
        className="object-fill small-card"
      />
    </div>
  );
}
