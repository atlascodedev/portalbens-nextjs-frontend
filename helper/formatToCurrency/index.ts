import { Currency, Locale } from "../../@types/";

const formatToCurrency = (
  locale: Locale,
  currency: Currency,
  value: number
): string => {
  const formatter = new Intl.NumberFormat(locale, {
    currency: currency,
    style: "currency",
  });

  return formatter.format(value);
};

export default formatToCurrency;
