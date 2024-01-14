import { projectConfig } from "@/config/main/column-1/column1Config";
import { Card, CardBody, CardHeader, Divider, Image } from "@nextui-org/react";
import { ScrollShadow } from "@nextui-org/react";
import { FC } from "react";

type ProjectProps = {
  project: (typeof projectConfig)[number];
  key: number;
};

const Projects = () => {
  return (
    <Card className="col-span-2 long-card">
      <CardHeader>
        <p className="text-xs">Projects</p>
      </CardHeader>
      <div className="flex justify-center">
        <Divider className="w-[96%]" />
      </div>
      <CardBody className="text-xs py-5 flex flex-col justify-end leading-normal">
        <ScrollShadow className="flex flex-col gap-6">
          {projectConfig?.map((project, key) => (
            <Project project={project} key={key} />
          ))}
        </ScrollShadow>
      </CardBody>
    </Card>
  );
};

const Project: FC<ProjectProps> = ({ project, key }) => {
  const { name, description, image } = project;

  return (
    <div key={key} className="flex gap-6 flex-col">
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
