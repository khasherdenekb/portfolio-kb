"use client";
import React from "react";
import { Button, Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import { MoveUpRight } from "lucide-react";
import { modeConfig } from "@/config/main/column-1/column1Config";

export default function Mode() {
  return (
    <Card className=" col-span-1 small-card">
      <CardHeader className="flex justify-between w-full">
        <p className="text-xs">Mode</p>
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
      </CardHeader>
      <div className="flex justify-center">
        <Divider className="w-[96%]" />
      </div>
      <CardBody className="flex justify-end flex-col">
        <p className="text-xs pb-3 leading-normal">{modeConfig?.description}</p>
        <Button
          size="sm"
          className="w-full flex justify-between"
          endContent={<MoveUpRight className="h-3 w-3" />}
          variant="flat"
          onClick={(e) => {
            window.location.href = modeConfig.link;
            e.preventDefault();
          }}
        >
          Contact Me
        </Button>
      </CardBody>
    </Card>
  );
}
