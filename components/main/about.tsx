import { aboutConfig } from "@/config/main/siteInfoConfig";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

const About = () => {
  return (
    <Card>
      <CardHeader>
        <p className="small-text">About</p>
        <Separator />
      </CardHeader>
      <ScrollArea className="h-full 2xl:h-[300px]">
        <CardContent className="small-text flex flex-col justify-end leading-normal">
          {aboutConfig?.description}
        </CardContent>
      </ScrollArea>
    </Card>
  );
};
export default About;
