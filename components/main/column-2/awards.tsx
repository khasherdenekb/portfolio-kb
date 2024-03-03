"use client";
import { awardConfig } from "@/config/main/column-2/column2Config";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { FC } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

type AwardProps = {
  award: (typeof awardConfig)[number];
};

const Awards = () => {
  return (
    <Card className="long-card flex justify-between flex-col">
      <CardHeader>
        <p className="small-text">Awards</p>
        <Separator />
      </CardHeader>
      <ScrollArea className="h-full">
        <CardContent className="small-text py-5 flex flex-col justify-end leading-normal gap-3">
          {awardConfig?.map((award) => (
            <Award award={award} />
          ))}
        </CardContent>
      </ScrollArea>
    </Card>
  );
};

const Award: FC<AwardProps> = ({ award }) => {
  const { name, description, year } = award;
  return (
    <div key={name} className="flex gap-6">
      <p className="text-gray-500">{year}</p>
      <div className="flex flex-col">
        <p>{name}</p>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
};
export default Awards;
