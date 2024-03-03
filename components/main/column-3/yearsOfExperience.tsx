import React from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { yearsOfExperienceConfig } from "@/config/main/column-3/column3Config";
import { Separator } from "@/components/ui/separator";

export default function YearsOfExperience() {
  return (
    <Card className="col-span-1 small-card">
      <CardHeader className="flex justify-between w-full ">
        <p className="small-text">Years of experience</p>
        <Separator />
      </CardHeader>
      <CardContent className="flex justify-center items-center h-[60%] ">
        <p className="text-8xl 4xl:text-[7rem]">{yearsOfExperienceConfig.year}</p>
      </CardContent>
    </Card>
  );
}
