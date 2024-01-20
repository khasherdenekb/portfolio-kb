"use client";
import { workExperienceConfig } from "@/config/main/column-3/column3Config";
import { Card, CardBody, CardHeader, Divider, ScrollShadow } from "@nextui-org/react";
import { FC } from "react";

type ExperienceProp = {
  experience: (typeof workExperienceConfig)[number];
};

const Experiences = () => {
  return (
    <Card className="small-card">
      <CardHeader>
        <p className="small-text">Work experience</p>
      </CardHeader>
      <div className="flex justify-center">
        <Divider className="w-[96%]" />
      </div>
      <CardBody className="small-text py-5 flex flex-col justify-end leading-normal">
        <ScrollShadow className="flex gap-5 flex-col">
          {workExperienceConfig?.map((experience) => (
            <Experience experience={experience} />
          ))}
        </ScrollShadow>
      </CardBody>
    </Card>
  );
};

const Experience: FC<ExperienceProp> = ({ experience }) => {
  const { year, description, name } = experience;
  return (
    <div key={name} className="flex items-start">
      <p className="text-gray-500 w-24">{year}</p>
      <div className="flex flex-col">
        <p>{name}</p>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
};

export default Experiences;
