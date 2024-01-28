"use client";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { getInTouchConfig } from "@/config/main/column-2/icons";
import { FC } from "react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

type GetInTouchProps = {
  social: (typeof getInTouchConfig)[number];
};

const GetInTouch = () => {
  return (
    <Card className=" small-card">
      <CardHeader>
        <p className="small-text">Get in touch</p>
        <Separator />
      </CardHeader>
      <CardContent className="flex w-full  items-center h-[60%]  gap-8 justify-center">
        {getInTouchConfig?.map((social) => (
          <SocialButtons social={social} />
        ))}
      </CardContent>
    </Card>
  );
};

const SocialButtons: FC<GetInTouchProps> = ({ social }) => {
  const { icon, link, name } = social;
  return (
    <Link href={link} target="_blank" key={name} aria-label="social media icon" id={name}>
      <Button aria-label={name} className="2xl:h-12 2xl:w-12 h-11 w-11 3xl:h-14 3xl:w-14 4xl:h-16 4xl:w-16">
        <span>{icon}</span>
      </Button>
    </Link>
  );
};

export default GetInTouch;
