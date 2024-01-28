import React from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MoveDown, MoveUpRight } from "lucide-react";
import { cvConfig } from "@/config/main/column-3/column3Config";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export default function CV() {
  return (
    <Card className=" col-span-1 small-card flex flex-col justify-between">
      <CardHeader>
        <p className="small-text">CV</p>
        <Separator />
      </CardHeader>
      <CardContent className="flex justify-end flex-col gap-3">
        <Link href={cvConfig?.link} target="_blank" aria-label="viewCv">
          <Button className="w-full flex justify-between h-7 2xl:h-8 3xl:h-10" id="downloadCv">
            <p className="small-text"> View</p>
            <MoveUpRight className="h-3 w-3" />
          </Button>
        </Link>
        <Link href={cvConfig?.link} target="_blank" aria-label="downloadCv">
          <Button className="w-full flex justify-between h-7 2xl:h-8 3xl:h-10" id="downloadCv">
            <p className="small-text"> Download</p>
            <MoveDown className="h-3 w-3" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
