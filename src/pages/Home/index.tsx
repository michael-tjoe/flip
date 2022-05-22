import { useState } from "react";
import Search from "@components/Search";
import Select from "@components/Select";
import type { SelectOption } from "@components/Select/types";
import { TRANSACTION_API } from "@constants/api";
import useFetch from "@hooks/useFetch";
import { styPageContent } from "@styles/base";

import { DEFAULT_SORT_METHOD, SORT_METHODS } from "./config";
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

  const { data, isLoading } = useFetch(TRANSACTION_API);

  const handleSearchKeyword = (newKeyword: string) => {
    setSearchKeyword(newKeyword);
  };

  const handleChangeSortMethod = (option: SelectOption) => {
    setSortMethod(option);
  };

  if (isLoading) return <div>Loading</div>;

  return (
    <div className={styPageContent}>
      <h1 className="title">Daftar Transaksi</h1>

      <div className={styGreetingContainer}>
        <p>Halo kak!</p>
        <span>
          Kamu telah melakukan transaksi sebesar <em>Rp5.000.000</em> sejak
          menggunakan Flip.
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
        {data &&
          Object.entries(data).map(([key, value]) => {
            return <TransactionCard key={key} transactionData={value as TransactionData} />;
          })}
      </div>
    </div>
  );
}

export default Home;
