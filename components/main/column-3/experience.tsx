"use client";
import { workExperienceConfig } from "@/config/main/column-3/column3Config";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { FC } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

type ExperienceProp = {
  experience: (typeof workExperienceConfig)[number];
};

const Experiences = () => {
  return (
    <Card className="small-card flex flex-col justify-between">
      <CardHeader>
        <p className="small-text">Work experience</p>
        <Separator />
      </CardHeader>
      <CardContent className="small-text py-5 flex flex-col justify-end leading-normal">
        {workExperienceConfig?.map((experience) => (
          <Experience experience={experience} />
        ))}
      </CardContent>
    </Card>
  );
};

const Experience: FC<ExperienceProp> = ({ experience }) => {
  const { year, description, name } = experience;
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

export default Experiences;
