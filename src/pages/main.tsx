import { FC } from "react";
import { StepBaseIcon, StepcheckIcon } from "@/components/icons";
import { ScrollArea } from "@/components/ui/scroll-area";
import Summary from "@/components/sections/summary";
import Prepare from "@/components/sections/prepare";
import { useTransactionContext } from "@/components/context/transaction";

const Main: FC = () => {
  const { isPrepared } = useTransactionContext();

  return (
    <ScrollArea className="h-screen ">
      <main className="flex b flex-1 flex-col gap-2  py-5 md:px-4  lg:gap-6 lg:p-6 mb-20">
        <div className="flex flex-col md:flex-row  justify-center mb-4 p-3">
          <div className="flex md:flex-col z-10 gap-2 items-center ml-1 ">
            {!isPrepared ? (
              <StepBaseIcon className="md:-mt-1" color="#6938EF" />
            ) : (
              <StepcheckIcon />
            )}

            <span className="text-[#6938EF] text-sm">Prepare</span>
          </div>

          <div className="md:w-[200px] md:h-[1.3px] h-[14px] w-[2px] mt-1 md:mt-3 md:-ml-[13px] md:-mr-5 ml-4 bg-[#6938EF]" />

          <div className="flex md:flex-col z-10 items-center gap-2 md:-mt-[4px]">
            <StepBaseIcon color={!isPrepared ? "#E4E4E7" : "#6938EF"} />
            <span className="text-[#A0A0AB] text-sm md:-mt-1">Summary</span>
          </div>
        </div>

        {!isPrepared ? <Prepare /> : <Summary />}
      </main>
    </ScrollArea>
  );
};

export default Main;
