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
        <p className="text-xs">Stacks</p>
      </CardHeader>
      <div className="flex justify-center">
        <Divider className="w-[96%]" />
      </div>
      <CardBody className="text-xs py-5 flex flex-col justify-end leading-normal">
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
  const { icon } = stack;
  return (
    <Button isIconOnly variant="flat" size="lg">
      {icon}
    </Button>
  );
};

export default Stacks;
