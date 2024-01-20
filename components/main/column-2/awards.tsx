"use client";
import { awardConfig } from "@/config/main/column-2/column2Config";
import { Card, CardBody, CardHeader, Divider, ScrollShadow } from "@nextui-org/react";
import { FC } from "react";

type AwardProps = {
  award: (typeof awardConfig)[number];
};

const Awards = () => {
  return (
    <Card className=" long-card">
      <CardHeader>
        <p className="small-text">Awards</p>
      </CardHeader>
      <div className="flex justify-center">
        <Divider className="w-[96%]" />
      </div>
      <CardBody className="small-text py-5 flex flex-col justify-end leading-normal">
        <ScrollShadow className="flex gap-5 flex-col">
          {awardConfig?.map((award) => (
            <Award award={award} />
          ))}
        </ScrollShadow>
      </CardBody>
    </Card>
  );
};

const Award: FC<AwardProps> = ({ award }) => {
  const { name, description, year } = award;
  return (
    <div key={name} className="flex items-start gap-6">
      <p className="text-gray-500">{year}</p>
      <div className="flex flex-col">
        <p>{name}</p>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
};
export default Awards;
