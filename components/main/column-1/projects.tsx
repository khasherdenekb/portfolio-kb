"use client";
import { projectConfig } from "@/config/main/column-1/column1Config";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { FC } from "react";
import Image from "next/image";
import { ScrollArea } from "@/components/ui/scroll-area";

type ProjectProps = {
  project: (typeof projectConfig)[number];
};

const Projects = () => {
  return (
    <Card className="col-span-2 long-card flex justify-between flex-col">
      <CardHeader>
        <p className="small-text">Projects</p>
        <Separator />
      </CardHeader>
      <ScrollArea className="h-auto">
        <CardContent className="small-text flex flex-col  leading-normal gap-3">
          {projectConfig?.map((project) => (
            <Project project={project} />
          ))}
        </CardContent>
      </ScrollArea>
    </Card>
  );
};

const Project: FC<ProjectProps> = ({ project }) => {
  const { name, description, image } = project;

  return (
    <div key={name} className="flex gap-6 flex-col">
      <div className="flex gap-5">
        <Image src={image} alt={name} width={40} height={40} />
        <div className="flex flex-col">
          <p>{name}</p>
          <p className="text-gray-400">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
