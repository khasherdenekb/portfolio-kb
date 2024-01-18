import { ModeToggle } from "@/components/theme/ModeToggle";
import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";

const Mode = () => {
  return (
    <Card className=" col-span-1 small-card">
      <CardHeader>
        <p className="small-text">Mode</p>
      </CardHeader>
      <div className="flex justify-center">
        <Divider className="w-[96%]" />
      </div>
      <CardBody className="flex justify-center items-center">
        <ModeToggle />
      </CardBody>
    </Card>
  );
};
export default Mode;
