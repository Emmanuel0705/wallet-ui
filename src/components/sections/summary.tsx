import { Button } from "@/components/ui/button";
import { FC } from "react";
import { ScrollArea } from "../ui/scroll-area";
import CheckerBG from "../ui/checker-bg";
import { Input } from "../ui/input";
import { toast } from "../ui/use-toast";
import { RoundedCheck } from "../icons";
import { useTransactionContext } from "../context/transaction";

const Summary: FC = () => {
  const { transactions, setIsPrepared } = useTransactionContext();
  return (
    <div className="relative overflow-hidden p-5 md:p-9 flex flex-1 self-center bg-[#FFFFFF] w-full lg:w-2/3 xl:w-2/4  rounded-lg md:border md:border-[#F4F4F5]">
      <CheckerBG className="absolute top-0 right-0" />
      <div className="flex flex-col gap-1 w-full">
        <h3 className="md:text-[30px] text-[20px]">Multi sender</h3>
        <div className="flex flex-col gap-6">
          <div>
            <div className="mt-5 p-4 border border-[#F4F4F5]">
              <label className="text-[#70707B] text-xs ml-2">
                Total number of token to send
              </label>
              <Input
                className="border-none placeholder:text-2xl placeholder:text-[#6938EF]  text-[#70707B] text-2xl rounded-2xl outline-none"
                placeholder="0.00 BNB"
              />
            </div>
            <div className="flex justify-between">
              <div>
                <span className="text-[#A0A0AB] text-xs">Token Balance </span>
                <span className="text-[#6938EF] text-xs"> 0 BNB</span>
              </div>
              <div className="">
                <span className="text-[#A0A0AB] text-xs">BNB Balance </span>
                <span className="text-[#6938EF] text-xs"> 0 BNB</span>
              </div>
            </div>
          </div>
          <div className="p-4 w-full max-h-24 border border-[#FEC84B] flex flex-col gap-2 rounded-lg bg-[#FFFCF5]">
            <div className="gap-3 flex items-center">
              <span className="text-[#DC6803] text-lg">⚠</span>

              <p className="text-[#DC6803] text-xs">
                Not enough token in your wallet
              </p>
              <p className="text-[#DC6803] text-xs font-medium">Add funds</p>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <label className="text-[#3F3F46] text-sm">List of recipients</label>

            <ScrollArea className="w-full pb-0 py-3">
              <div className="z-20 text-xs text-[#70707B] flex flex-col gap-2 h-[210px] bg-transparent ">
                {transactions?.map((trx) => (
                  <div className="flex justify-between border-b border-b-[#F4F4F5] py-3">
                    <span className="text-xs text-[#70707B] whitespace-nowrap w-[90%] md:w-full truncate">
                      {trx.address}
                    </span>
                    <span className="text-sm text-[#6938EF]">
                      {" "}
                      {trx.amount}
                    </span>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </div>
          <div className="flex justify-between gap-9">
            <Button
              onClick={() => setIsPrepared(false)}
              variant="outline"
              size="lg"
              className="w-full shadow-none rounded-full"
            >
              Go back
            </Button>
            <Button
              onClick={() => {
                toast({
                  title: (
                    <p className="text-[#101828]">Successfully sent token</p>
                  ) as any,
                  description:
                    "Your token has been successfully sent to all addresses",

                  action: <RoundedCheck className="top-3 absolute left-0" />,
                  className: "pl-20 py-6 text-[#667085] ",
                });
              }}
              size="lg"
              className="w-full shadow-none rounded-full"
            >
              Proceed
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
