"use client";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { FC } from "react";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { educationConfig } from "@/config/main/siteInfoConfig";

type EducationProp = {
  education: (typeof educationConfig)[number];
};

const Educations = () => {
  return (
    <Card>
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
      <p className="text-gray-500 w-[5rem] 2xl:w-[6.5rem]">{year}</p>
      <div className="flex flex-col">
        <p>{name}</p>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
};

export default Educations;
