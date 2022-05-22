import { memo } from "react";
import { styTransactionWrapper } from "./styles";

function TransactionCard() {
  return (
    <div className={styTransactionWrapper}>
      <div className="content">
        <div className="transaction-detail">
          <h2>BCA ➔ Mandiri</h2>
          <p>BAMBANG HASSAN</p>
          <span>Rp1000.000 • 1 Januari 2020</span>
        </div>
        <button>Berhasil</button>
      </div>
    </div>
  );
}

export default memo(TransactionCard);
