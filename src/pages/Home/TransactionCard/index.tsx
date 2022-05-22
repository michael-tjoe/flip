import { memo } from "react";
import Button from "@components/Button";
import type { TransactionData } from "../types";
import { styTransactionWrapper } from "./styles";
import { thousandSeparator } from "@utils/thousandSeparator";
import { getFormattedDate } from "@utils/parseDate";
import { EnumTransactionStatus } from "./constants";

interface TransactionCardProps {
  transactionData: TransactionData;
}

function TransactionCard({ transactionData }: TransactionCardProps) {
  const {
    sender_bank,
    beneficiary_bank,
    beneficiary_name,
    amount,
    created_at,
    status,
  } = transactionData;

  const isSuccess = status === EnumTransactionStatus.SUCCESS;

  return (
    <div className={styTransactionWrapper}>
      <div {...(isSuccess && { "data-success": true })} className="content">
        <div className="transaction-detail">
          <h2>
            {sender_bank} ➔ {beneficiary_bank}
          </h2>
          <p>{beneficiary_name}</p>
          <span>
            Rp&nbsp;{thousandSeparator(String(amount))}&nbsp;•{" "}
            {getFormattedDate(created_at)}
          </span>
        </div>

        <Button success={isSuccess} ghost={!isSuccess} primary={!isSuccess}>
          {isSuccess ? "Berhasil" : "Pengecekan"}
        </Button>
      </div>
    </div>
  );
}

export default memo(TransactionCard);
