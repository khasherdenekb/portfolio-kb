import { aboutConfig } from "@/config/main/column-2/column2Config";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

const About = () => {
  return (
    <Card className="small-card flex justify-between flex-col">
      <CardHeader>
        <p className="small-text">About</p>
        <Separator />
      </CardHeader>
      <ScrollArea className="h-full">
        <CardContent className="small-text flex flex-col justify-end leading-normal">
          {aboutConfig?.description}
        </CardContent>
      </ScrollArea>
    </Card>
  );
};
export default About;
