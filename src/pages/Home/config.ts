import type { SelectOption } from "@components/Select/types";
import { parseDate } from "@utils/parseDate";
import { TransactionData } from "./types";

export const DEFAULT_SORT_METHOD = {
  id: -1,
  label: "",
} as SelectOption;

export const SORT_METHODS = [
  {
    id: 1,
    label: "Nama A-Z",
  },

  {
    id: 2,
    label: "Nama Z-A",
  },

  {
    id: 3,
    label: "Tanggal terbaru",
  },

  {
    id: 4,
    label: "Tanggal terlama",
  },
];

const sortString = (firstData, secondData, isAscending) => {
  const firstPrecedenceCondition = isAscending
    ? firstData < secondData
    : firstData > secondData;

  const secondPrecedenceCondition = isAscending
    ? firstData > secondData
    : firstData < secondData;

  if (firstPrecedenceCondition) return -1;
  if (secondPrecedenceCondition) return 1;

  return 0;
};

const sortDate = (firstData, secondData, isAscending) => {
  var dateA = firstData.getTime();
  var dateB = secondData.getTime();

  const firstPrecedenceCondition = isAscending ? dateA < dateB : dateA > dateB;
  const secondPrecedenceCondition = isAscending ? dateA > dateB : dateA < dateB;

  if (firstPrecedenceCondition) return -1;
  if (secondPrecedenceCondition) return 1;

  return 0;
};

export const SORT_FUNCTIONS = {
  1: (a: TransactionData, b: TransactionData) => {
    const firstBeneficiaryName = a.beneficiary_name.toLowerCase();
    const secondBeneficiaryName = b.beneficiary_name.toLocaleLowerCase();
    return sortString(firstBeneficiaryName, secondBeneficiaryName, true);
  },

  2: (a: TransactionData, b: TransactionData) => {
    const firstBeneficiaryName = a.beneficiary_name.toLowerCase();
    const secondBeneficiaryName = b.beneficiary_name.toLocaleLowerCase();
    return sortString(firstBeneficiaryName, secondBeneficiaryName, false);
  },

  3: (a: TransactionData, b: TransactionData) => {
    const firstDate = parseDate(a.created_at);
    const secondDate = parseDate(b.created_at);
    return sortDate(firstDate, secondDate, false);
  },

  4: (a: TransactionData, b: TransactionData) => {
    const firstDate = parseDate(a.created_at);
    const secondDate = parseDate(b.created_at);
    return sortDate(firstDate, secondDate, true);
  },
};
