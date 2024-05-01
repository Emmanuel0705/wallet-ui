import { Button } from "@/components/ui/button";
import { FC } from "react";
import { MainnetIcon } from "@/components/icons";
import { SideNav } from "./sidebar";
import { MenuIcon, WalletIcon } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useWeb3Modal, useWeb3ModalAccount } from "@web3modal/ethers/react";
import { shortWalletAddress } from "@/utils";

const Header: FC = () => {
  const { open } = useWeb3Modal();

  const { address, isConnected } = useWeb3ModalAccount();

  return (
    <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6 overflow-hidden sticky top-0 z-40 bg-[#FAFAFA]">
      <img src="/images/sm-logo.png" className="md:hidden w-auto h-[30px]" />
      <Button
        className="ms-auto gap-2 hidden md:flex shadow-none"
        variant="outline"
      >
        <MainnetIcon />
        Mainnet
      </Button>
      <Button className="ms-auto md:ms-0 gap-2" onClick={() => open()}>
        <WalletIcon />
        {isConnected ? shortWalletAddress(address as string) : "Connect Wallet"}
      </Button>
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="shrink-0 md:hidden bg-transparent border-none rounded-none shadow-none outline-none"
          >
            <MenuIcon className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>

        <SheetContent
          side="left"
          className="flex flex-col  overflow-hidden p-0"
        >
          <SideNav />
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default Header;
