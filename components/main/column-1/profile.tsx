"use client";
import React from "react";
import { Verified } from "lucide-react";
import { profileConfig } from "@/config/main/column-1/column1Config";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Profile() {
  return (
    <Card className="col-span-1 small-card flex justify-between flex-col">
      <CardHeader>
        <div className="flex flex-row items-center justify-between">
          <p className="small-text">Profile</p>
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500" />
          </span>
        </div>
        <Separator />
      </CardHeader>
      <CardContent className="justify-end  flex-col">
        <div className="flex gap-2  items-center 3xl:gap-4">
          <Avatar className="w-8 h-8 2xl:h-9 2xl:w-9  4xl:h-14 4xl:w-14 hidden sm:flex">
            <AvatarImage src="/assets/profile.jpg" alt="profileImg" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col ">
            <div className="flex items-center gap-[3px]">
              <p className="text-[11px] md:text-[8.9px] lg:text-[8.5px] 2xl:text-[12px] 3xl:text-[14px] 4xl:text-[16px]">
                {profileConfig?.name}
              </p>
              <Verified className="w-3 h-3 stroke-black fill-yellow-400 2xl:w-4 2xl:h-4" />
            </div>
            <p className="small-text 3xl:text-[10px] 4xl:text-[14px]">{profileConfig?.profession}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
