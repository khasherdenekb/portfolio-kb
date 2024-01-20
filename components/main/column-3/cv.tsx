import React from "react";
import { Button, Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import { MoveDown, MoveUpRight } from "lucide-react";
import { cvConfig } from "@/config/main/column-3/column3Config";
import Link from "next/link";

export default function CV() {
  return (
    <Card className=" col-span-1 small-card">
      <CardHeader>
        <p className="small-text">CV</p>
      </CardHeader>
      <div className="flex justify-center">
        <Divider className="w-[96%]" />
      </div>
      <CardBody className="flex justify-end flex-col gap-3">
        <Link href={cvConfig?.link} target="_blank" aria-label="viewCv">
          <Button
            size="sm"
            className="w-full flex justify-between"
            endContent={<MoveUpRight className="h-3 w-3" />}
            variant="flat"
            id="downloadCv"
          >
            View
          </Button>
        </Link>
        <Link href={cvConfig?.link} target="_blank" aria-label="downloadCv">
          <Button
            size="sm"
            className="w-full flex justify-between"
            endContent={<MoveDown className="h-3 w-3" />}
            variant="flat"
            id="downloadCv"
          >
            Download
          </Button>
        </Link>
      </CardBody>
    </Card>
  );
}
