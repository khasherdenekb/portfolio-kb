import { User } from "@nextui-org/react";
import { ModeToggle } from "../theme/ModeToggle";
import { Separator } from "@/components/ui/separator";
const Navbar = () => {
  return (
    <nav>
      <div className="flex justify-between w-full">
        <User
          name="Khash-Erdene Bolor-Erdene"
          description="Software Engineer"
          avatarProps={{
            src: "https://i.redd.it/4bntpcgrzuv81.jpg",
          }}
        />
        <ModeToggle />
      </div>
      <div className="py-5">
        <Separator />
      </div>
    </nav>
  );
};
export default Navbar;
