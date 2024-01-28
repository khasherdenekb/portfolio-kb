"use client";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { educationConfig } from "@/config/main/column-3/column3Config";
import { FC } from "react";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";

type EducationProp = {
  education: (typeof educationConfig)[number];
};

const Educations = () => {
  return (
    <Card className=" col-span-2  long-card flex flex-col justify-between">
      <CardHeader>
        <p className="text-[10px] 2xl:text-xs">Educations & Certificates</p>
        <Separator />
      </CardHeader>
      <ScrollArea className="h-full">
        <CardContent className="small-text flex flex-col justify-end leading-normal gap-3">
          {educationConfig?.map((education) => (
            <Education education={education} />
          ))}
        </CardContent>
      </ScrollArea>
    </Card>
  );
};

const Education: FC<EducationProp> = ({ education }) => {
  const { year, description, name } = education;
  return (
    <div key={name} className="flex items-start">
      <p className="text-gray-500 w-[5rem] 4xl:w-[7rem] 3xl:w-[6rem]">{year}</p>
      <div className="flex flex-col">
        <p>{name}</p>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
};

export default Educations;
