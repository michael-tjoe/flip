import type { AppProps } from "next/app";
import Layout from "@components/Layout";
import TransactionProvider from "@context/transactions";
import "@styles/global";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <TransactionProvider>
        <Component {...pageProps} />
      </TransactionProvider>
    </Layout>
  );
}

export default MyApp;
