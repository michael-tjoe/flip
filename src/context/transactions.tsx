import { createContext, ReactNode, useMemo } from "react";
import { TRANSACTION_API } from "@constants/api";
import useFetch from "@hooks/useFetch";
import { TransactionData } from "@pages/Home/types";

interface TransactionProviderProps {
  children: ReactNode;
}

export const TransactionContext = createContext({
  transactions: [] as TransactionData[],
  isLoading: false,
  totalAmount: 0,
});

function TransactionProvider({ children }: TransactionProviderProps) {
  const { data, isLoading } = useFetch(TRANSACTION_API);

  const transactions = useMemo(() => {
    if (data) {
      return Object.entries(data).map(([_, value]) => {
        return value as TransactionData;
      });
    }
    return [];
  }, [data]);

  const totalAmount = useMemo(() => {
    return transactions.reduce((current, transaction: TransactionData) => {
      return current + transaction.amount;
    }, 0);
  }, [transactions]);

  return (
    <TransactionContext.Provider
      value={{ transactions, totalAmount, isLoading }}
    >
      {children}
    </TransactionContext.Provider>
  );
}

export default TransactionProvider;
