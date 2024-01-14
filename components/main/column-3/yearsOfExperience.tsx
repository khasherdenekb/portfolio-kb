import React from "react";
import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import { yearsOfExperienceConfig } from "@/config/main/column-3/column3Config";

export default function YearsOfExperience() {
  return (
    <Card className=" col-span-1 h-[165pxs]">
      <CardHeader className="flex justify-between w-full">
        <p className="text-xs">Years of experience</p>
      </CardHeader>
      <div className="flex justify-center">
        <Divider className="w-[96%]" />
      </div>
      <CardBody className="flex justify-center items-center">
        <p className="text-8xl">{yearsOfExperienceConfig.year}</p>
      </CardBody>
    </Card>
  );
}
