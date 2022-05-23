import { useContext, useMemo, useState } from "react";

import Search from "@components/Search";
import Select from "@components/Select";
import Loader from "@components/Loader";

import { TransactionContext } from "@context/transactions";
import useDebounce from "@hooks/useDebounce";
import { thousandSeparator } from "@utils/thousandSeparator";
import type { SelectOption } from "@components/Select/types";
import { styPageContent } from "@styles/base";

import { DEFAULT_SORT_METHOD, SORT_FUNCTIONS, SORT_METHODS } from "./config";
import TransactionCard from "./TransactionCard";
import {
  styGreetingContainer,
  styTransactionFilter,
  styTransactionList,
} from "./styles";
import { TransactionData } from "./types";

function Home() {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [sortMethod, setSortMethod] = useState(DEFAULT_SORT_METHOD);

  const { transactions, isLoading, totalAmount } =
    useContext(TransactionContext);

  const handleSearchKeyword = (newKeyword: string) => {
    setSearchKeyword(newKeyword);
  };

  const handleChangeSortMethod = (option: SelectOption) => {
    setSortMethod(option);
  };

  const debouncedKeyword = useDebounce(searchKeyword);

  const transactionsByKeyword = useMemo(() => {
    if (debouncedKeyword) {
      return transactions.filter((transaction) => {
        const { beneficiary_bank, sender_bank, beneficiary_name } = transaction;

        const keyword = debouncedKeyword.toLocaleLowerCase();

        const beneficiaryBank = beneficiary_bank.toLocaleLowerCase();
        const senderBank = sender_bank.toLocaleLowerCase();
        const beneficiaryName = beneficiary_name.toLocaleLowerCase();

        return (
          senderBank.includes(keyword) ||
          beneficiaryBank.includes(keyword) ||
          beneficiaryName.includes(keyword)
        );
      });
    }
    return transactions;
  }, [debouncedKeyword, transactions]);

  const orderedTransactions = useMemo(() => {
    if (sortMethod.label) {
      const sortFunction = SORT_FUNCTIONS[sortMethod.id];
      return transactionsByKeyword.sort(sortFunction);
    }
    return transactionsByKeyword;
  }, [sortMethod, transactionsByKeyword]);

  return (
    <div className={styPageContent}>
      <h1 className="title">Daftar Transaksi</h1>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {" "}
          <div className={styGreetingContainer}>
            <p>Halo kak!</p>
            <span>
              Kamu telah melakukan transaksi sebesar&nbsp;
              <em>Rp {thousandSeparator(totalAmount)}</em> sejak menggunakan
              Flip.
            </span>
          </div>
          <div className={styTransactionFilter}>
            <Search
              className="transaction-search"
              value={searchKeyword}
              onChange={handleSearchKeyword}
            />
            <Select
              className="sort-methods"
              value={sortMethod.id}
              initialLabel="URUTKAN"
              options={SORT_METHODS}
              onChange={handleChangeSortMethod}
            />
          </div>
          <div className={styTransactionList}>
            {orderedTransactions.map((transaction: TransactionData) => {
              return (
                <TransactionCard
                  key={transaction.id}
                  transactionData={transaction}
                />
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

export default Home;
