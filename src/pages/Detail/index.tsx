import { useContext } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

import Button from "@components/Button";
import { TransactionContext } from "@context/transactions";
import { styPageContent } from "@styles/base";

import { thousandSeparator } from "@utils/thousandSeparator";
import { getFormattedDate } from "@utils/parseDate";
import { EnumTransactionStatus } from "@pages/Home/TransactionCard/constants";

import {
  styCtaWrapper,
  styTransactionDetailCard,
  styTransactionInfo,
} from "./styles";
import Loader from "@components/Loader";

function TransactionDetail() {
  const { transactions, isLoading } = useContext(TransactionContext);
  const router = useRouter();

  const transactionId = router.query.id;
  const transactionDetail = transactions.find(
    (transaction) => transaction?.id === transactionId
  );

  const senderBank = transactionDetail?.sender_bank || "";
  const beneficiaryBank = transactionDetail?.beneficiary_bank || "";
  const beneficiaryName = transactionDetail?.beneficiary_name || "";
  const accountNumber = transactionDetail?.account_number || "";
  const amount = transactionDetail?.amount || 0;
  const remark = transactionDetail?.remark || "";
  const createdAt = transactionDetail?.created_at || "";
  const uniqueCode = transactionDetail?.unique_code || "";
  const transactionStatus = transactionDetail?.status || "";

  const isSuccess = transactionStatus === EnumTransactionStatus.SUCCESS;

  const handleClickBack = () => {
    router.push("/");
  };

  return (
    <div className={styPageContent}>
      <h1 className="title">Detail Transaksi</h1>

      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className={styTransactionDetailCard}>
            <p>Id Transaksi: #{transactionDetail?.id || ""}</p>
            <Button success={isSuccess} ghost={!isSuccess} primary={!isSuccess}>
              {isSuccess ? "Berhasil" : "Pengecekan"}
            </Button>
          </div>

          <div className={styTransactionInfo}>
            {/* TODO Replace image accordint to mock (currently i dont know how to download the image) */}
            <div className="icon">
              <Image layout="fill" alt="" src="/transaction.png" />
            </div>

            <dl>
              <dt>Pengirim</dt>
              <dd className="uppercase">{senderBank}</dd>

              <dt>Penerima</dt>
              <dd>{beneficiaryBank}</dd>
              <dd>{accountNumber}</dd>
              <dd>{beneficiaryName}</dd>

              <dt>Nominal</dt>
              <dd>Rp&nbsp;{thousandSeparator(amount)}</dd>
              <dd className="bold">
                Kode Unik: <span>{uniqueCode}</span>
              </dd>

              <dt>Catatan</dt>
              <dd>{remark}</dd>

              <dt>Waktu Dibuat</dt>
              <dd>{getFormattedDate(createdAt)}</dd>
            </dl>
          </div>

          <div className={styCtaWrapper}>
            <Button onClick={handleClickBack} className="cta" ghost primary>
              Kembali
            </Button>
          </div>
        </>
      )}
    </div>
  );
}

export default TransactionDetail;
