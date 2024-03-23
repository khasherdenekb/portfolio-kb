import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Verified } from "lucide-react";
import { ModeToggle } from "./ModeToggle";
import { profileConfig } from "@/config/main/siteInfoConfig";

const Navbar = () => {
  return (
    <nav>
      <div className="container hidden md:flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <div className="flex gap-2  items-center 3xl:gap-4">
          <Avatar className="2xl:w-12 2xl:h-12">
            <AvatarImage src="/assets/profile.jpg" alt="profileImg" />
            <AvatarFallback>KB</AvatarFallback>
          </Avatar>
          <div className="flex flex-col ">
            <div className="flex items-center gap-[3px]">
              <p className="small-text">{profileConfig?.name}</p>
              <Verified className="w-3 h-3 stroke-black fill-yellow-400 2xl:w-4 2xl:h-4" />
            </div>
            <p className="small-text">{profileConfig?.profession}</p>
          </div>
        </div>
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
