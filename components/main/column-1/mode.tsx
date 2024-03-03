import { ModeToggle } from "@/components/shared/ModeToggle";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Mode = () => {
  return (
    <Card className="col-span-1 small-card">
      <div>
        <CardHeader>
          <p className="small-text">Mode</p>
          <Separator className="w-[96%]" />
        </CardHeader>
      </div>
      <CardContent className="flex w-full  items-center h-[60%]   justify-center">
        <ModeToggle />
      </CardContent>
    </Card>
  );
};
export default Mode;
