import { styPageContent } from "@styles/base";
import TransactionCard from "./TransactionCard";
import { styGreetingContainer, styTransactionList } from "./styles";

function Home() {
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

      <div className={styTransactionList}>
        <TransactionCard />
        <TransactionCard />
        <TransactionCard />
      </div>
    </div>
  );
}

export default Home;
