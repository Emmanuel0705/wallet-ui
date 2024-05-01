import React, { createContext, useContext, useState } from "react";
import Papa from "papaparse";
import { ITransaction, isArrayValid } from "@/utils";

interface Props {
  children: React.ReactNode;
}

interface TransactionContextType {
  transactions: ITransaction[];
  csvToTransaction: (file: File) => void;
  setTransactions: (transaction: ITransaction[]) => void;
  isPrepared: boolean;
  setIsPrepared: (isPrepared: boolean) => void;
}

const TransactionContext = createContext<TransactionContextType | undefined>(
  undefined
);

export const useTransactionContext = () => {
  const context = useContext(TransactionContext);
  if (!context) {
    throw new Error(
      "useTransactionContext must be used within a TransactionProvider"
    );
  }
  return context;
};

export const TransactionProvider: React.FC<Props> = ({ children }) => {
  const [transactions, setTransactions] = useState<ITransaction[]>([]);
  const [isPrepared, setIsPrepared] = useState<boolean>(false);

  const csvToTransaction = async (file: File) => {
    if (file) {
      try {
        Papa.parse(file, {
          complete: (result) => {
            if (result?.data?.length) {
              console.log(isArrayValid(result.data));
              if (isArrayValid(result?.data)) {
                setTransactions(result?.data as [ITransaction]);
              }
            }
          },
          header: true,
        });
      } catch (error) {
        console.error("Error converting CSV to JSON:", error);
      }
    }
  };

  return (
    <TransactionContext.Provider
      value={{
        transactions,
        csvToTransaction,
        setTransactions,
        isPrepared,
        setIsPrepared,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
