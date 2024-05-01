import { Button } from "@/components/ui/button";
import { ChangeEvent, FC, useRef, useState } from "react";
import { AddIcon } from "../icons";
import { ScrollArea } from "../ui/scroll-area";
import CheckerBG from "../ui/checker-bg";
import { Input } from "../ui/input";
import ExpandAddress from "./expand-address";
import { Switch } from "../ui/switch";
import loader from "/images/loader.gif";

import {
  ITransaction,
  checkError,
  removeDuplicatesAndInvalidAddresses,
  setAmountToSameValue,
} from "@/utils";
import { useTransactionContext } from "../context/transaction";

interface IError {
  index?: number;
  message?: string;
}

const Prepare: FC = () => {
  const ref = useRef<any>();
  const [errors, setError] = useState<IError[]>();
  const [errIndex, setErrIndex] = useState<number[]>();
  const [isSameAmount, setIsSameAmount] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { csvToTransaction, setTransactions, transactions, setIsPrepared } =
    useTransactionContext();

  const handleSelectedCSV = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    csvToTransaction(file as File);
  };

  const handleProceed = () => {
    if (!transactions?.length) return;

    setIsLoading(true);
    //I intentionally set timeout to 2 sec so you could see the loading button
    setTimeout(() => {
      const { errors, errIndex } = checkError(transactions as [ITransaction]);
      if (!errors?.length) setIsPrepared(true);

      setError(errors as [IError]);
      setErrIndex(errIndex);
      setIsLoading(false);
    }, 1000);
  };

  const handleAmountToSameValue = (amount: string) => {
    if (!transactions?.length) return;
    const newData = setAmountToSameValue(transactions as any, amount || "0");
    setTransactions(newData);
  };

  const handleMarge = () => {
    const newData = removeDuplicatesAndInvalidAddresses(transactions as any);
    setTransactions(newData);
    setError([]);
    setErrIndex([]);
  };

  return (
    <div className="relative overflow-hidden p-5 md:p-9 flex flex-1 self-center bg-[#FFFFFF] w-full lg:w-2/3 xl:w-2/4  rounded-lg md:border md:border-[#F4F4F5]">
      <CheckerBG className="absolute top-0 right-0 z-0" />
      <div className="flex flex-col gap-1 w-full z-10">
        <h3 className="md:text-[30px] text-[20px] text-[#18181B]">
          Multi sender
        </h3>
        <div className="my-4 w-full">
          {/* <label className="text-[#3F3F46] text-sm">Token Address</label> */}
          <Input
            type="text"
            className="border-[#9B8AFB] w-full z-50 placeholder:text-xs text-xs my-2 text-[#70707B] rounded-2xl outline-none"
            placeholder="Paste token address here Paste token address her"
          />
        </div>

        <div className="">
          <label className="text-[#3F3F46] text-sm ">
            List Addresses in CSV
          </label>

          <div className="flex my-2 relative bg-[#ffffff]">
            <div className="absolute text-[#7A5AF8] hover:text-white rounded-tr-2xl rounded-bl-xl right-0 p-[6px]  z-30 top-0 cursor-pointer hover:bg-[#6938EF]">
              <ExpandAddress
                transactions={transactions as ITransaction[] | any}
                errIndex={errIndex}
              />
            </div>

            <div className=" absolute z-10 top-0 flex flex-col gap-3 p-[14px] h-[236px] text-center border-[#9B8AFB] rounded-l-2xl border bg-[#F4F3FF] text-[#9B8AFB]" />
            <ScrollArea className="w-full pr-5 border-[#9B8AFB] rounded-2xl  border border-l-0 pb-0 py-3">
              <div className="z-20 text-xs text-[#70707B] flex-1 relative flex flex-col px-3 gap-2 h-[210px] bg-transparent ">
                {transactions?.length ? (
                  transactions?.map((e: ITransaction, i) => (
                    <div key={e.address + i} className="flex gap-6 ">
                      <span className="text-xs text-[#9B8AFB]"> {i + 1}</span>
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
                  ))
                ) : (
                  <div className="flex flex-col gap-6  max-w-screen-sm">
                    <div className="flex gap-6">
                      <span className="text-xs text-[#9B8AFB]"> 0</span>
                      <span>By format: address, amount</span>
                    </div>
                    <div className="text-xs ml-8 text-[#70707B] flex">
                      <div className="break-all">
                        0x3187d7b392f74388F5DD17525BeFF8a6f7Bcb11e, 0
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>
          </div>

          <div className="flex justify-between my-4  text-[#6938EF]">
            <a
              href="https://bit.ly/49VV6ex"
              target="_blank"
              className="text-xs p-1"
            >
              Show sample CSV
            </a>
            <input
              type="file"
              onChange={handleSelectedCSV}
              ref={ref}
              className="hidden"
              accept=".csv"
            />
            <button
              className="flex gap-2 cursor-pointer"
              onClick={() => ref.current?.click()}
            >
              <AddIcon />
              <label className="text-[#6938EF] mt-[3px] text-sm cursor-pointer">
                Upload CSV
              </label>
            </button>
          </div>
        </div>

        {errors?.length && transactions?.length ? (
          <div>
            <ScrollArea className="p-4 w-full mt-1 max-h-24 border border-[#FDA29B] flex flex-col gap-2 rounded-lg bg-[#FFFBFA]">
              {errors?.map((e: IError) => (
                <div key={e.index} className="gap-2 flex flex-col">
                  <p className="text-[#D92D20] text-xs">{e.message}</p>
                  <p className="text-[#B42318] text-xs font-medium">
                    Go to line {e.index}
                  </p>
                </div>
              ))}
            </ScrollArea>
            <div className="flex justify-between gap-9 py-5">
              <Button
                onClick={() => handleMarge()}
                variant="outline"
                size="lg"
                className="w-full shadow-none rounded-full"
              >
                Merge
              </Button>
              <Button
                onClick={() => handleProceed()}
                size="lg"
                className="w-full shadow-none rounded-full"
              >
                Proceed
              </Button>
            </div>
          </div>
        ) : (
          <div>
            <div className="my-1 flex gap-1 flex-col">
              <div className=" flex justify-between">
                <label className="text-[#3F3F46] text-sm">
                  *Enter same amount for all addresses
                </label>
                <Switch
                  checked={isSameAmount}
                  onClick={() => setIsSameAmount(!isSameAmount)}
                />
              </div>
              {isSameAmount ? (
                <Input
                  onChange={(e) => handleAmountToSameValue(e.target.value)}
                  className="border-none bg-[#FAFAFA] placeholder:text-xs my-2 text-[#70707B] rounded-2xl outline-none"
                  placeholder="0"
                />
              ) : (
                <div />
              )}
              <Button
                onClick={() => handleProceed()}
                size="lg"
                disabled={isLoading}
                className="mt-4 rounded-full w-full"
              >
                {isLoading ? (
                  <div className="flex gap-3">
                    <img className="h-5 w-5" src={loader} alt="loading" />
                    Checking for possible error
                  </div>
                ) : (
                  <span>Proceed </span>
                )}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Prepare;
