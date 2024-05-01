import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { FC } from "react";
import { ExpandIcon } from "../icons";
import { ScrollArea } from "../ui/scroll-area";
import { DialogClose } from "@radix-ui/react-dialog";
import { ITransaction } from "@/utils";

interface IExpandAddress {
  errIndex?: number[];
  transactions?: ITransaction[];
}

const ExpandAddress: FC<IExpandAddress> = ({ transactions, errIndex }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <ExpandIcon />
      </DialogTrigger>
      <DialogContent className="w-[90%] md:w-[60%] p-0 h-[550px] bg-transparent border-none rounded-full">
        <div className="flex relative">
          <div className="absolute text-[#7A5AF8] hover:text-white rounded-tr-2xl rounded-bl-xl right-0 p-[6px]  z-30 top-0 cursor-pointer hover:bg-[#6938EF]">
            <DialogClose>
              <ExpandIcon />
            </DialogClose>
          </div>

          <div className=" absolute z-10 top-0 flex flex-col gap-3 p-[14px] h-[550px] text-center border-[#9B8AFB] rounded-l-2xl border bg-[#F4F3FF] text-[#9B8AFB]" />
          <ScrollArea className="w-full pr-5 border-[#9B8AFB] rounded-2xl bg-[#ffffff] border border-l-0 pb-0 py-3">
            <div className="z-20 text-xs text-[#70707B] flex-1 relative flex flex-col px-3 gap-2 h-[210px] bg-transparent ">
              {transactions?.map((e, i) => (
                <div key={e.address + i} className="flex gap-6 ">
                  <span className="text-xs text-[#9B8AFB]">{i + 1}</span>
                  <span
                    className={`text-xs ${
                      errIndex?.includes(i)
                        ? "text-[#F04438]"
                        : "text-[#70707B]"
                    } break-all`}
                  >
                    {e.address}, {e.amount}
                  </span>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ExpandAddress;
