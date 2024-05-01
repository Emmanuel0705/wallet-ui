import { Button } from "@/components/ui/button";
import { FC } from "react";
import { ScrollArea } from "../ui/scroll-area";
import { Input } from "../ui/input";
import {
  CancelIcon,
  ChevronDown,
  EnvelopeIcon,
  FileIcon,
  HomeIcon,
  LauncherIcon,
  LockerIcon,
  MintIcon,
  PremiumIcon,
  PresellIcon,
  SenderIcon,
  StakingIcon,
} from "@/components/icons";

export const SideNav: FC = () => {
  return (
    <ScrollArea>
      <div className="flex h-14 items-center px-4 lg:h-[60px] lg:px-6">
        <img src="/images/lg-logo.png" className="w-auto h-[20.7px] " />
      </div>
      <div className="pt-5">
        <ul className="grid items-start px-2 text-sm font-medium lg:px-4">
          <li className="flex items-center gap-3 cursor-pointer rounded-lg px-3 py-3 text-muted-foreground transition-all hover:text-primary">
            <HomeIcon />
            Home
          </li>
          <li className="flex items-center gap-3 cursor-pointer rounded-lg px-3 py-3 text-muted-foreground transition-all hover:text-primary">
            <StakingIcon />
            Staking
            <ChevronDown className="ms-auto" />
          </li>
          <li className="flex items-center gap-3 cursor-pointer rounded-lg px-3 py-3 text-muted-foreground transition-all hover:text-primary">
            <PremiumIcon />
            Premium IDO
            <ChevronDown className="ms-auto" />
          </li>

          <li className="flex items-center gap-3 cursor-pointer rounded-lg px-3 py-3 text-muted-foreground transition-all hover:text-primary">
            <LauncherIcon />
            Stealth launcher
            <ChevronDown className="ms-auto" />
          </li>
          <li className="flex items-center gap-3 cursor-pointer rounded-lg px-3 py-3 text-muted-foreground transition-all hover:text-primary">
            <PresellIcon />
            Presale
            <ChevronDown className="ms-auto" />
          </li>
          <li className="flex items-center gap-3 cursor-pointer rounded-lg px-3 py-3 text-muted-foreground transition-all hover:text-primary">
            <MintIcon />
            Token Mint
            <ChevronDown className="ms-auto" />
          </li>
          <li className="flex items-center gap-3 cursor-pointer rounded-lg px-3 py-3 text-muted-foreground transition-all hover:text-primary">
            <LockerIcon />
            Token Locker
            <ChevronDown className="ms-auto" />
          </li>
          <Button className="ms-0 text-[#5925DC] justify-start gap-2 my-5 bg-[#F4F3FF] shadow-none ">
            <SenderIcon />
            Multi Sender
          </Button>
        </ul>
      </div>
      <div className="px-6 flex flex-col ">
        <div className="relative my-10">
          <Button
            variant={"outline"}
            className="h-7 w-7 absolute -top-3.5 -right-3"
            size="icon"
          >
            <CancelIcon />
          </Button>
          <h3 className="text-sm font-medium">Newsletter</h3>
          <p className="text-xs text-[#70707B] my-4">
            Join our mailing list for exclusive updates, new token launches, and
            valuable insights.
          </p>
          <div className="flex flex-col gap-4">
            <Input
              className="border-[#9B8AFB] placeholder:text-xs rounded-2xl outline-none"
              placeholder="Email address"
            />
            <Button className="gap-2 w-full">
              <EnvelopeIcon /> Subscribe
            </Button>
          </div>
        </div>
        <div className="flex mb-11 ml-2 gap-2 cursor-pointer">
          <FileIcon />
          Documentation
        </div>
      </div>
    </ScrollArea>
  );
};
const SideBar: FC<any> = () => {
  return (
    <div className="hidden border border-[#F4F4F5] bg-muted/40 md:block bg-[#FFFFFF]">
      <div className="flex h-full max-h-screen flex-col gap-2 sticky top-0">
        <SideNav />
      </div>
    </div>
  );
};

export default SideBar;
