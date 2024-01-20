"use client";
import { Button, Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import { ScrollShadow } from "@nextui-org/react";
import { stackConfig } from "@/config/main/column-1/icons";
import { FC } from "react";

type StackProps = {
  stack: (typeof stackConfig)[number];
};

const Stacks = () => {
  return (
    <Card className=" col-span-2 small-card">
      <CardHeader>
        <p className="small-text">Stacks</p>
      </CardHeader>
      <div className="flex justify-center">
        <Divider className="w-[96%]" />
      </div>
      <CardBody className="small-text py-5 flex flex-col justify-end leading-normal">
        <ScrollShadow className="flex  gap-4 flex-wrap">
          {stackConfig?.map((stack) => (
            <Stack stack={stack} />
          ))}
        </ScrollShadow>
      </CardBody>
    </Card>
  );
};

const Stack: FC<StackProps> = ({ stack }) => {
  const { icon, name } = stack;
  return (
    <Button id={name} key={name} isIconOnly variant="flat" className="2xl:h-14 2xl:w-14">
      {icon}
    </Button>
  );
};

export default Stacks;
