"use client";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { stackConfig } from "@/config/main/column-1/icons";
import { FC } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";

type StackProps = {
  stack: (typeof stackConfig)[number];
};

const Stacks = () => {
  return (
    <Card className=" col-span-2 small-card flex justify-between flex-col">
      <CardHeader>
        <p className="small-text">Stacks</p>
        <Separator />
      </CardHeader>
      <ScrollArea className="h-full">
        <CardContent className=" gap-5 flex flex-wrap">
          {stackConfig?.map((stack) => (
            <Stack stack={stack} />
          ))}
        </CardContent>
      </ScrollArea>
    </Card>
  );
};

const Stack: FC<StackProps> = ({ stack }) => {
  const { icon, name } = stack;
  return (
    <Button id={name} key={name} className="relative 2xl:h-11 2xl:w-11 h-8 w-8">
      <span> {icon}</span>
    </Button>
  );
};

export default Stacks;
