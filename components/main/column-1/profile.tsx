"use client";
import React from "react";
import { Avatar, Card, CardBody, CardHeader, Divider } from "@nextui-org/react";

export default function Profile() {
  return (
    <Card className=" col-span-1 small-card">
      <CardHeader className="flex justify-between w-full">
        <p className="small-text">Profile</p>
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
        </span>
      </CardHeader>
      <div className="flex justify-center">
        <Divider className="w-[96%]" />
      </div>
      <CardBody className="flex justify-end">
        <div className="flex gap-2 z-10">
          <Avatar size="sm" src="https://i.redd.it/4bntpcgrzuv81.jpg" />
          <div className="flex flex-col ">
            <p className="small-text">Khash-Erdene 'B</p>
            <p className="small-text">Software Engineer</p>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
