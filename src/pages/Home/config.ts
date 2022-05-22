import type { SelectOption } from "@components/Select/types";

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
