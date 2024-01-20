"use client";
import React from "react";
import { Avatar, Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import { Verified } from "lucide-react";
import { profileConfig } from "@/config/main/column-1/column1Config";

export default function Profile() {
  return (
    <Card className=" col-span-1 small-card">
      <CardHeader className="flex justify-between w-full">
        <p className="small-text">Profile</p>
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500" />
        </span>
      </CardHeader>
      <div className="flex justify-center">
        <Divider className="w-[96%]" />
      </div>
      <CardBody className="flex justify-end">
        <div className="flex gap-2 z-10">
          <Avatar size="sm" src="/assets/profile.jpg" />
          <div className="flex flex-col ">
            <p className="small-text flex items-center gap-1">
              {profileConfig?.name}
              <Verified className="w-3 h-3 stroke-black fill-yellow-400 2xl:w-4 2xl:h-4" />
            </p>
            <p className="small-text">{profileConfig?.profession}</p>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
