"use client";
import { Button, Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import { getInTouchConfig } from "@/config/main/column-2/icons";
import { FC } from "react";
import Link from "next/link";

type GetInTouchProps = {
  social: (typeof getInTouchConfig)[number];
  key: number;
};

const GetInTouch = () => {
  return (
    <Card className=" small-card">
      <CardHeader>
        <p className="small-text">Get in touch</p>
      </CardHeader>
      <div className="flex justify-center">
        <Divider className="w-[96%]" />
      </div>
      <CardBody className="flex justify-evenly flex-row items-center">
        {getInTouchConfig?.map((social, key) => (
          <SocialButtons social={social} key={key} />
        ))}
      </CardBody>
    </Card>
  );
};

const SocialButtons: FC<GetInTouchProps> = ({ social, key }) => {
  const { icon, link } = social;
  return (
    <Link href={link} target="_blank" key={key} aria-label="social media icon" id={key?.toString()}>
      <Button isIconOnly size="lg">
        {icon}
      </Button>
    </Link>
  );
};

export default GetInTouch;
