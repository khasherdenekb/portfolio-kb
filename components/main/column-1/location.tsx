"use client";
import React from "react";
import { Card, CardHeader, Divider, Image } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { locationConfig } from "@/config/main/column-1/column1Config";

export default function Location() {
  const { theme } = useTheme();
  return (
    <Card className="col-span-1 small-card relative">
      <CardHeader className="flex justify-between w-full">
        <p className="small-text ">Location</p>
        <p className="small-text">{locationConfig.location}</p>
      </CardHeader>

      <div className="flex justify-center">
        <Divider className=" absolute top-10 z-50 w-[96%]" />
      </div>

      <Image
        isZoomed
        src={
          theme === "dark"
            ? "https://framerusercontent.com/images/3hu8eAZApOeZqyBzEvXy8O5L6U.jpg?scale-down-to=512"
            : "https://framerusercontent.com/images/VUFpyNfHahYo4OtUEXPg5ABhLbI.jpg?scale-down-to=512"
        }
        alt="locationImg"
        className="w-full h-full object-fill"
      />
    </Card>
  );
}
