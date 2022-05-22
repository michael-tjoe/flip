import { useEffect } from "react";

function getDateString(value: number[]) {
  return value
    .join(",")
    .replace(/(\d+),(\d+),(\d+),(\d+),(\d+),(\d+)/, "$1/$2/$3 $4:$5:$6");
}

export function parseDate(value: string) {
  const data = value.split(" ");

  const date = data[0];
  const timezone = data[1];

  const dateParts = date.split("-").map((datePart) => Number(datePart));
  const timeZoneParts = timezone.split(":").map((datePart) => Number(datePart));
  const dateParams = [...dateParts, ...timeZoneParts];

  return new Date(getDateString(dateParams));
}

export function formatDate(date: Date) {
  return date.toLocaleDateString("id-ID", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function getFormattedDate(value: string) {
  return formatDate(parseDate(value));
}
