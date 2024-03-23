import React from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { yearsOfExperienceConfig } from "@/config/main/siteInfoConfig";

export default function YearsOfExperience() {
  return (
    <Card>
      <CardHeader className="flex justify-between w-full ">
        <p className="small-text">Years of experience</p>
        <Separator />
      </CardHeader>
      <CardContent className="flex justify-center items-center h-[60%] ">
        <p className="text-8xl 4xl:text-[7rem]">
          {yearsOfExperienceConfig.year}
        </p>
      </CardContent>
    </Card>
  );
}
