import { number, object } from "zod";

export const converter = object({
  rial: number("فیلد نمیتواند خالی باشد.").positive(
    "تنها اعداد بزرگتر از صفر مجاز هستند.",
  ),
  dollar: number("فیلد نمیتواند خالی باشد.").positive(
    "تنها اعداد بزرگتر از صفر مجاز هستند.",
  ),
});
