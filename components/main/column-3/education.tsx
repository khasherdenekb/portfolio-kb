"use client";
import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import { ScrollShadow } from "@nextui-org/react";
import { educationConfig } from "@/config/main/column-3/column3Config";
import { FC } from "react";

type EducationProp = {
  education: (typeof educationConfig)[number];
};

const Educations = () => {
  return (
    <Card className=" col-span-2  long-card">
      <CardHeader>
        <p className="text-xs">Educations & Certificates</p>
      </CardHeader>
      <div className="flex justify-center">
        <Divider className="w-[96%]" />
      </div>
      <CardBody className="text-xs py-5 flex flex-col justify-end leading-normal">
        <ScrollShadow className="flex gap-5 flex-col">
          {educationConfig?.map((education) => (
            <Education education={education} />
          ))}
        </ScrollShadow>
      </CardBody>
    </Card>
  );
};

const Education: FC<EducationProp> = ({ education }) => {
  const { year, description, name } = education;
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

export default Educations;
