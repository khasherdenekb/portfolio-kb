import React from "react";
import { Button, Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import { MoveDown, MoveUpRight } from "lucide-react";
import { cvConfig } from "@/config/main/column-3/column3Config";
import Link from "next/link";

export default function CV() {
  return (
    <Card className=" col-span-1 small-card">
      <CardHeader>
        <p className="text-xs">CV</p>
      </CardHeader>
      <div className="flex justify-center">
        <Divider className="w-[96%]" />
      </div>
      <CardBody className="flex justify-end flex-col gap-3">
        <Link href={cvConfig?.link} target="_blank">
          <Button
            size="sm"
            className="w-full flex justify-between"
            endContent={<MoveUpRight className="h-3 w-3" />}
            variant="flat"
          >
            View
          </Button>
        </Link>
        <Button
          size="sm"
          className="w-full flex justify-between"
          endContent={<MoveDown className="h-3 w-3" />}
          variant="flat"
        >
          Download
        </Button>
      </CardBody>
    </Card>
  );
}
