import { aboutConfig } from "@/config/main/column-2/column2Config";
import {
  Card,
  CardBody,
  CardHeader,
  Divider,
  ScrollShadow,
} from "@nextui-org/react";

const About = () => {
  return (
    <Card className="small-card">
      <CardHeader>
        <p className="small-text">About</p>
      </CardHeader>
      <div className="flex justify-center">
        <Divider className="w-[96%]" />
      </div>
      <CardBody className="small-text pt-5 flex flex-col justify-end leading-normal">
        <ScrollShadow>{aboutConfig?.description}</ScrollShadow>
      </CardBody>
    </Card>
  );
};
export default About;
